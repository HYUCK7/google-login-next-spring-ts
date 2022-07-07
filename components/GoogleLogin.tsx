import { useScript } from "@/hooks";
import { LoginApi } from "@/pages/api/LoginApi";
import jwtDecode from "jwt-decode";
import { useState } from "react";

declare const google: any

export default function GoogleLogin({
    handleCredentialResponse = (response : any) => { 
      console.log ("ENCODED JWT ID TOKEN: " + response.credential)
      const decodeUser: any = (jwtDecode(response.credential))
      console.log(decodeUser)
      return LoginApi(response.credential, decodeUser)
  }}) 
    
    {
  useScript('https://accounts.google.com/gsi/client', 
  () => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      callback: handleCredentialResponse
  })
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv') as HTMLButtonElement,
      {
        theme: "outline", size: "large",
        type: 'standard', text: "signin_with"
      }
    )
    const button = document.getElementById('signout_button') as HTMLButtonElement
    button.onclick = () =>{
    google.accounts.id.disableAutoSelect()
    }
    
  });

  return (
  <><div id = "buttonDiv"></div>
  <div id = "signout_button"></div></>)
  
  //return (<div ref={googleSignInButton as React.RefObject<HTMLDivElement>}></div>)
}




