import React, {useContext, useState} from "react";
import * as service from "../services/auth-service";

const ProfileContext = React.createContext(undefined);

export const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState()

    const signin = async (email, password) => {
        try {
            const p = await service.signin(
                email,
                password
            )
            console.log(p);
            setProfile(p)
        } catch (e) {
            throw e
        }
    }

    const checkLoggedIn = async () => {
        try {
            if (profile) {
                return profile;
            }
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

    const signout = async() => {
        try {
            await service.logout()
            setProfile(undefined)
        } catch (e) {
            throw e
        }
    }

    const value = {profile, signup, checkLoggedIn, signin, signout}
    return(
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => {
    return useContext(ProfileContext)
}