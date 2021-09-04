const TokenReducer = (state='', action) =>{

switch(action.type)
{ case 'login':

return state + 1;

    case "DECREMENT": 
      return state -1;  }
  
}

export default TokenReducer;
