import * as service from '../services/users-service'

export const FIND_USER = 'FIND_USER';



export const findUser = async (dispatch, userId) => {
    const user = await service.getUser(userId);
    dispatch({
        type: FIND_USER,
        user
    });
}
