import {useProfile} from "../../contexts/profile-context";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/auth-service";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllPosts, findUserPosts} from "../../actions/posts-actions";
import * as userActions from "../../actions/users-actions";
import Profile from "../Profile";
import {ALL_POSTS} from "../Profile/ProfilePostListWrapper";
import {findUser, getUserGames} from "../../actions/users-actions";
import {getUserGamesFollowed} from "../../services/users-service";

const ProfileWrapper = () => {
    console.log("in profile wrapper")
    const dispatch = useDispatch();
    const {profile} = useProfile()

    let {userId} = useParams();

    if(!userId) {
        userId = profile._id;
    }

    console.log("user id")
    console.log(userId);

    useEffect(() => {
            findUser(dispatch,userId)
            getUserGames(dispatch,userId)}, [dispatch,userId]);


    console.log("profile")
    console.log(profile);

    console.log("in profile wrapper 2");

    let this_user = useSelector(state => state.user);

    const updateNav = () => {
        dispatch({type: 'nav-change', value: 'profile'});
    };
    useEffect(updateNav, [dispatch]);


    console.log("this user")
    console.log(this_user);
    const u2 = {...this_user, curUser: profile?._id}

    return ((this_user!=null) && this_user ? <Profile profile={u2}/> : <div></div>);

}

export default ProfileWrapper;