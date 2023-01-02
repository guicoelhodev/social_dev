import { IGlobalComponents } from '@context/userActions';
import { ActionsGlobalComponents } from './actions';

export const globalComponentsReducer = (
  state: IGlobalComponents,
  action: { type: string }
) => {
  switch (action.type) {
    case ActionsGlobalComponents.HANDLE_CHAT_STATE: {
      return { ...state, chat: !state.chat };
    }
    case ActionsGlobalComponents.HANDLE_CREATE_POST: {
      return { ...state, createPost: !state.createPost };
    }
    case ActionsGlobalComponents.HANDLE_ADD_FRIEND: {
      return { ...state, addFriend: !state.addFriend };
    }
    case ActionsGlobalComponents.HANDLE_LANGUAGES_STATE: {
      return { ...state, languages: !state.languages };
    }
    default:
      return state;
  }
};
