import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import '@/assets/styles/global.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
//状态管理
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
)
