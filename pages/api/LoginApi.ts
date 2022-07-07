import axios, { AxiosResponse } from "axios";
import { json } from "stream/consumers";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
  }
export const LoginApi = async ( handleCredentialResponse: {}, userInfo: any ) => {
    try{
      console.log(`정보 1: ${JSON.stringify({handleCredentialResponse, userInfo})}`)
      console.log(`토큰 타입: `+ typeof(handleCredentialResponse)) // string
      console.log(`정보 타입: `+ typeof(userInfo)) // object
      //const info = JSON.stringify(userInfo)
      //console.log(`정보 스트링화: ${info}`)
      userInfo.token= handleCredentialResponse
      console.log(JSON.stringify(userInfo))
      const response  = await axios.post ('http://127.0.0.1:8080/users/getToken', userInfo, {headers})
      console.log(`${JSON.stringify(response)}`)

    } catch(err){
      return err;
    }
  }