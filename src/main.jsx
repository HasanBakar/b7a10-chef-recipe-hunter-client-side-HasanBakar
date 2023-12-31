import React from 'react'

import {
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import router from './routes/Routes';
import AuthProviders from './Providers/AuthProviders/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
  </React.StrictMode>,
)
