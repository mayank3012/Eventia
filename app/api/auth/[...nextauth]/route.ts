import { NextAuthOptions, User as NextAuthUser, Account as NextAuthAccount } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectDB from "@/lib/dbConnect";
import { JWT } from "next-auth/jwt"; 
import { User } from "@/lib/models/User";

// Connect to the database
connectDB();

// Define the NextAuth options
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error("No user found with this email");
        if(credentials){
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password!);
            if (!isPasswordValid) throw new Error("Invalid password");
        }
        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user, account }: { user: NextAuthUser; account: NextAuthAccount | null }) {
      if (account?.provider === "google") {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          const newUser = new User({
            name: user.name,
            email: user.email,
            createdDate: new Date(),
            emailConfirmed: true,
          });
          await newUser.save();
        }
      }
      return true;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.user.id = token.sub; // Add the user ID from the token to the session
      return session;
    },
  },
};

// Define the API route handler for NextAuth
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
