import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../actions/posts-actions";
import PostListItem from "../PostList/PostListItem";


const MakePost = () => {

    const user = useSelector(
        state => state.user);


    let [newPost, setNewPost]
        = useState({
        text: ''
    });

    let [postGame, setPostGame] =
    useState({
        gameSet: false,
        game: 1


    })

    const user_games = user.games;

    const dispatch = useDispatch();

    return (

        <div className="list-group-item d-flex  py-2 border-0 align-content-end "
             style ={{
                 backgroundColor: "var(--bs-body-bg)"
             }}>
            <div className="col-2 h-auto pt-2 pe-2 " >

                <img src="https://i.imgur.com/dUUJ6Gm.jpeg" className = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" />

            </div>

            <div className="col-10 h-auto   ">
                      <textarea
                          // Styling for what's happening insipired by Professor's repo
                          value={newPost.text}
                          onChange={(event) =>
                              setNewPost({
                                  ...newPost, text: event.target.value
                              })}
                          className="form-control "
                          style={{color: "white",
                              backgroundColor: "inherit",
                              padding: "0px",
                              paddingTop: "20px",
                              borderBottom: "solid",
                              borderBottomWidth: "1px",
                              borderColor: "rgb(82, 88, 92)"
                          }}
                          placeholder="What's on your mind?">
                      </textarea>
                <div className="d-flex justify-content-between  w-100">
                    <div className="d-inline-flex mt-2 align-self-auto p-0">
                        <div className="form-group" >
                            <label htmlFor="selectGame" className="form-label mt-4">Select Game</label>
                            <select className="form-select"
                                    id="selectGame"
                                    onChange={(event)=> setPostGame({gameSet: true, game_id: event.target.value})} >
                                {
                                    user_games.map && user_games.map(game => <option value={game._id}> {game.name} </option> )
                                }
                            </select>
                        </div>
                    </div>
                    <button
                        disabled={!postGame.gameSet}
                        onClick={() =>
                            {createPost(dispatch,newPost);
                                setNewPost({
                                ...newPost,text: ""});} }
                        className="btn btn-primary rounded-pill mt-2">
                        Post
                    </button>
                </div>


            </div>
        </div>



    );
}
export default MakePost;

