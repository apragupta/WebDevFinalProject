import {useEffect, useState} from "react";
import {useProfile} from "../contexts/profile-context";

const SecureContent = ({children}) => {
    const {checkLoggedIn, profile} = useProfile()


    const [currentUser, setCurrentUser] = useState()

    const check = async () => {
        try {
            const user = await checkLoggedIn()
            console.log(user)
            console.log("check ran")
            setCurrentUser(user)

        } catch (e) {
            setCurrentUser(undefined)
        }
    }
    useEffect(() => { check() })


    if(currentUser) {
        console.log("current user")
        console.log(currentUser.name)
        return children
    }
    return null
}
export default SecureContent
