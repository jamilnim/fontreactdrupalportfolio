import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvWfzyqOGX9xI-Y05TGtMJ_c1F1KVFMO0",
  authDomain: "reactdrupalportfolio.firebaseapp.com",
  projectId: "reactdrupalportfolio",
  storageBucket: "reactdrupalportfolio.firebasestorage.app",
  messagingSenderId: "1079911639985",
  appId: "1:1079911639985:web:66e8eb6408526573bdab90",
  measurementId: "G-SB9NKG312Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // <-- this is important for login
const analytics = getAnalytics(app);

export default app;
