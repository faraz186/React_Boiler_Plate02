import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { app } from "./firebaseconfig";

const database = getDatabase(app);
const auth = getAuth(app);

const saveData = (nodeName, userObj, uid) => {
  userObj.id = uid;
  return set(ref(database, `${nodeName}/${uid}`), userObj);
};
const getData = (nodeName, uid) => {
  const starCountRef = ref(database, `${nodeName}/${uid}`);
  return new Promise((resolve, reject) => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    });
  });
};

const signuUp = (userObj) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        saveData("users", userObj, user.uid).then(() => {
          resolve("User Created Successfully");
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        reject(errorMessage);
      });
  });
};
const login = (userObj) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        getData("users", user.uid)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
};

export { signuUp, saveData, getData, login };
