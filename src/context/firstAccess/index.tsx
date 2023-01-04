import { zodResolver } from '@hookform/resolvers/zod';
import { createContext, FC, RefObject, useState } from 'react';
import { useForm } from 'react-hook-form';

import { schema } from './formSchema';
import {
  IFormSchema,
  IFirstAccessContext,
  IFirstAccessProvider,
} from './types';

export const FirstAccessContext = createContext<IFirstAccessContext>(null!);

export const FirstAccessProvider: FC<IFirstAccessProvider> = ({ children }) => {
  const hookForm = useForm<IFormSchema>({
    resolver: zodResolver(schema),
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleScroll = (
    container: RefObject<HTMLDivElement>,
    direction: 'prev' | 'next'
  ) => {
    const div = container.current;

    if (direction === 'next') {
      setCurrentStep((prev) => prev + 1);
      div!.scrollLeft = div!.scrollLeft + div!.offsetWidth;
    } else {
      setCurrentStep((prev) => prev - 1);
      div!.scrollLeft = div!.scrollLeft - div!.offsetWidth;
    }
  };

  const handleSubmitForm = hookForm.handleSubmit((data) =>
    console.log('data:', data)
  );
  return (
    <FirstAccessContext.Provider
      value={{
        hookForm,
        handleScroll,
        currentStep,
        setCurrentStep,
        handleSubmitForm,
      }}
    >
      {children}
    </FirstAccessContext.Provider>
  );
};
