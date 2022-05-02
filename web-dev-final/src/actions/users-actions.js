import * as service from '../services/users-service'


export const FIND_USER = 'FIND_USER';
export const USER_POSTS = 'USER_POSTS'
export const USER_GAMES = 'USER_GAMES'


export const findUser = async (dispatch, userId) => {
    const user = await service.getUser(userId);
    dispatch({
        type: FIND_USER,
        user
    });
}

export const getUserGames = async (dispatch, userId) => {
    const games = await service.getUserGamesFollowed(userId);
    dispatch({
        type: USER_GAMES,
        games
    });
}



export const curUserFollowGame = async (dispatch, gid, userId) => {

    try {
        const status = await service.currentUserFollowGame(gid);
        console.log(status)
        const games = await service.getUserGamesFollowed(userId);
        console.log(games)
        dispatch({
            type: USER_GAMES,
            games
        })
        }

    catch (e) {
       throw (e)
        console.log("ERROR FOLLOW")
        console.log(e)
    }



}



