import './App.css';
import Root from './Root';
import ErrorPage from "./error-page";
import Dashboard from './routes/dashboard';
import Login from './routes/Login/Login';
import Home from './routes/home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

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
        element: <Home />
      },
      {
        path: 'dashboard/:userid',
        element: <Dashboard />
      },
      {
        path: 'login/',
        element: <Login />,
      }
    ]
  }
]);

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} basename={process.env.PUBLIC_URL}/>
    </UserContext.Provider>
  );
}

export default App;