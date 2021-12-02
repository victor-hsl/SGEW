import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Logo from './components/template/logo/Logo'
import Footer from './components/template/footer/Footer'
import Nav from './components/template/nav/Nav'
import Rotas from './Router'
import {onAuthStateChanged, currentUser} from "firebase/auth";
import { auth } from "./firebaseAuth";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import { Component, setState, useState} from 'react'
import Login from './Login'

function App() {
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    if(user === null){
        return (<Login />);
    }
        return(
                <div className='app'>
                  <Router>
                    <Logo/>
                    <Nav/>
                    <Rotas/>
                    <Footer/>
                  </Router>
                </div>
        );
}    

export default App;