import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar"
const MainApp =() => {

    const current_url = window.location.pathname;
    const active_screen = current_url.substring(current_url.lastIndexOf('/') + 1);

    return(
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar active={active_screen}/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Outlet/>
            </div>

        </div>
    );
}

export default MainApp;