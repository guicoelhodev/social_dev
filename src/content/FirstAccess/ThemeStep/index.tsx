import { ModalLanguages } from '@components/FC/ModalLanguages';
import { IFormSchema } from '@context/firstAccess/types';
import { ThemeContext } from '@context/theme';
import { UserActionsContext } from '@context/userActions';
import React, { useContext } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { handleUserLanguagesActions } from 'src/reducers/globalComponentsReducer/actions';

import * as S from '../style';

interface IThemeStep {
  hookForm: UseFormReturn<IFormSchema>;
}

export const ThemeStep: React.FC<IThemeStep> = ({ hookForm }) => {
  const { globalComponentsState, dispatchGlobalComponents } =
    useContext(UserActionsContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const addThemeMode = (mode: 'light' | 'dark') => {
    hookForm.setValue('theme', mode);
    setTheme(mode);
  };

  const handleLanguages = (languages: string[]) => {
    return hookForm.setValue('languages', languages.join('-'));
  };
  return (
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
          onClick={() => dispatchGlobalComponents(handleUserLanguagesActions())}
        >
          Add languages
        </button>
        {globalComponentsState.languages && (
          <ModalLanguages handleLanguages={handleLanguages} />
        )}
      </S.LanguagesModal>
    </S.View>
  );
};
