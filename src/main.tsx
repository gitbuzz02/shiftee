import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import ListGroup from "./components/ListGroup";
import EmployeeManager from "./components/EmployeeManager";
import 'bootstrap/dist/css/bootstrap.css'

const router = createBrowserRouter([
  // { path: '/', element: }
  { path: '/', element: <App /> },
  { path: '/manage-employees', element: <EmployeeManager /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
