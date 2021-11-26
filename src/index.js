import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider,ColorModeScript} from "@chakra-ui/react";
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import "./index.css";

 import App from './App';

 






ReactDOM.render(
 
  <React.StrictMode>
    <ChakraProvider>
    
    <ColorModeScript initialColorMode="light"></ColorModeScript>
    <Router>
    <App />
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
  
  document.getElementById('root')
);
reportWebVitals();