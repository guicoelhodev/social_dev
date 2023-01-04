interface ISignInParams {
  firstAccess: string;
  password: string;
  confirmPassword: string;
  description?: string;
  name: string;
  email: string;
  image: string;
  github_username?: string;
  job?: string;
  languages: string | null;
}
interface ICreateUserParams {
  firstName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  firstAccess: boolean;
  lastName?: string;
  photo: string | null;
  github_username: string | null;
  skills?: string | null;
}
export const createUser = async (paramsSign: ISignInParams) => {
  let splitedName = paramsSign.name
    .split(' ')
    .filter((item) => item.length !== 0);

  let params: ICreateUserParams = {
    email: paramsSign.email,
    firstName: splitedName.at(0)!,
    lastName: splitedName.at(-1),
    firstAccess: Boolean(paramsSign.firstAccess),
    photo: paramsSign.image,
    confirmPassword: paramsSign.confirmPassword,
    password: paramsSign.password,
    github_username:
      paramsSign.github_username !== 'null'
        ? paramsSign.github_username!
        : null,
    skills: paramsSign.languages ? paramsSign.languages : null,
  };

  console.log('foi', params);
  return true;
};
