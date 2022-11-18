const initialState={
    name:[{firstname:""},{lastname:""},{cantact:""},{address:""},{dob:""}],
   
}

export default (state=initialState,action)=>{
    console.log("css",action);
    switch(action.type){
        case "personal_Details":
            return {
                ...state,
                name: action.payload,
            }
        default:
        return state;
    }
}