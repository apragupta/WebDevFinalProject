import gameJson from "../../sample_data/game.json"
import {GET_GAME} from "../../actions/games-actions";

const gamesReducer =
    (state = null, action) => {
        if (action) {
        switch (action.type) {
            case GET_GAME:
                return action.results;
            default:
                return state
        }
    }
        else {
            return state;
        }
    };

export default gamesReducer;