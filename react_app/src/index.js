<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './comments.css';
// import './navbar.css';
import 'tippy.js/dist/tippy.css';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

=======
=======
>>>>>>> Developer_Branch
import React from 'react';
import ReactDOM from 'react-dom/client';
import './navbar.css';
import 'tippy.js/dist/tippy.css';
import './index.css'
import App from './App';
import {MetubeProvider} from './context/MetubeContext';
import './components/video_component/video.css'
import './components/details/details.css'
import './components/Secondary/secondary.css'
<<<<<<< HEAD
=======
import './comments.css'
import './components/HomePage/home.css'
import "./components/Homevideos/Homevideos.css"
import './theme.css'
>>>>>>> Developer_Branch


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetubeProvider>
    <App />
    </MetubeProvider>
  </React.StrictMode>
);

<<<<<<< HEAD
>>>>>>> 7f528eb7e4326a34937dce3a320d0a5b20112b4e
=======
>>>>>>> Developer_Branch
