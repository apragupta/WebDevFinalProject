import React, {useState} from "react";
import "./home.css"
import {useProfile} from "../../contexts/profile-context";
import {useAddNewPostMutation, useGetUserGamesFollowedQuery, useGetUserQuery} from "../reducers/api";
import {Spinner} from "react-bootstrap";


const MakePost = () => {

    console.log("make-post")

    let [gameSet, setGameSet] =
        useState({
            set: false
        })


    let [newPost, setNewPost]
        = useState({
            text: '',
            title: ''});

    const {profile} = useProfile();
    const [addNewPost ] = useAddNewPostMutation()

    let userId = profile?._id || "62615f8352e1b898edf51bc6"

    let {
        data: userInfo,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserQuery(userId)


    let {
        data: games,
        isLoading: gamesLoading,
        isSuccess: gamesSuccess,
        isError: gamesError,
        error: gError
    } = useGetUserGamesFollowedQuery(userId)


    const user = {...userInfo, games, curUser: profile?._id}

    const enterPostHandler = (event) =>{
        setNewPost({
            ...newPost, text: event.target.value, title: event.target.value.substring(0,50) + "..."
        })
    }

    const submitPostHandler = async () => {
        await addNewPost(newPost).unwrap()
        setNewPost({text: "", title:""});
        setGameSet({set:false})}

    let content

    if (isLoading || gamesLoading) {
        content = <Spinner text="Loading..." />
    } else if (isSuccess && gamesSuccess) {
        const user_games = user.games;
        const gameSetHandler = (event) => {
            const game_id =  event.target.value
            const game = user_games.find(g=> g.id == game_id )

            setGameSet({set:true})
            setNewPost({...newPost,game:
                    {
                        _id: game_id,
                        name:game.name,
                        header_image: game.headerImage
                    }})
            }
        content = <div className="list-group-item d-flex  mb-2 py-4 align-content-end wd-body-bkg-color wd-make-post">
            <div className=" col-2 h-auto pt-1  pe-3 ratio-1x1 " >

                <img src={profile.avatar_image || "https://i.imgur.com/Lsi7bXT.jpg"} className = "img-fluid  rounded-circle my-auto wd-avatar-border " />

            </div>

            <div className="col-10 h-auto   ">
                      <textarea
                          // Styling for what's happening insipired by Professor's repo
                          value={newPost.text}
                          onChange={enterPostHandler}
                          className="form-control wd-post-input"
                          placeholder="What's on your mind?">
                      </textarea>
                <div className="d-flex justify-content-between  w-100">
                    <div className="d-inline-flex mt-2 align-self-auto p-0">
                        <div className="form-group" >
                            <label htmlFor="selectGame" className="form-label mt-4">Select Game</label>
                            <select className="form-select "
                                    id="selectGame"
                                    onChange={gameSetHandler}
                                    value={gameSet.set?newPost.game._id:""}>
                                <option value="" disabled  hidden>Games..</option>
                                {
                                    user_games.map && user_games.map(game => <option value={game.id}> {game.name} </option> )
                                }
                            </select>

                        </div>
                    </div>
                    <button
                        type="reset"
                        disabled={!gameSet.set}
                        onClick={submitPostHandler}
                        className="btn btn-primary rounded-pill mt-2 h-25 align-self-center">
                        Post
                    </button>
                </div>


            </div>
        </div>
    } else if (isError || gamesError) {
        content = <div>{error.error}{gError.error}</div>
    }







    return content;

}
export default MakePost;
