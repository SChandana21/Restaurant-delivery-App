import React from "react";
import ReactDOM  from 'react-dom';
import './index.css'

import { BrowserRouter as Router } from "react-router-dom";

import App from './app';
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialstate";
import reducer from "./context/reducer"

ReactDOM.render(
<Router>
    <StateProvider initialstate={initialState} reducer={reducer}>
    <App />
    </StateProvider> 
</Router>,document.getElementById('root'));


