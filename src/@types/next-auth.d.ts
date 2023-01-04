import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      firstAccess: boolean;
      github_username?: string;
    } & DefaultSession['user'];
  }
  interface User extends DefaultUser {
    method?: string;
  }
}
