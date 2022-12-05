import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB9u8aayl9fw5kFdyMV03LbzfPEZV78Er8",
  authDomain: "techx-push-notification.firebaseapp.com",
  projectId: "techx-push-notification",
  storageBucket: "techx-push-notification.appspot.com",
  messagingSenderId: "446287637654",
  appId: "1:446287637654:web:92fd74302d41ea746a26b7",
  measurementId: "G-31XTC6LZQR",
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("permission: ", permission);
      // console.log("Notification permission granted.");

      const app = initializeApp(firebaseConfig);
      console.log("app is here ", app);
      const messaging = getMessaging(app);
      console.log("messaging is here ", messaging);

      getToken(messaging, {
        vapidKey:
          "BCBkl60je61SNZy7eOsAmaynePHxV6JUK3tc37dCwkuHqyKVvPeADfXbrvipcHFGiVsODrBsF6kEi867c1Rs8tk",
      }).then((currentToken) => {
        console.log("currentToken: ", currentToken);
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
