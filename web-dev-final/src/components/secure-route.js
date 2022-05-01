import {useEffect, useState} from "react";
import {useProfile} from "../contexts/profile-context";
import {Navigate} from "react-router-dom";

const SecureRoute = ({children}) => {
    const {checkLoggedIn} = useProfile()
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const check = async () => {
        try {
            const user = await checkLoggedIn()
            setCurrentUser(user)
            setWaiting(false)
        } catch (e) {
            setWaiting(false)
        }
    }
    useEffect(() => { check() })

    if(currentUser) {
        return children
    } else if(waiting) {
        return null
    } else {
        return <Navigate to="/login"/>
    }

}

export default SecureRoute
