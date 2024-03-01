"use client"
import { SignedIn, SignedOut, UserButton, useSignIn } from "@clerk/nextjs";
import { OAuthStrategy, User } from "@clerk/nextjs/server"

interface UserAccountNav{
    user: User | null;
}

function UserAccountNav({user}: UserAccountNav) {
    const {signIn, isLoaded} = useSignIn()

    async function handleSignIn(strategy: OAuthStrategy ){
        if (!isLoaded) return null;
        try{
             await signIn.authenticateWithRedirect({
                strategy,
                redirectUrl: "/sso-callback",
                redirectUrlComplete: "/"
            })
        }catch(err){
            console.log(err)
        }
    }
    
  return (
  <>
  <SignedIn>
    <UserButton afterSignOutUrl="/"/>
  </SignedIn>
  <SignedOut>
    <button onClick = {()=>handleSignIn("oauth_linkedin_oidc").then(()=> console.log('success'))}>SignIn</button>
    </SignedOut>
    </>
  )
}

export default UserAccountNav