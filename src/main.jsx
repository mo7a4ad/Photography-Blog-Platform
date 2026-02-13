import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/@fontsource/tajawal'

import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import "./mystyles/myClassesStyle.css";


createRoot(document.getElementById('root')).render(
 
    <App />
  
)
