import * as service from '../services/posts-service'


export const updatePost = async (dispatch, post) => {
    await service.updatePost(post);
}


