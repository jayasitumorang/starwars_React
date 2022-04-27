import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import DetailsStarship from "./views/DetailsStarship/DetailsStarship";
import Actors from "./views/Actors/Actors";
import DetailsActor from "./views/DetailsActor/DetailsActor";

import ScrollToTop from "./utils/ScrollToTop";
import useLocalstorage from "./hooks/useLocalstorage";


function App () {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [logged, setLogged] = useLocalstorage('login', {
    display: '',
    login: false
  })

  return (
    <div className="App">
     <Header openLoginModal={setLoginModal} openRegisterModal={setRegisterModal} logged={logged} setLogged={setLogged} />
      <Router>
        <Nav logged={logged} />
        <main>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/starships">
              {
                (
                  <Starships />
                )
              }
            </Route>
            <Route path="/starships/:id">
              {
               (
                  <DetailsStarship />
                ) 
              }
            </Route>
            <Route exact path="/actors">
              {
                (
                  <Actors />
                )
              }
            </Route>
            <Route path="/actors/:id">
              {
                (
                  <DetailsActor />
                ) 
              }
            </Route>
          </Switch>
        </main>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
