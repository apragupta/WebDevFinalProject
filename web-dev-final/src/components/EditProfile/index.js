import react, {useEffect} from 'react'
import {useDispatch} from "react-redux";


const EditProfile = () => {
    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value:'edit-profile'});
    };
    useEffect(updateNav);
    return(
        <h1> Edit Profile </h1>
    )
}

export default EditProfile;