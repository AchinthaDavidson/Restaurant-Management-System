import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";


const root = ReactDOM.createRoot(document.getElementById('root'));

const clientId =
  process.env.GOOGLE_CLIENT_ID ||
  "1046690191230-ijkofb3evlfi82tj22i3s7i3it4k5uai.apps.googleusercontent.com";

root.render(
  <GoogleOAuthProvider clientId={clientId}>


<React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode> 


  </GoogleOAuthProvider> 
  
  
);

