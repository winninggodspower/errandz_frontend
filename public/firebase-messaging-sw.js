importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

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

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});