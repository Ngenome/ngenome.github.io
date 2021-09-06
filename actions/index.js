export  const updateToken=(token)=>{ 
   return{
           type:"LOGIN",
           payload:token
       }
}
export const logout ={
    type: "LOGOUT",
  }

export default updateToken;  