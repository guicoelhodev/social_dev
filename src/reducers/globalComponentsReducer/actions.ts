export enum ActionsGlobalComponents {
  HANDLE_CHAT_STATE = 'HANDLE_CHAT_STATE',
  HANDLE_CREATE_POST = 'HANDLE_CREATE_POST',
  HANDLE_ADD_FRIEND = 'HANDLE_ADD_FRIEND',
}

export const handleChatState = () => {
  return { type: ActionsGlobalComponents.HANDLE_CHAT_STATE };
};

export const handleCreatPostState = () => {
  return { type: ActionsGlobalComponents.HANDLE_CREATE_POST };
};

export const handleAddFriend = () => {
  return { type: ActionsGlobalComponents.HANDLE_ADD_FRIEND };
};
