import react, {useEffect} from 'react'
import user from '../../sample_data/user'
import Tag from "../GameDetails/Tag";
import RatingComponent from "../GameDetails/RatingComponent";
import parse from "html-react-parser";
import PostList from "../PostList";
import '../GameDetails/game.css'
import '../HomeScreen/home.css'
import './profile.css'
import React from "react";
import {Link} from "react-router-dom";

import {Tabs,Tab} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";
import GameDetails from "../GameDetails";
import GamesSidebarItem from "../GamesSidebar/GameItem.js";
import GameSidebarItem from "../GamesSidebar/GameItem";
import GamesList from "../GamesSidebar/GamesList";

const Profile = () => {
    let this_user = user[0]
    //whether or not this is the loggedin user
    const my_account = true;
    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value:'profile'});
    };
    useEffect(updateNav);
    useEffect(() => {findAllPosts(dispatch)}, [dispatch]);
    const posts = useSelector(
        state => state.posts);

    const filter_user_posts_by = (field) => posts.filter(post=> this_user[field].includes(post._id))


    return(
        <div>

            {/*TODO: figure out fields tht give you header_image genre for igdb and add here (only works for steam right now)*/}

            <img src={this_user.banner_image} className="w-100 wd-game-header "/>
            <div className="wd-paragraph-border my-3">
                <div className="d-flex justify-content-between   mb-3">
                    <div className="w-75">
                        <h1 className=" h-auto p-0 pe-1 mb-0"> {this_user.name}
                            <Link to = "../edit-profile" id="edit-profile" className="btn btn-light btn-sm rounded-pill ms-2 h-50 w-auto "
                            hidden={!my_account}>
                                <i className="fas fa-pencil-alt pe-1"></i> <span className="d-xl-inline d-none">Edit Profile</span>
                            </Link>
                        </h1>
                        <p className="wd-post-text mb-1"> @{this_user.username} &nbsp;
                            <span>
                                <Tag type={this_user.user_tier=="premium"?"warning":"info"} text={this_user.user_tier}/>
                            </span>
                        </p>
                        <p className="wd-post-text m-0">
                            <span>
                                <i className="far fa-calendar-alt"> &nbsp;</i>
                            </span>
                                Joined {
                                        new Date(this_user.join_date).toLocaleString('en-us',{month:'short', year:'numeric'})
                                    }
                        </p>
                        <p className="wd-post-text m-0">
                            <span>
                                <i className="fas fa-pen-alt"> &nbsp;</i>
                            </span>{this_user.posts.length} posts</p>




                    </div>
                    <div className="w-25 h-auto px-lg-3 px-2 ratio-1x1 align-self-center" >

                        <img src={this_user.avatar_image} className = "img-fluid  rounded-circle wd-avatar-border " />
                    </div>

                </div>
                <p className="wd-post-text mt-3 pt-3 border-top border-1">{ this_user.bio}</p>

            </div>

            {/*Taken from bootswatch*/}
            <div className="wd-post-list-border p-3">
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3" justify variant="tabs" >
                    <Tab eventKey="all" title="Posts">
                        <PostList posts={posts}/>
                    </Tab>
                    <Tab eventKey="liked" title="Likes">
                        <PostList posts={filter_user_posts_by("liked")}/>
                    </Tab>
                    <Tab eventKey="disliked" title="Dislikes">
                        <PostList posts={filter_user_posts_by("disliked")}/>
                    </Tab>
                    <Tab eventKey="bookmarked" title="Bookmarks">
                        <PostList posts={filter_user_posts_by("bookmarks")}/>
                    </Tab>
                    <Tab eventKey="games" title="Games">
                        <GamesList user_games={this_user.games}/>
                    </Tab>
                </Tabs>



        </div>
            </div>
    )
}

export default Profile;