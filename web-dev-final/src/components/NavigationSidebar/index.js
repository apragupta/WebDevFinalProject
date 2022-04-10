import React from "react"


const NavigationSidebar = ({active = "home"}) =>{
    return(
        <div>
            <div className="list-group p-0">
                <a href = "./home" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i> <span className="d-xl-inline d-none">Home</span>
                </a>
            </div>


            <div className="list-group p-0">
                <a href = "./profile" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user"></i> <span className="d-xl-inline d-none">Profile</span>
                </a>
            </div>

            <div className="list-group p-0">
                <a href = "./search" className={`list-group-item list-group-item-action ${active === 'search' ? 'active' : ''}`}>
                    <i className="fa fa-search"></i> <span className="d-xl-inline d-none">Search Games</span>
                </a>
            </div>


            {/*Note - this should only be there for loggedIn users*/}
            <div className="list-group p-0">
                <a href = "./edit-profile" className={`list-group-item list-group-item-action ${active === 'edit-profile' ? 'active' : ''}`}>
                    <i className="fas fa-pencil-alt"></i> <span className="d-xl-inline d-none">Edit Profile</span>
                </a>
            </div>

            <div className="list-group p-0">
                <a href = "./privacy" className={`list-group-item list-group-item-action ${active === 'privacy' ? 'active' : ''}`}>
                    <i className="fas fa-user-secret"></i> <span className="d-xl-inline d-none">Privacy Policy</span>
                </a>
            </div>


        </div>
    )
}

export default NavigationSidebar;