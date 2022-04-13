import React, {useState} from "react"
import'./nav-bar.css'

import {Link} from "react-router-dom";

const NavigationSidebar = ({active = "home"}) =>{

    let [active_screen, setActive_screen] = useState({
        active: active
    })

    const handleClickScreen = (event) => {
        setActive_screen({
            active: event.currentTarget.id
        })
    }

    return(
        <div>
        <div className="list-group wd-nav-bar-border p-0 my-2">


                <Link onClick={handleClickScreen}
                    to = "./home" id="home" className={`list-group-item list-group-item-action ${active_screen.active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i> <span className="d-xl-inline d-none">Home</span>
                </Link>




                <Link onClick={handleClickScreen} to= "./profile" id="profile" className={`list-group-item list-group-item-action ${active_screen.active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user"></i> <span className="d-xl-inline d-none">Profile</span>
                </Link>



                <Link onClick={handleClickScreen}  to= "./search" id="search" className={`list-group-item list-group-item-action ${active_screen.active === 'search' ? 'active' : ''}`}>
                    <i className="fa fa-search"></i> <span className="d-xl-inline d-none">Search Games</span>
                </Link>



            {/*Note - this should only be there for loggedIn users*/}

                <Link onClick={handleClickScreen}  to = "./edit-profile" id="edit-profile" className={`list-group-item list-group-item-action ${active_screen.active === 'edit-profile' ? 'active' : ''}`}>
                    <i className="fas fa-pencil-alt"></i> <span className="d-xl-inline d-none">Edit Profile</span>
                </Link>



                <Link onClick={handleClickScreen}  to = "./privacy" id="privacy" className={`list-group-item list-group-item-action ${active_screen.active === 'privacy' ? 'active' : ''}`}>
                    <i className="fas fa-user-secret"></i> <span className="d-xl-inline d-none">Privacy Policy</span>
                </Link>
        </div>

            {/*Note - this should only be there for loggedIn users*/}

        <div  className="py-2 ">
            <Link to = "./login">
            <button className="  btn btn-primary btn-block rounded-pill w-100 h-auto mx-auto px-0">
                Login <span className="d-none d-xl-inline-block">/Register </span>

            </button>
            </Link>
        </div>



        </div>
    )
}

export default NavigationSidebar;