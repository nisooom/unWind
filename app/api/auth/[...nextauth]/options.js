import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { saveUser } from "@/db/save-user";

export const options = {
  providers: [
    // GithubProvider({
    //   profile(profile) {
    //     let userRole = "github-user";
    //     return {
    //       ...profile,
    //       role: userRole,
    //     };
    //   },
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    GoogleProvider({
      profile(profile) {
        let userRole = "google-user";
        return {
          ...profile,
          role: userRole,
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("Creating new user");
      if (user) {
        let image = user.picture;
        await saveUser(user.id, user, image); // Save the user to the database
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
