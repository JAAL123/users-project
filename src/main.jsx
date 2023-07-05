import React from 'react'
import ReactDOM from 'react-dom/client'
import UsersApp from './UsersApp'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { AuthProvider } from './auth/Context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <UsersApp />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
