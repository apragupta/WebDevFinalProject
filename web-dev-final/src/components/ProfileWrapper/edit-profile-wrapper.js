import {useProfile} from "../../contexts/profile-context";
import {useNavigate, useParams} from "react-router-dom";
import * as service from "../../services/auth-service";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllPosts} from "../../actions/posts-actions";
import * as userActions from "../../actions/users-actions";
import EditProfile from "../EditProfile";

const EditProfileWrapper = () => {
	console.log("in edit-profile wrapper");
	const { profile } = useProfile();
	console.log("edit-profile wrapper");
	console.log(profile);
	const navigate = useNavigate();
	return (<EditProfile profile={profile}/>);
}

export default EditProfileWrapper;