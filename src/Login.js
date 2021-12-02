import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './Login.css'
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseAuth";
import {withRouter, Redirect} from 'react-router-dom'
import {Route} from 'react-router'
import Home from './components/home/Home'
import App from './App'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import React from 'react';
import logo from './assets/imgs/amcorlogo.png'

function Login(){
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const [user, setUser] = useState({});
    
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        )
        
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const logout = async () => {
      await signOut(auth);
      
    };
  
return(
  <div className="fundox">
    <div className="sidenav">
        <div className="d-flex justify-content-end">
          <img className="logs" src={logo} alt='logo'/>
        </div>
        <div className="login-main-text d-flex flex-row-reverse">
          <div className="col-md-9">
            <h1>Sistema de Controle de Estoque Web</h1>
          </div>
        </div>
    </div>
    <div className="main">
      <div className="col-md-6 col-sm-12">
        <div className="login-form">
      <div className="form-group col-md-6 mb-md-2">
        <label><i className="fa fa-user-circle"/> E-mail</label>
        <input
          type="email"
          className="form-control"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        </div>
        <div className="form-group col-md-6 mb-md-2">
          <label><i className="fa fa-key" /> Senha</label>
        <input
          type="password"
          onChange={(event) => {setLoginPassword(event.target.value);}}
          className="form-control"
        />
        </div>

        <button onClick={login} className="btn btn-black"> Login</button>
          </div>
      </div>
    </div>
  </div>
);
}
export default Login;