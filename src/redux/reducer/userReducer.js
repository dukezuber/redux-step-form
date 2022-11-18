const initialState = {
    isLoading: true,
    counter: 0
    
  };

  
  //Pure function -
  const Auth = (state = initialState, { type, payload = null }) => {
     switch (type) {
      case "incrementOrdecrement":
        return Object.assign({}, state, {
          counter: payload,
        });
  
        case "USER_DETAILS":
  
          return Object.assign({}, state, {
            data:payload,
          });
         
      default:
        return state;
    }
  };
  
  export default Auth;