const initialState={
    dataEdu:[{schoolname:""},{address:""},{grade:""},{year:""}],
   
}

export default (state=initialState,action)=>{
    console.log("css",action);
    switch(action.type){
        case "Education_Details":
            return {
                ...state,
                dataEdu: action.payload,
            }
        default:
        return state;
    }
}