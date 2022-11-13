import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import '@/assets/styles/global.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
//状态管理
import { Provider } from 'react-redux'
import store

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={}>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>

)
