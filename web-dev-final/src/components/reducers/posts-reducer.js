import {
    DELETE_POST,
    FIND_POSTS,
    CREATE_POST,
    UPDATE_POST} from "../../actions/posts-actions";
export const UPDATE_POST_FIELDS = "UPDATE_POST_FIELDS"
const postsReducer =
    (state = [], action) => {
        switch (action.type) {
            case FIND_POSTS:
                return action.posts
            case DELETE_POST:
                return state.filter(
                    post => post._id !== action.post._id);

            case CREATE_POST:


                // return state;

                // Uncomment following when doing actual server side stuff, updating twice for some reason right now
                console.log("state")
                console.log(state)
                return [


                    action.newPost,
                    ...state
                ];

            case UPDATE_POST:
                return state.map(post => post._id === action.post._id ? action.post: post);

            case UPDATE_POST_FIELDS:
                //updates without overwriting entire post
                return state.map(post => post._id === action.post._id ? Object.assign(post,action.post): post);


            default:
                return state
        }
    }


export default postsReducer;