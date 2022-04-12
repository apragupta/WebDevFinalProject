import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import postsReducer from "./reducers/posts-reducer";
import gamesReducer from "./reducers/games-reducer";
import userReducer from "./reducers/user-reducer";
import {combineReducers,createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'

import {Provider} from "react-redux";

const reducer = combineReducers({
    posts: postsReducer, games: gamesReducer, user: userReducer
});
const store = createStore(reducer,applyMiddleware(logger));

const MainApp =() => {

    const current_url = window.location.pathname;
    const active_screen = current_url.substring(current_url.lastIndexOf('/') + 1);

    return(
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-lg-2 col-xl-2">
                <NavigationSidebar active={active_screen}/>
            </div>
            <div className="col-10 col-lg-8 col-xl-8">
                <Outlet/>
            </div>

        </div>
        </Provider>
    );
}

export default MainApp;