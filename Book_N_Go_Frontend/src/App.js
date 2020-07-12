import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Popup from './shared/components/UIElements/Popup';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import Settings from './settings/Settings';
import { AuthContext } from './shared/context/auth-context';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
<             Route path="/" exact> {/*exact azt jelenti hog csak a localhost:3000/ url beírásakor jelenik meg az itt kiiratott oldal.  */}
                <Users />   
              </Route>
              
              <Route path="/:userId/places" exact>
                <UserPlaces />
              </Route>

              <Route path="/places/new" exact> 
                <NewPlace />
              </Route>
              <Route path="/places/:placeId">
                <UpdatePlace />
              </Route >

              <Route path="/settings">
                <Settings />
              </Route>
        

              <Redirect to="/" />
              </Switch>
    );
  } else {
    routes = (
      <Switch>
<             Route path="/" exact> {/*exact azt jelenti hog csak a localhost:3000/ url beírásakor jelenik meg az itt kiiratott oldal.  */}
                <Users />   
              </Route>

              <Route path="/popuptest" exact>
                <Popup />
              </Route>


              
              <Route path="/:userId/places" exact>
                <UserPlaces />
              </Route>

              <Route path="/auth">
                <Auth />
              </Route>

              <Redirect to="/auth" />
              </Switch>
      );
    }

    return (
      
    <div className="main-cotainer">
      <AuthContext.Provider 
        value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}
        >
    <Router>  
      <MainNavigation />
      <main>
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade">
             
            {routes}
 
            </CSSTransition>
        </TransitionGroup>
      </main>
    </Router>
    </AuthContext.Provider>
    </div>
  );
};

export default App;
