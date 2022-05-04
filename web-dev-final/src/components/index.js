import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";

import {Provider} from "react-redux";
import GameSidebar from "./GamesSidebar";
import SecureContent from "./secure-content";
import store from './reducers/store'


function MainContent() {

    const current_url = window.location.pathname;
    const active_screen = current_url.substring(current_url.lastIndexOf('/') + 1);

    return <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
            <NavigationSidebar active={active_screen}/>
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
            <Outlet/>
        </div>

        <div className="d-none d-lg-block col-lg-4 ">
            <SecureContent>

                <GameSidebar/>
            </SecureContent>
        </div>


    </div>
}

const MainApp =() => {


    return(
        <Provider store={store}>
            <MainContent/>
        </Provider>
    );
}

export default MainApp;