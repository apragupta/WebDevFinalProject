import react, {useRef, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Tag from "../GameDetails/Tag";
import './edit-profile.css';
import * as userService from '../../services/users-service.js';


const EditProfile = ({ profile }) => {
    console.log('rendering edit-profile');
    console.log(profile)
    const bannerRef = useRef();
    const avatarRef = useRef();
    const usernameRef = useRef();
    const nameRef = useRef();
    const bioRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value:'edit-profile'});
    };
    useEffect(updateNav);

    const handleEditProfileSave = async () => {
        console.log("handle edit profile save");
        console.log(bannerRef.current.value);
        console.log(avatarRef.current.value);
        console.log(usernameRef.current.value);
        console.log(nameRef.current.value);
        console.log(bioRef.current.value);
        try {
            profile.banner_image = bannerRef.current.value ? bannerRef.current.value : profile.banner_image;
            profile.avatar_image = avatarRef.current.value ? avatarRef.current.value : profile.avatar_image;
            profile.username = usernameRef.current.value ? usernameRef.current.value : profile.username;
            profile.name = nameRef.current.value ? nameRef.current.value : profile.bname;
            profile.bio = bioRef.current.value ? bioRef.current.value : profile.bio;
            const updatedUser = await userService.updateUser(profile);
            console.log(profile);
        } catch (e) {
            console.log(e);
        }
    }

    const handleEditProfileCancel = () => {
        navigate('/profile');
    }

    return (
        <div>
            <img src={profile && profile.banner_image || ""} className="w-100 wd-game-header" />
            <label for="banner_pic" className="wd-profile-field">Banner image: </label>
            <input type="file" ref={bannerRef}id="banner_pic" name="banner_pic"/>
            <div className="wd-paragraph-border my-3">
                <div className="d-flex justify-content-between mb-3">
                    <div className="w-25 h-auto px-lg-3 px-2 ratio-1x1 align-self-center">
                        <img src={profile && profile.avatar_image || ""} className="img-fluid  rounded-circle wd-avatar-border " />
                    </div>
                    <div className="w-75">
                        <label for="profile_pic" className="wd-profile-field">Profile image: </label>
                        <input type="file" ref={avatarRef} id="profile_pic" name="profile_pic" />
                    </div>
                </div>
                <label for="profile_username" className="wd-profile-field">Username: </label>
                <input type="text" ref={usernameRef} id="profile_username" name="profile_username" defaultValue={profile.username} /><br></br>
                
                <label for="profile_name" className="wd-profile-field">Name: </label>
                <input type="text" ref={nameRef}id="profile_name" name="profile_name" defaultValue={profile.name} /><br></br>

                <label for="profile_bio" className="wd-profile-field">Bio (500 character limit): </label>
                <textarea ref={bioRef} id="profile_bio" name="profile_bio" defaultValue={profile.bio} />
            </div>
            <div className="w-50">
                <button onClick={handleEditProfileCancel} className="btn btn-danger btn-block rounded-pill w-60 h-auto mx-auto px-0">Cancel</button>
                <button onClick={handleEditProfileSave} className="btn btn-success btn-block rounded-pill w-40 h-auto mx-auto px-0">Save</button>
            </div>
        </div>);
}

export default EditProfile;