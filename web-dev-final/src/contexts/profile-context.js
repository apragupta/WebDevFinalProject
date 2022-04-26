import React, {useContext, useState} from "react";
import * as service from "../services/auth-service";

const ProfileContext = React.createContext()

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState()

    const signin = async (email, password) => {
        try {
            const p = await service.signin(
                email,
                password
            )
            setProfile(p)
        } catch (e) {
            throw e
        }
    }

    const checkLoggedIn = async () => {
        try {
            const p = await service.profile()
            setProfile(p)
            return p
        } catch (e) {
            throw e
        }
    }

    const signup = async (email, password) => {
        try {
            const newUser = await service.signup(
                email,
                password
            )
            setProfile(newUser)
        } catch (e) {
            throw e
        }
    }

    const value = {profile, signup, checkLoggedIn, signin}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}