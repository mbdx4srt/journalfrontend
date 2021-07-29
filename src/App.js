
import './App.css';
import {useState} from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

export default function App(props){
  const [loggedIn,setLoggedIn] = useState(!!localStorage.getItem("jwt"));
  if (loggedIn) {
    return <AuthenticatedApp onLogout={() => setLoggedIn(false)}/>
  } else {
    return <UnauthenticatedApp onLogin={() => setLoggedIn(true)}/>
  }
}

