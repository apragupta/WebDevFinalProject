import React, {useState} from "react"
import'./nav-bar.css'

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NavigationSidebar = () =>{

    const active = useSelector(state => state.active);



    return(
        <div>
        <div className="list-group wd-nav-bar-border p-0 my-2">


                <Link
                    to = "./home" id="home" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home pe-1"></i> <span className="d-xl-inline d-none">Home</span>
                </Link>




                <Link to= "./profile" id="profile" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user pe-1"></i> <span className="d-xl-inline d-none">Profile</span>
                </Link>



                <Link to= "./search" id="search" className={`list-group-item list-group-item-action ${active === 'search' ? 'active' : ''}`}>
                    <i className="fa fa-search pe-1"></i> <span className="d-xl-inline d-none">Search Games</span>
                </Link>



            {/*Note - this should only be there for loggedIn users*/}

                <Link to = "./edit-profile" id="edit-profile" className={`list-group-item list-group-item-action ${active === 'edit-profile' ? 'active' : ''}`}>
                    <i className="fas fa-pencil-alt pe-1"></i> <span className="d-xl-inline d-none">Edit Profile</span>
                </Link>



                <Link to = "./privacy" id="privacy" className={`list-group-item list-group-item-action ${active === 'privacy' ? 'active' : ''}`}>
                    <i className="fas fa-user-secret pe-1"></i> <span className="d-xl-inline d-none">Privacy Policy</span>
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