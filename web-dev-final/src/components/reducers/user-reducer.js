import {FIND_USER,USER_GAMES} from "../../actions/users-actions";


const userReducer = (state=null,action) => {
    switch(action.type){

        case FIND_USER:
            return action.user;
            break
        case USER_GAMES:
            const games = action.games
            return {...state,games}

        default:
            return state;

    }
};

export default userReducer;