import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import postsReducer from "./reducers/posts-reducer";
import gamesReducer from "./reducers/games-reducer";
import userReducer from "./reducers/user-reducer";
import {combineReducers,createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'

import {Provider} from "react-redux";
import GameSidebar from "./GamesSidebar";
import searchReducer from "./reducers/search-reducer";
import activeReducer from "./reducers/active-reducer";
import SecureContent from "./secure-content";

const reducer = combineReducers({
    posts: postsReducer,
    game: gamesReducer,
    user: userReducer, 
    search: searchReducer,
    active: activeReducer
});
const store = createStore(reducer,applyMiddleware(logger));

const MainApp =() => {

    const current_url = window.location.pathname;
    const active_screen = current_url.substring(current_url.lastIndexOf('/') + 1);
    console.log(active_screen)

    return(
        <Provider store={store}>
        <div className="row mt-2">
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
        </Provider>
    );
}

export default MainApp;