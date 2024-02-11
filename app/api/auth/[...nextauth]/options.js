import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import saveUser from "@/db/save-user";

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
      if (user) {
        const dbUser = await getUserByEmail(user.email);
        if (!dbUser) {
          console.log("Creating new user");
          const user_id = user.name.replace(/\s/g, "_").toLowerCase();
          let image = user.picture;
          
          saveUser(user_id, dbUser, image);
          //    save user here
        }
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
