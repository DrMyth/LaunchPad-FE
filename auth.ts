import axios from "axios";
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({user , profile}){
      const { id, login: username, bio } = profile || {};
      const { name, email, image } = user;

      try {
        const response = await axios.post("https://launchpadbe.vercel.app/api/signin", {
          id,
          name,
          username,
          email,
          image,
          bio: bio || "",
        });
        return response.status === 200;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },

    async jwt({token, account, profile}){
      if(account && profile){
        const response = await axios.post("https://launchpadbe.vercel.app/api/signin", {
          id: profile?.id,
        });
        const user = response.data.user;
        // console.log("User ID: ", response.data);
        // console.log("User ID: ", user);
        // console.log("User ID: ", user._id);
        token.id = user;
      }
      return token;
    },
     
    async session({session, token}){
      // console.log(token);
      session.id = token.id as unknown as string;
      return session;
    }
  }

})