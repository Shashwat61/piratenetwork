import { AuthenticateWithRedirectCallback, useClerk } from "@clerk/nextjs";
import type { HandleOAuthCallbackParams } from "@clerk/types";

export default function SSOCallback(props: {
  searchParams: HandleOAuthCallbackParams;
}) {
    console.log('=========in sso callback=========')
  return <AuthenticateWithRedirectCallback/>
  
}
