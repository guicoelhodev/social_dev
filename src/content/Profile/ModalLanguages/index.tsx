import { Modal } from '@components/UI/Modal';
import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { languages } from './languages';

import * as S from './style';

interface IModalLanguages {
  setState: Dispatch<SetStateAction<boolean>>;
}

export const ModalLanguages: React.FC<IModalLanguages> = ({ setState }) => {
  const user = {
    languages: ['Java', 'Docker', 'Javascript', 'React'],
  };
  const [inputValue, setInputValue] = useState('');

  let filteredLanguages = languages.filter((item) =>
    item.name.includes(inputValue)
  );

  return (
    <Modal setModalState={setState} title="Favorite tools">
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
                  user.languages.includes(lang.name) ? true : false
                }
              />
              <p>{lang.name}</p>
              <lang.icon />
            </li>
          ))}
        </S.GridIcons>

        <footer>
          <button onClick={() => setState(false)}>
            <p>Salvar</p>
          </button>
        </footer>
      </S.Container>
    </Modal>
  );
};
