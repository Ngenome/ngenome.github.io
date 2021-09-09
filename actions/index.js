export  const updateToken=(token)=>{ 
   return{
           type:"LOGIN",
           payload:token
       }
}
export const logout ={
    type: "LOGOUT",
  }
export const change =(page)=>{
    return{type: "CHANGE",
    payload:page
      
    }
    
  }
  export const changePage =(page)=>{
    return{type: "CHANGE",
    payload:page
      
    }
    
  }

export default updateToken;  