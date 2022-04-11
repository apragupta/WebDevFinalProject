import React from "react"

import {Link} from "react-router-dom";

const NavigationSidebar = ({active = "home"}) =>{
    return(
        <div>
        <div className="list-group p-0">


                <Link to = "./home" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i> <span className="d-xl-inline d-none">Home</span>
                </Link>




                <Link to= "./profile" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user"></i> <span className="d-xl-inline d-none">Profile</span>
                </Link>



                <Link to= "./search" className={`list-group-item list-group-item-action ${active === 'search' ? 'active' : ''}`}>
                    <i className="fa fa-search"></i> <span className="d-xl-inline d-none">Search Games</span>
                </Link>



            {/*Note - this should only be there for loggedIn users*/}

                <Link to = "./edit-profile" className={`list-group-item list-group-item-action ${active === 'edit-profile' ? 'active' : ''}`}>
                    <i className="fas fa-pencil-alt"></i> <span className="d-xl-inline d-none">Edit Profile</span>
                </Link>



                <Link to = "./privacy" className={`list-group-item list-group-item-action ${active === 'privacy' ? 'active' : ''}`}>
                    <i className="fas fa-user-secret"></i> <span className="d-xl-inline d-none">Privacy Policy</span>
                </Link>
        </div>

            {/*Note - this should only be there for loggedIn users*/}

        <div className="py-2 ">
            <button className="  btn btn-primary btn-block rounded-pill w-100 h-auto mx-auto px-0">
                Login/Register

            </button>
        </div>



        </div>
    )
}

export default NavigationSidebar;