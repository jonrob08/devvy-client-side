import { instance } from "./DefaultAxios";

//login 
export const SignIn = (data) => instance.post('auth/login' , data );

//signup 
export const createAccount = (data) => instance.post('auth/signup' , data);