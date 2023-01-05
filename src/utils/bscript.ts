import { compareSync } from 'bcrypt';

export const validateCryptMessage = async (
  messageClient: string,
  messageCrypted: string
) => {
  return compareSync(messageClient, messageCrypted);
};
