import { verifyCredentials } from '@http/login/POST/verifyCredentials';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

import GithubProvider from 'next-auth/providers/github';
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createUser } from '@services/http/login/POST/createUser';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      type: 'credentials',
      credentials: {},
      async authorize(credentials: any, req) {
        return credentials;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async jwt({ account, user, token, profile }) {
      const socialAuth = ['github', 'linkedin'];

      const params = {
        email: user?.email!,
        password: '',
        external: socialAuth.includes(account?.provider!),
      };

      const { data, status } = await verifyCredentials(params);

      if (user) {
        const loginResponse = profile as any;

        let tmpUser = {
          ...user,
          id: data.id,
          github_username: loginResponse?.login,
          firstAccess: status === 500, // if get error, means that user dont exist on DB
        };

        token.user = tmpUser;
      }

      if (user && user?.method === 'createUser') {
        await createUser(user as any);

        token.user = { ...user, firstAccess: false };
      }

      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token.user as any;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
