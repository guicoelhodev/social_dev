import { Modal } from '@components/UI/Modal';
import { UserActionsContext } from '@context/userActions';
import React, { useContext, useMemo } from 'react';
import { useState } from 'react';
import { languages } from 'src/global/data/languages';
import { handleUserLanguagesActions } from 'src/reducers/globalComponentsReducer/actions';

import * as S from './style';

interface IModalLanguages {
  handleLanguages: (arg1: string[]) => void;
}
export const ModalLanguages: React.FC<IModalLanguages> = ({
  handleLanguages,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [languagesSelected, setLanguagesSelected] = useState(['']);
  const { globalComponentsState, dispatchGlobalComponents } =
    useContext(UserActionsContext);

  let filteredLanguages = languages.filter((item) =>
    item.name.includes(inputValue)
  );

  const userSession = useMemo(() => {
    if (typeof window !== 'undefined') {
      let tmpUser = localStorage.getItem('@USER_CREDENTIALS');

      setLanguagesSelected(tmpUser ? JSON.parse(tmpUser).languages : []);
      return tmpUser ? JSON.parse(tmpUser) : null;
    } else return null;
  }, [window]);

  // const handleLanguagesUser = () => {
  //   // let tmpUser = localStorage.getItem('@USER_CREDENTIALS');

  //   // if (!tmpUser) {
  //   //   let userLanguage = {
  //   //     languages: languagesSelected,
  //   //   };

  //   //   localStorage.setItem('@USER_CREDENTIALS', JSON.stringify(userLanguage));
  //   // } else {
  //   //   let userJson = JSON.parse(tmpUser);
  //   //   userJson = { ...userJson, languages: languagesSelected };
  //   //   localStorage?.setItem('@USER_CREDENTIALS', JSON.stringify(userJson));
  //   // }

  //   dispatchGlobalComponents(handleUserLanguagesActions());
  // };

  return (
    <Modal
      handleModalState={() =>
        dispatchGlobalComponents(handleUserLanguagesActions())
      }
      title="Favorite tools"
    >
      <S.Container>
        <S.SearchContainer>
          <input
            placeholder="Search your tool "
            onChange={({ target }) => setInputValue(target.value)}
          />
        </S.SearchContainer>
        <S.GridIcons>
          {filteredLanguages.map((lang) => (
            <li>
              <S.Checkbox
                type="checkbox"
                defaultChecked={
                  userSession?.languages?.includes(lang.name) ? true : false
                }
                onChange={({ target }) => {
                  if (target.checked)
                    return setLanguagesSelected((prev) => [...prev, lang.name]);

                  let tmpLanguages = languagesSelected.filter(
                    (item) => item !== lang.name
                  );
                  return setLanguagesSelected(tmpLanguages);
                }}
              />
              <p>{lang.name}</p>
              <lang.icon />
            </li>
          ))}
        </S.GridIcons>

        <footer>
          <button
            onClick={() => {
              handleLanguages(languagesSelected);
              return dispatchGlobalComponents(handleUserLanguagesActions());
            }}
          >
            <p>Save</p>
          </button>
        </footer>
      </S.Container>
    </Modal>
  );
};
