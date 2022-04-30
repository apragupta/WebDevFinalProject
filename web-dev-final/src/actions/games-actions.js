import * as service from '../services/games-service';

export const GET_GAME = 'GET_GAME';


export const findGame = async (dispatch, gid) => {
    const results = await service.findGame(gid);
    dispatch({
        type: GET_GAME,
        results
    });
}

