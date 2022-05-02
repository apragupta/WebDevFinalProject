import * as service from '../services/games-service';
import {USER_GAMES} from "./users-actions";
export const GET_GAME = 'GET_GAME';




export const findGame = async (dispatch, gid) => {
    const results = await service.findGame(gid);
    dispatch({
        type: GET_GAME,
        results
    });
}


