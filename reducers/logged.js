const LoggedReducer = (state='', action) =>{

switch(action.type)
{ case 'login':

return true;

    case "logout": 
      return false; 
   default:return state;   
  
}
  
}

export default TokenReducer;