import { NextPageAuthenticated } from '@auth';
import Router from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { PasswordStep } from './PasswordStep';
import { FirstAccessContext } from '@context/firstAccess';
import { DescriptionStep } from './DescriptionStep';
import { ThemeStep } from './ThemeStep';

import * as S from './style';

const FirstAccess: NextPageAuthenticated = () => {
  const { data: session } = useSession();
  const [showContent, setShowContent] = useState(false);

  const navigateToHomePage = (firstAccess: boolean) => {
    return !firstAccess ? Router.push('/') : setShowContent(true);
  };

  const container = useRef<HTMLDivElement>(null);

  const { hookForm, handleScroll, currentStep, handleSubmitForm } =
    useContext(FirstAccessContext);

  const validatePassword = hookForm.handleSubmit(() =>
    handleScroll(container, 'next')
  );

  useEffect(() => {
    if (session?.user) {
      navigateToHomePage(session.user.firstAccess);
    }
  }, [session]);

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

            <PasswordStep hookForm={hookForm} />
            <DescriptionStep hookForm={hookForm} />
            <ThemeStep hookForm={hookForm} />
          </S.ViewContainer>

          <footer>
            <S.NavigateButton
              onClick={() => handleScroll(container, 'prev')}
              disabled={currentStep === 0}
            >
              <AiOutlineArrowLeft />
              <p>Previous</p>
            </S.NavigateButton>

            {currentStep !== 3 ? (
              <S.NavigateButton
                onClick={() =>
                  currentStep === 1
                    ? validatePassword()
                    : handleScroll(container, 'next')
                }
              >
                <p>Next</p>
                <AiOutlineArrowRight />
              </S.NavigateButton>
            ) : (
              <S.NavigateButton onClick={handleSubmitForm}>
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
