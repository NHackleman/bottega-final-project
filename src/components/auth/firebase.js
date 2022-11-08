import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyB0bZR9xBhRcnbM47uDHtlIWDEKTpaJAKs",
	authDomain: "new-bottega-project.firebaseapp.com",
	projectId: "new-bottega-project",
	storageBucket: "new-bottega-project.appspot.com",
	messagingSenderId: "554495744987",
	appId: "1:554495744987:web:4c729131fd30edad9aa5fe",
	measurementId: "G-LMW112YWNR",
};

const app = initializeApp(firebaseConfig);

export default app;
