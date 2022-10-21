import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDb8_bjxESZKK832EgKTShrcroy9byC8yM",
	authDomain: "bottega-project-43055.firebaseapp.com",
	projectId: "bottega-project-43055",
	storageBucket: "bottega-project-43055.appspot.com",
	messagingSenderId: "64318185338",
	appId: "1:64318185338:web:07b981438f21df1fe7c0c3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
