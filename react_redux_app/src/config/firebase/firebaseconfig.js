import { initializeApp } from "firebase/app";

const firebaseConfig = 
{
  apiKey: "AIzaSyDtp9Lr_ZpbzVn7ruCSYafcHenkGfNVCxE",
  authDomain: "mini-hackathon-2b1b8.firebaseapp.com",
  projectId: "mini-hackathon-2b1b8",
  storageBucket: "mini-hackathon-2b1b8.appspot.com",
  messagingSenderId: "973874129308",
  appId: "1:973874129308:web:984edb675f67cca979c059"
};

export const app = initializeApp(firebaseConfig);

export {firebaseConfig};


