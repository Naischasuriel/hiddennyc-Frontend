import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleAuthProvider } from './components/useGoogleAuth';
import App from './App';

// Retrieve the Google client ID from the environment variable
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

ReactDOM.render(
        <GoogleOAuthProvider clientId={googleClientId}>
            <GoogleAuthProvider>

            <App />
            </GoogleAuthProvider>
        </GoogleOAuthProvider>,
    document.getElementById('root')
);
