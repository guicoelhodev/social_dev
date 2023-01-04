import { NextPageAuthenticated } from '@auth';
import { PasswordInput, TextInput } from '@components/UI/inputs';
import { zodResolver } from '@hookform/resolvers/zod';
import Router from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './style';
import * as z from 'zod';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from '@context/theme';
import { ModalLanguages } from '@components/FC/ModalLanguages';
import { UserActionsContext } from '@context/userActions';
import { handleUserLanguagesActions } from 'src/reducers/globalComponentsReducer/actions';

type IFirstAccess = z.infer<typeof schema>;

const schema = z.object({
  github_username: z.string(),
  password: z
    .string({ required_error: 'This field is required' })
    .min(8, { message: 'Password must contain at least 8 character(s)' }),
  job: z.string({ required_error: 'This field is required' }),
  description: z.string(),
  theme: z.string().nullish(),
});

const FirstAccess: NextPageAuthenticated = () => {
  const [showContent, setShowContent] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { globalComponentsState, dispatchGlobalComponents } =
    useContext(UserActionsContext);

  const container = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useContext(ThemeContext);

  const navigateToHomePage = () => {
    if (typeof window !== 'undefined') {
      let userContent = localStorage.getItem('@USER_CREDENTIALS');

      if (userContent && !JSON.parse(userContent).firstAccess)
        // return Router.push('/');
        setShowContent(true);
      return;
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<IFirstAccess>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    let user = localStorage.getItem('@USER_CREDENTIALS');
    user = user ? JSON.parse(user) : {};

    data = Object.assign(data, user);

    localStorage.setItem('@USER_CREDENTIALS', JSON.stringify(data));
    Router.push('/');
  });

  const validatePassword = handleSubmit(() => handleScroll('next'));

  const description = watch('description');

  const handleScroll = (direction: 'prev' | 'next') => {
    const div = container.current;

    if (direction === 'next') {
      setCurrentStep((prev) => prev + 1);
      div!.scrollLeft = div!.scrollLeft + div!.offsetWidth;
    } else {
      setCurrentStep((prev) => prev - 1);
      div!.scrollLeft = div!.scrollLeft - div!.offsetWidth;
    }
  };

  const addThemeMode = (mode: 'light' | 'dark') => {
    setValue('theme', mode);
    setTheme(mode);
  };

  // useEffect(() => {
  //   navigateToHomePage();
  // }, []);

  return (
    <S.Container>
      {showContent && (
        <main>
          <span className={currentStep === 0 ? 'hidden' : ''}>
            Step: {currentStep}/3
          </span>
          <S.ViewContainer ref={container}>
            <S.View>
              <h3>Welcome to Social Dev</h3>

              <p>Before we start, fill the next steps</p>
            </S.View>

            <S.View>
              <TextInput
                label="Job "
                placeholder="ex: software developer"
                type="text"
                register={register('job')}
                error={errors.job?.message}
              />
              <TextInput
                label="github username"
                placeholder="ex: guicoelhodev"
                type="text"
                register={register('github_username')}
                error={errors.github_username?.message}
              />
              <PasswordInput
                label="Password*"
                register={register('password', {
                  onBlur: () => console.log('aslsdshuh'),
                })}
                placeholder="*********"
                error={errors.password?.message}
              />
            </S.View>

            <S.View>
              <h4>Tell us about you</h4>

              <S.DescriptionContainer>
                <p>{description?.length}/200</p>
                <textarea {...register('description')} maxLength={200} />
              </S.DescriptionContainer>
            </S.View>

            <S.View>
              <h3>What theme do you prefer?</h3>

              <S.ButtonMode>
                <button
                  onClick={() => addThemeMode('light')}
                  className={theme === 'light' ? 'active' : ''}
                >
                  <BsFillSunFill />
                </button>
                <button
                  onClick={() => addThemeMode('dark')}
                  className={theme === 'dark' ? 'active' : ''}
                >
                  <BsFillMoonFill />
                </button>
              </S.ButtonMode>

              <S.LanguagesModal>
                <button
                  onClick={() =>
                    dispatchGlobalComponents(handleUserLanguagesActions())
                  }
                >
                  Add languages
                </button>
                {globalComponentsState.languages && <ModalLanguages />}
              </S.LanguagesModal>
            </S.View>
          </S.ViewContainer>

          <footer>
            <S.NavigateButton
              onClick={() => handleScroll('prev')}
              disabled={currentStep === 0}
            >
              <AiOutlineArrowLeft />
              <p>Previous</p>
            </S.NavigateButton>

            {currentStep !== 3 ? (
              <S.NavigateButton
                onClick={() =>
                  currentStep === 1 ? validatePassword() : handleScroll('next')
                }
              >
                <p>Next</p>
                <AiOutlineArrowRight />
              </S.NavigateButton>
            ) : (
              <S.NavigateButton onClick={onSubmit}>
                <p>Done</p>
                <AiOutlineArrowRight />
              </S.NavigateButton>
            )}
          </footer>
        </main>
      )}
    </S.Container>
  );
};

export default FirstAccess;
