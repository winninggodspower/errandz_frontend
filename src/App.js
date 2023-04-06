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
import { useState, useEffect  } from 'react';
import { UserContext, AlertContext } from './UserContext';
import { v4 as uuidv4 } from "uuid";
import Delivery from "../src/routes/delivery/delivery"
import RegisterAs from './routes/Register-as/Register-as';
import Profile from './routes/Profile/Profile';
import AcceptRequest from './routes/AcceptRequest/accept-request';
import { getUserDetails } from './Utils/AccountUtils';
import AboutUs from './routes/errandz/about-us';
import ContactUs from './routes/errandz/contact-us';
import AcceptOrder from './routes/accept/accept-order';
import Notification from './routes/Notification/notification';
import Faq from './routes/FAQ/Faq';
import { loader as deliverLoader  } from './routes/AcceptRequest/accept-request';
import CommingSoon from './routes/Comming/comming';
import PrivacyPage from './routes/errandz/privacy';
import EditAccount from './routes/edit/EditAccount';
import Map from './routes/map/map';

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
        path: 'accept-request/:deliveryRef',
        element: <AcceptRequest />,
        loader: deliverLoader
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
        path: 'accept-delivery/:deliveryId',
        element: <AcceptOrder />
      },
      {
        path: 'register_as/',
        element: <RegisterAs />
      },
      {
        path: 'notification/',
        element: <Notification />
      },
      {
        path: 'faq/',
        element: <Faq />
      },
      {
        path: 'comming_soon/',
        element: <CommingSoon />
      },
      {
        path: 'privacy/',
        element: <PrivacyPage />
      },
      {
        path: 'edit_account_details/',
        element: <EditAccount />
      },
      {
        path: "map",
        element: <Map />
      }
    ]
  }
]);


function App() {

  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState([]);
  
  const addAlert = (type, message)=>{
    setAlert(alert.concat(
      {
        id: uuidv4(),
        type: type,
        message: message
      }
    ))
  }
  
  const deleteAlert = (id)=>{
    setAlert((alert) => alert.filter((a) => a.id !== id));
  }

  useEffect(() => {
    async function setAccountUser(){
      if (getToken()) {
        setUser(await getUserDetails());
      } else {
        setUser(null)
      }
    }

    setAccountUser();
  }, [])

  return (
    <AlertContext.Provider value={{ alert, addAlert, deleteAlert }} >
      <UserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </AlertContext.Provider>
  );
}

export default App;