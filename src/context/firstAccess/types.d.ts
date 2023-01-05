import { Dispatch, RefObject, SetStateAction } from 'react';
import { schema } from './formSchema';

export type IFormSchema = z.infer<typeof schema>;

export type IFirstAccessContext = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  hookForm: UseForm<IFormSchema>;
  handleScroll: (
    arg1: RefObject<HTMLDivElement>,
    arg2: 'prev' | 'next'
  ) => void;
  handleSubmitForm: any;
};

export interface IFirstAccessProvider {
  children: ReactNode;
}
