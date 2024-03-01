import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  signInUrl: "/signin",
  publicRoutes: [
    "/",
    "/signin(.*)",
    "/sso-callback(.*)",
    "/api(.*)",
  ],
  async afterAuth(auth, req){
    console.log(auth,'----auth------')
    console.log(req,'-----req------')
  },
  
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/no-auth-in-this-route'],
  debug: true
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};