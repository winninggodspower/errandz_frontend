import './App.css';
import Root from './Root';
import { getToken } from './Utils/LoginUtils'
import ErrorPage from "./error-page";
import Dashboard from './routes/Dashboard/dashboard';
import Login from './routes/Login/Login';
import Logout from './routes/Logout/Logout';
import Home from './routes/home/Home';
import { RegisteredVendor } from './routes/Register/RegiseterVendor';
import { RegisteredRider } from './routes/Register/RegisterRider';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisteredCustomer } from './routes/Register/RegisterCustomer';
import { useState } from 'react';
import { UserContext } from './UserContext';
import { useEffect } from 'react'
import Delivery from "../src/routes/delivery/delivery"
import RegisterAs from './routes/Register-as/Register-as';
import Profile from './routes/Profile/Profile';
import AcceptRequest from './routes/Register-as/accept-request/accept-request';
import { getUserDetails } from './Utils/AccountUtils';
import AboutUs from './routes/errandz/about-us';
import ContactUs from './routes/errandz/contact-us';
import AcceptOrder from './routes/accept/accept-order';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        name: "home"
      },
      {
        path: 'dashboard/',
        element: <Dashboard />
      },
      {
        path: 'login/',
        element: <Login />,
      },
      {
        path: 'logout/',
        element: <Logout />,
      },
      {
        path: 'register/customer',
        element: <RegisteredCustomer />,
      },
      {
        path: 'register/vendor',
        element: <RegisteredVendor />,
      },
      {
        path: 'register/rider',
        element: <RegisteredRider />,
      },
      {
        path: 'delivery/',
        element: <Delivery />
      },
      {
        path: 'profile/',
        element: <Profile />
      },
      {
        path: 'accept/request',
        element: <AcceptRequest />
      },
      {
        path: 'about/us/',
        element: <AboutUs />
      },
      {
        path: 'contact/us/',
        element: <ContactUs />
      },
      {
        path: 'accept/delivery',
        element: <AcceptOrder />
      },
      {
        path: 'register_as/',
        element: <RegisterAs />
      }
    ]
  }
]);


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function setAccountUser(){
      if (getToken()) {
        setUser(await getUserDetails());
        console.log(await getUserDetails())
      } else {
        setUser(null)
      }
    }

    setAccountUser();
  }, [])


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;