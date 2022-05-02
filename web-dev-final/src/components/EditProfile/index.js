import react, {useRef, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import Tag from "../GameDetails/Tag";
import './edit-profile.css';
import * as userService from '../../services/users-service.js';
import {Form} from "react-bootstrap";

const EditProfile = ({ profile }) => {
    console.log('rendering edit-profile');
    console.log(profile)
    const bannerRef = useRef();
    const avatarRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef(); // do not log since password is stored as plaintext
    const nameRef = useRef();
    const emailRef = useRef();
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
        console.log(emailRef.current.value);
        console.log(bioRef.current.value);
        try {
            profile.banner_image = bannerRef.current.value ? bannerRef.current.value : profile.banner_image;
            profile.avatar_image = avatarRef.current.value ? avatarRef.current.value : profile.avatar_image;
            profile.username = usernameRef.current.value ? usernameRef.current.value : profile.username;
            profile.password = passwordRef.current.value ? passwordRef.current.value : profile.password;
            profile.name = nameRef.current.value ? nameRef.current.value : profile.name;
            profile.email = emailRef.current.value ? emailRef.current.value : profile.email;
            profile.bio = bioRef.current.value ? bioRef.current.value : profile.bio;
            const updatedUser = await userService.updateUser(profile);
            console.log(updatedUser);
        } catch (e) {
            console.log(e);
        }
    }

    const handleEditProfileCancel = () => {
        navigate('/profile');
    }

    const moderator_value  = () => {

    }



    return (
        <div>

            <img src={profile && profile.banner_image || "https://i.imgur.com/1RtiIWn.jpg"} className="w-100 wd-game-header" />
            <label for="banner_pic" className="col-form-label ">Banner image: </label>
            <input type="file" ref={bannerRef}id="banner_pic" name="banner_pic" className="form-control rounded-pill"/>


            <div className="wd-paragraph-border my-3">
                <div className="d-flex justify-content-between mb-3  ">
                    <div className="w-75 align-self-center">
                        <label htmlFor="profile_pic" className="col-form-label">Profile image: </label>
                        <input type="file" ref={avatarRef} id="profile_pic" name="profile_pic"
                               className="form-control rounded-pill"/>
                    </div>
                    <div className="w-25 h-auto px-lg-3 px-2 ratio-1x1 align-self-center">
                        <img src={profile && profile.avatar_image || "https://i.imgur.com/Lsi7bXT.jpg"} className="img-fluid  rounded-circle wd-avatar-border " />
                    </div>


                </div>

                <label for="profile_username" className="col-form-label">Username: </label>

                <input type="text" ref={usernameRef} id="profile_username" name="profile_username" defaultValue={profile.username} className="form-control rounded-pill me-3" />
                
                <label for="profile_name" className="col-form-label">Name: </label>
                <input type="text" ref={nameRef}id="profile_name" name="profile_name" defaultValue={profile.name} className="form-control rounded-pill me-3" />

                <label for="profile_password" className="col-form-label">Password: </label>
                <input type="password" ref={passwordRef} id="profile_password" name="profile_password" defaultValue={profile.password} className="form-control rounded-pill me-3" />

                <label for="profile_email" className="col-form-label">Email: </label>
                <input type="text" ref={emailRef}id="profile_email" name="profile_email" defaultValue={profile.email} className="form-control rounded-pill me-3"/>

                <label for="profile_bio" className="col-form-label">Bio (500 character limit): </label>
                <textarea ref={bioRef} id="profile_bio" name="profile_bio" defaultValue={profile.bio} className="form-control wd-textarea-rounded me-3"/>

                <legend className="mt-4"> Toggle Moderator Access</legend>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Moderator Access"
                />


            </div>
            <div className="d-flex justify-content-center mb-2">
                <button onClick={handleEditProfileCancel} className="btn btn-danger btn-block rounded-pill w-50 h-auto mx-2 ">Cancel</button>
                <button onClick={handleEditProfileSave} className="btn btn-success btn-block rounded-pill w-50 h-auto  mx-2 ">Save</button>
            </div>
        </div>);
}

export default EditProfile;