
import './App.css';
import {useState} from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

export default function App(props){
  const [loggedIn,setLoggedIn] = useState(!!localStorage.getItem("jwt"));
  if (loggedIn) {
    return <AuthenticatedApp/>
  } else {
    return <UnauthenticatedApp/>
  }
}

