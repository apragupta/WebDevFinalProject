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
import {Link, useNavigate} from "react-router-dom";
import * as service from "../../services/auth-service";
import * as userService from "../../services/users-service";
import {useProfile} from "../../contexts/profile-context";

import {Tabs,Tab} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";
import GameDetails from "../GameDetails";
import GamesSidebarItem from "../GamesSidebar/GameItem.js";
import GameSidebarItem from "../GamesSidebar/GameItem";
import GamesList from "../GamesSidebar/GamesList";
import * as userActions from "../../actions/users-actions";

const Profile = (profile) => {



    const filter_user_posts_by = (field) => profile.posts.filter(post => profile[field].includes(post._id))
    console.log('rendering profile');

    const join_date = profile && new Date(profile.join_date).toLocaleString('en-us', {month: 'short', year: 'numeric'})

    return (

        <div>
            <img src={profile && profile.banner_image || ""} className="w-100 wd-game-header "/>
            <div className="wd-paragraph-border my-3">
                <div className="d-flex justify-content-between   mb-3">
                    <div className="w-75">
                        <h1 className=" h-auto p-0 pe-1 mb-0"> {profile &&  profile.name || ""}
                            <Link to="../edit-profile" id="edit-profile"
                                  className="btn btn-light btn-sm rounded-pill ms-2 h-50 w-auto "
                                  hidden={!profile.is_me}>
                                <i className="fas fa-pencil-alt pe-1"></i> <span className="d-xl-inline d-none">Edit Profile</span>
                            </Link>
                        </h1>
                        <p className="wd-post-text mb-1"> @{profile &&  profile.username || ""} &nbsp;
                            <span>
                                <Tag type={profile &&  profile.user_tier || "premium" === "premium" ? "warning" : "info"}
                                     text={profile &&  profile.user_tier || ""}/>
                            </span>
                        </p>
                        <p className="wd-post-text m-0">
                            <span>
                                <i className="far fa-calendar-alt"> &nbsp;</i>
                            </span>
                            Joined {""}
                        </p>
                        <p className="wd-post-text m-0">
                            <span>
                                <i className="fas fa-pen-alt"> &nbsp;</i>
                            </span>{profile &&  profile.posts && profile.posts.length || 0} posts</p>
                    </div>
                    <div className="w-25 h-auto px-lg-3 px-2 ratio-1x1 align-self-center">

                        <img src={profile &&  profile.avatar_image || ""} className="img-fluid  rounded-circle wd-avatar-border "/>
                    </div>

                </div>
                <p className="wd-post-text mt-3 pt-3 border-top border-1">{profile && profile.bio || ""}</p>

            </div>

            {/*Taken from bootswatch*/}
            <div className="wd-post-list-border p-3">
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3" justify variant="tabs">
                    <Tab eventKey="all" title="Posts">
                        <PostList posts={profile.posts}/>
                    </Tab>
                    <Tab eventKey="liked" title="Likes">
                        <PostList posts={[] || filter_user_posts_by("liked")}/>
                    </Tab>
                    <Tab eventKey="disliked" title="Dislikes">
                        <PostList posts={[] || filter_user_posts_by("disliked")}/>
                    </Tab>
                    <Tab eventKey="bookmarked" title="Bookmarks">
                        <PostList posts={[] || filter_user_posts_by("bookmarks")}/>
                    </Tab>
                    <Tab eventKey="games" title="Games">
                        <GamesList user_games={(profile && profile.games) || []}/>
                    </Tab>
                </Tabs>


            </div>
        </div>
    )
}

export default Profile;