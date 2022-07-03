import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";

const  initializeAuthetication = () =>
{
    initializeApp(firebaseConfig);

};

export default initializeAuthetication