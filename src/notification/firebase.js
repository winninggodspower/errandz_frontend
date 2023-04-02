import { initializeApp } from 'firebase/app';
import { getMessaging , getToken, onMessage } from "firebase/messaging";
import {BASE_URL} from "../globalVariable";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXdQ8-UciSOmpmw8unB7mdyyhCvD27MU0",
    authDomain: "errandz-1de42.firebaseapp.com",
    projectId: "errandz-1de42",
    storageBucket: "errandz-1de42.appspot.com",
    messagingSenderId: "675363298521",
    appId: "1:675363298521:web:e0bef9b9d52d03a441f2c8",
    measurementId: "G-19DWPZFF1P"
  };
const vapidPublicKey = "BNs47XyYs-k83G1cacy8zL7TA1_fuEb0zrqZvDPhFW_O9IKCHPd-v-UZn4XjDZiJ9m9KEkKFfbWpUK5ifoK-nQ0";

const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

// Add the public key generated from the console here.
function getDeviceToken(){
    getToken(messaging, {vapidKey: vapidPublicKey})
    .then((currentToken) => {
        if (currentToken) {
        // Send the token to your server and update the UI if necessary
        fetch(`${BASE_URL}/api/register_user_device_notification_token`, {
          method: "POST",
          headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${getToken()}`,
            },
          body: JSON.stringify({
            token: currentToken
          })
        })
        .then(res => {
          return res.json()
        })
        .then(data=>{
          console.log(data);
        })

        console.log(currentToken);
        } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });
}

export default function requestNotificationPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getDeviceToken();
      }else{
        console.log('Notification permission not granted.');
      }
    })
}


