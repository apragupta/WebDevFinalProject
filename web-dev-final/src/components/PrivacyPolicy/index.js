import react, {useEffect} from 'react'
import {useDispatch} from "react-redux";


const PrivacyPolicy = () => {
    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value:'privacy'});
    };
    useEffect(updateNav);
    return(
        <h1> Privacy Policy </h1>
    )
}

export default PrivacyPolicy;