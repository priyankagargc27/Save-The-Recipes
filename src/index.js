import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import SaveRecipes from './Components/SaveRecipes'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'font-awesome/css/font-awesome.min.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>
        <SaveRecipes />
        
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
