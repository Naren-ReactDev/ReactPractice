import { FETCH_USERS } from "./UserActions";
const intialState={
    users:[]
}
export const UserReducer=(state=intialState,action)=>{
    switch (action.type) {
        case FETCH_USERS:
            
            return{
                ...state,
                users:action.payLoad
            }
    
        default:return state
    }

}

