// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import api from '@/services/axios';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = profile?.sub; // Google profile id

        const userPayload = {
          name: profile?.name,
          email: profile?.email,
          googleId: profile?.sub,
          image: profile?.picture,
        };

        try {
          // Make a request to your Node.js backend to save the user
          const response = await api.post('/user/socialAuth', userPayload);
          console.log(response.data.token);
        } catch (error) {
          console.error('Error storing user in the database', error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
