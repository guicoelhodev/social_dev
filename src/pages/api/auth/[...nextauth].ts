import { verifyCredentials } from '@http/login/POST/verifyCredentials';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';

import GithubProvider from 'next-auth/providers/github';
import LinkedInProvider from 'next-auth/providers/linkedin';

const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
    // {
    //   async au(authorize) {

    //     return Promise.resolve(authorize);
    //   },
    // },
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      const socialAuth = ['github', 'linkedin'];
      //console.log('signData', signData);
      const params = {
        email: user.email!,
        password: '',
        external: socialAuth.includes(account?.provider!),
      };
      // const params = {
      //   email: 'sammonteiro10@gmail.com',
      //   password: 'jojo',
      //   external: false,
      // };
      const response = await verifyCredentials(params);
      // credentials = response as any;
      console.log('aaaaaaaaaaaaaaaaaaa', profile);

      // sessionStorage.setItem('@USER_LOGIN', JSON.stringify(response));
      return true;
    },
    async session(p) {
      console.log('p', p);
      return p.session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
