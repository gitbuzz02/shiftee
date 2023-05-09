import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import ListGroup from "./components/ListGroup";
import EmployeeManager from "./components/EmployeeManager";
import 'bootstrap/dist/css/bootstrap.css'
import RootLayout from './routes/RootLayout';
import ErrorPage from './error-page';
import ShiftManager from './components/ShiftManager';
import DTRViewer from './components/DTRViewer';

const router = createBrowserRouter([
  // { path: '/', element: }
  { path: '/', 
    element: <RootLayout /> ,
    children: [
      { path: '/', element: <EmployeeManager /> },
      { path: '/manage-employees', element: <EmployeeManager /> },
      { path: '/manage-shifts', element: <ShiftManager /> },
      { path: '/view-dtrs', element: <DTRViewer /> }
    ],
    errorElement: <ErrorPage />
  },
  { path: '/manage-employees', element: <EmployeeManager /> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
