export  const updateToken=(token)=>{ 
   return{
           type:"LOGIN",
           payload:token
       }
}
export default updateToken;  