import './App.css';
import Root from './Root';
import { getToken } from './Utils/LoginUtils'
import ErrorPage from "./error-page";
import Dashboard from './routes/dashboard';
import Login from './routes/Login/Login';
import Home from './routes/home/Home';
import { RegisteredVendor } from './routes/Register/RegiseterVendor';
import { RegisteredRider } from './routes/Register/RegisterRider';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { RegisteredCustomer } from './routes/Register/RegisterCustomer';
import {useState} from 'react';
import {UserContext} from './UserContext';
import { useEffect } from 'react'

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
        path: 'dashboard/:userid',
        element: <Dashboard />
      },
      {
        path: 'login/',
        element: <Login />,
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
      }
    ]
  }
]);

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    console.log('this ran')
    setUser(getToken())
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;