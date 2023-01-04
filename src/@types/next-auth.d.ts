import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      firstAccess: boolean;
      github_username?: string;
    } & DefaultSession['user'];
  }
}
