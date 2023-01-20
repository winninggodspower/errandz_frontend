import './App.css';
import Root from './Root';
import ErrorPage from "./error-page";
import Dashboard from './routes/dashboard';
import Login from './routes/Login/Login';
import Home from './routes/home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { RegisteredCustomer } from './routes/Register/RegisterCustomer';
import {useState} from 'react';
import {UserContext} from './UserContext';

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
      }
    ]
  }
]);

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;