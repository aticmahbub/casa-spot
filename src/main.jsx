import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';
import UserProfile from './components/UserProfile';
import Estates from './components/Estates';
import Estate from './components/Estate';
import EstateDetails from './components/EstateDetails';
import ErrorPage from './components/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';
import Register from './components/Register';
import Login from './components/Login';
import FirebaseProvider from './components/FirebaseProvider';
import PrivateRoute from './components/PrivateRoute';
import Accordions from './components/Accordions';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/update-profile",
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute> 
      },
      {
        path: "/user-profile",
        element: <PrivateRoute>
          <UserProfile></UserProfile>
        </PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute>
          <ContactUs></ContactUs>
        </PrivateRoute>
      },
      {
        path: "/estates",
        element: <Estates></Estates>
      },
      {
        path: "/estate",
        element: <Estate></Estate>
      },
      {
        path: "/estateid/:id",
        element: <PrivateRoute>
          <EstateDetails></EstateDetails>
        </PrivateRoute>,
        loader: () => fetch('../estatedata.json')
        
      },
      {
        path: "/accordions",
        element: <Accordions></Accordions>
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <FirebaseProvider>
    <HelmetProvider>
    <RouterProvider router={router} />

    </HelmetProvider>
    </FirebaseProvider>

  </React.StrictMode>,
)
