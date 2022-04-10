import './App.css';

import {BrowserRouter, Route,Routes} from "react-router-dom";
import './vendors/bootstrap/bootstrap.min.css'
import './vendors/fontawesome/css/all.min.css'

import MainApp from "./components";
import HomeScreen from "./components/HomeScreen";
import Profile from "./components/Profile";
import GameDetails from "./components/GameDetails";
import Login from "./components/Login";
import SearchGames from "./components/SearchGames";
import PrivacyPolicy from "./components/PrivacyPolicy";
import EditProfile from "./components/EditProfile";




function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element = {<MainApp/>}>
            <Route index element={<HomeScreen/>}/>
            <Route path="home" exact={true} element = {<HomeScreen/>}/>
            <Route path="profile" element = {<Profile/>}/>
            <Route path="login" element = {<Login/>}/>
            <Route path="game" element = {<GameDetails/>}/>
            <Route path="search" element = {<SearchGames/>}/>
            <Route path="privacy" element = {<PrivacyPolicy/>}/>
            <Route path = "edit-profile" element = {<EditProfile/>}/>

          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
