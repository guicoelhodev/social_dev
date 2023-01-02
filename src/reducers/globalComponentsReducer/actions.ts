export enum ActionsGlobalComponents {
  HANDLE_CHAT_STATE = 'HANDLE_CHAT_STATE',
  HANDLE_CREATE_POST = 'HANDLE_CREATE_POST',
  HANDLE_ADD_FRIEND = 'HANDLE_ADD_FRIEND',
  HANDLE_LANGUAGES_STATE = 'HANDLE_LANGUAGES',
}

export const handleChatStateActions = () => {
  return { type: ActionsGlobalComponents.HANDLE_CHAT_STATE };
};

export const handleCreatPostStateActions = () => {
  return { type: ActionsGlobalComponents.HANDLE_CREATE_POST };
};

export const handleAddFriendActions = () => {
  return { type: ActionsGlobalComponents.HANDLE_ADD_FRIEND };
};

export const handleUserLanguagesActions = () => {
  return { type: ActionsGlobalComponents.HANDLE_LANGUAGES_STATE };
};
