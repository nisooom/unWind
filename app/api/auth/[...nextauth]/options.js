import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail, saveUser } from "@/db/user";
import { getToken } from "next-auth/jwt";


export const options = {
  providers: [
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
    async jwt({ token, account, user }) {
      if (user) {

        let image = user.picture;
        let name = user.name;
        let email = user.email;
        let dbUser = await getUserByEmail(email);
        if (!dbUser) {
          console.log("Creating new user");
          await saveUser(name, image, email);
        }
        token.role = user.role;
        console.log(user, account);
        token.accessToken = user.accessToken;
      }

      // const userToken = await getToken({ req, secret: process.env.NEXT_AUTH_SECRET });
      // console.log(userToken);

      return { ...token, ...user, ...account };
    },
    async session({ session, token, user, account }) {
      // if (session?.user) {
      //   session.user.role = token.role;
      // 
      // const {id_token} = account;

      // const decoded = jwt.verified(id_token, process.env.NEXT_AUTH_SECRET);

      // const userID = decoded.sub;
      // const userEmail = decoded.email;

      // const authToken = createAuthToken({userID, userEmail});

      // session.user = {
      //   ...session.user,
      //   userID,
      //   userEmail,
      //   ...(authToken && {authToken}),
      // };

      session.accessToken = token.accessToken;
      session.user = token;
      return session;

    },
  },
};
