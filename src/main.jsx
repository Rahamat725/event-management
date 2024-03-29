import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Root from './layout/Root';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import ServiceDetails from './Pages/Services/ServiceDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import Galary from './Pages/Galary/Galary';
import NotFound from './NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/serviceDetails/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader:() => fetch('/service.json')
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/galary',
        element:<PrivateRoute><Galary></Galary></PrivateRoute>,
        loader:() => fetch('/service.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </React.StrictMode>,
)
