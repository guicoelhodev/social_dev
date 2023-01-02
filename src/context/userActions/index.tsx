import { createContext, FC, ReactNode, useReducer } from 'react';
import { globalComponentsReducer } from 'src/reducers/globalComponentsReducer/reducer';

export type IGlobalComponents = {
  chat: boolean;
  createPost: boolean;
  addFriend: boolean;
  languages: boolean;
};
type IUserActionsContext = {
  globalComponentsState: any;
  dispatchGlobalComponents: any;
};

interface IUserActionsProvider {
  children: ReactNode;
}

export const UserActionsContext = createContext<IUserActionsContext>(null!);

export const UserActionsProvider: FC<IUserActionsProvider> = ({ children }) => {
  const [globalComponentsState, dispatchGlobalComponents] = useReducer<any>(
    globalComponentsReducer,
    {
      addFriend: false,
      chat: false,
      createPost: false,
      languages: false,
    }
  );

  return (
    <UserActionsContext.Provider
      value={{ globalComponentsState, dispatchGlobalComponents }}
    >
      {children}
    </UserActionsContext.Provider>
  );
};
