import {useProfile} from "../../contexts/profile-context";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/auth-service";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllPosts, findUserPosts} from "../../actions/posts-actions";
import * as userActions from "../../actions/users-actions";
import Profile from "../Profile";
import {ALL_POSTS} from "../Profile/ProfilePostListWrapper";
import {findUser} from "../../actions/users-actions";

const ProfileWrapper = () => {
    console.log("in profile wrapper")
    const dispatch = useDispatch();

    const {userId} = useParams();
    console.log("user id")
    console.log(userId);

    useEffect(() => {
        if(userId) {
            findUser(dispatch,userId);
            }}, [dispatch,userId]);

    const {profile} = useProfile()
    console.log("profile")
    console.log(profile);

    console.log("in profile wrapper 2");

    let this_user = useSelector(state => state.user);
    let uid = userId;

    if (!userId) {
        console.log("yeet")
        this_user = profile;
    }

    const updateNav = () => {
        dispatch({type: 'nav-change', value: 'profile'});
    };
    useEffect(updateNav, [dispatch]);


    console.log("this user")
    console.log(this_user);


    return ((this_user!=null) && this_user ? <Profile profile={this_user}/> : <div></div>);

}

export default ProfileWrapper;