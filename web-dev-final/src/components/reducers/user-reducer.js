import {FIND_USER} from "../../actions/users-actions";


const userReducer = (state=null,action) => {
    switch(action.type){

        case FIND_USER:
            return action.user;
            break

        default:
            return state;

    }
};

export default userReducer;