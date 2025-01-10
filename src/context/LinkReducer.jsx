const LinkReducer = (state , action) =>{
    switch(action.type){

        case "SHORT_URL" : 
        return {
            ...state, 
            links : [ action.payload , ...state.links]
        };
        case "DELETE_URL" :
            return{
                ...state,
                links : state.links.filter(link => link.id !== action.payload )
            }



        default :
            return state
    }
}


export default LinkReducer;