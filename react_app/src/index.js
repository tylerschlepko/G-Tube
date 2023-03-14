import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './comments.css';
import 'tippy.js/dist/tippy.css';
import App from './App';
import './navbar.css';
import 'tippy.js/dist/tippy.css';
import './index.css'
import {MetubeProvider} from './context/MetubeContext';
import './components/video_component/video.css'
import './components/details/details.css'
import './components/Secondary/secondary.css'
import './comments.css'
import './components/HomePage/home.css'
import "./components/Homevideos/Homevideos.css"
import './theme.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetubeProvider>
    <App />
    </MetubeProvider>
  </React.StrictMode>
);
