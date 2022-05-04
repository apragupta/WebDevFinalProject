import React, {useRef, useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import './edit-profile.css';
import {useUpdateUserMutation} from "../reducers/api";

const EditProfile = ({ profile }) => {
    console.log('rendering edit-profile');
    console.log(profile)


    const [userRole,setUserRole] = useState(profile.user_role)
    console.log(userRole)

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

    const [updateUser] = useUpdateUserMutation()

    const handleEditProfileSave = async () => {
        console.log("handle edit profile save");
        console.log(bannerRef.current.value);
        console.log(avatarRef.current.value);
        console.log(usernameRef.current.value);
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(bioRef.current.value)
        console.log(userRole)

        try {
            const newProfile = {
                banner_image: bannerRef.current.value,
                avatar_image : avatarRef.current.value,
                username : usernameRef.current.value,
                password : passwordRef.current.value,
                name : nameRef.current.value,
                email : emailRef.current.value,
                bio : bioRef.current.value,
                _id: profile._id,
                user_role: profile.user_role
            }
            await updateUser(newProfile).unwrap()
        } catch (e) {
            console.log(e);
        }
    }

    const handleEditProfileCancel = () => {
        navigate('/profile');
    }



    return (
        <div>

            <img src={(profile && profile.banner_image) || "https://i.imgur.com/1RtiIWn.jpg"} className="w-100 wd-game-header" />
            <label htmlFor="banner_pic" className="col-form-label ">Banner image: </label>
            <input type="file" ref={bannerRef} id="banner_pic" name="banner_pic" className="form-control rounded-pill"/>


            <div className="wd-paragraph-border my-3">
                <div className="d-flex justify-content-between mb-3  ">
                    <div className="w-75 align-self-center">
                        <label htmlFor="profile_pic" className="col-form-label">Profile image: </label>
                        <input type="file" ref={avatarRef} id="profile_pic" name="profile_pic"
                               className="form-control rounded-pill"/>
                    </div>
                    <div className="w-25 h-auto px-lg-3 px-2 ratio-1x1 align-self-center">
                        <img src={(profile && profile.avatar_image) || "https://i.imgur.com/Lsi7bXT.jpg"} className="img-fluid  rounded-circle wd-avatar-border " />
                    </div>


                </div>

                <label htmlFor="profile_username" className="col-form-label">Username: </label>

                <input type="text" ref={usernameRef} id="profile_username" name="profile_username" defaultValue={profile.username} className="form-control rounded-pill me-3" />

                <label htmlFor="profile_name" className="col-form-label">Name: </label>
                <input type="text" ref={nameRef} id="profile_name" name="profile_name" defaultValue={profile.name} className="form-control rounded-pill me-3" />

                <label htmlFor="profile_password" className="col-form-label">Password: </label>
                <input type="password" ref={passwordRef} id="profile_password" name="profile_password" defaultValue={profile.password} className="form-control rounded-pill me-3" />

                <label htmlFor="profile_email" className="col-form-label">Email: </label>
                <input type="text" ref={emailRef} id="profile_email" name="profile_email" defaultValue={profile.email} className="form-control rounded-pill me-3"/>

                <label htmlFor="profile_bio" className="col-form-label">Bio (500 character limit): </label>
                <textarea ref={bioRef} id="profile_bio" name="profile_bio" defaultValue={profile.bio} className="form-control wd-textarea-rounded me-3"/>


                <div className="form-group">
                    <label htmlFor="user_role" className="form-label mt-4">Would you like Moderator Access?</label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" name={"user_role"} id="user_role" value={userRole}
                               checked={userRole=="admin"}
                               onChange={(e)=>{
                                   setUserRole(userRole=="user"?"admin":"user")
                               }}/>
                        <label className="form-check-label" htmlFor="user_role">Moderator Access</label>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center mb-2">
                <button onClick={handleEditProfileCancel} className="btn btn-danger btn-block rounded-pill w-50 h-auto mx-2 ">Cancel</button>
                <button onClick={handleEditProfileSave} className="btn btn-success btn-block rounded-pill w-50 h-auto  mx-2 ">Save</button>
            </div>
        </div>);
}

export default EditProfile;