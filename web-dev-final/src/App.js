import './App.css';

import {BrowserRouter, Route,Routes} from "react-router-dom";
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import MainApp from "./components";
import HomeScreen from "./components/HomeScreen";
import Profile from "./components/Profile";
import ProfileWrapper from "./components/ProfileWrapper"
import GameDetails from "./components/GameDetails";
import Login from "./components/Login";
import SearchGames from "./components/SearchGames";
import PrivacyPolicy from "./components/PrivacyPolicy";
import EditProfile from "./components/EditProfile";
import SecureRoute from "./components/secure-route";

import {ProfileProvider} from "./contexts/profile-context";
import Register from "./components/Register";


function App() {
  return (
      <ProfileProvider>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element = {<MainApp/>}>
                <Route index element={<HomeScreen/>}/>
                <Route path="home" exact={true} element = {<HomeScreen/>}/>
                <Route path="/profile" element={
                  <SecureRoute>
                    <ProfileWrapper/>
                  </SecureRoute>
                }/>
                <Route path={"/profile/:userId"} element = {<ProfileWrapper/>}/>
                <Route path="login" element = {<Login/>}/>
                <Route path="register" element = {<Register/>}/>
                <Route path="game/:id" element = {<GameDetails/>}/>
                <Route path="search" element = {<SearchGames/>}/>
                <Route path="search/:term" element = {<SearchGames/>}/>
                <Route path="privacy" element = {<PrivacyPolicy/>}/>
                <Route path = "edit-profile" element = {<EditProfile/>}/>

              </Route>

            </Routes>
          </div>
        </BrowserRouter>
      </ProfileProvider>
  );
}

export default App;
