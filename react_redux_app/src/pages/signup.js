import { useState } from "react";
import { Link } from "react-router-dom";
import SMButton from "../config/components/button";
import SMInput from "../config/components/Input";
import { signuUp } from "../config/firebase/firebasemethod";
import '../App.css'

function Signup() 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(false);

  const SignupUser = () => {
    const obj = {
      email,
      password,
      userName,
    };
    if (!email) {
      alert("enter Email");
      return;
    }
    if (!password) {
      alert("enter Password");
      return;
    }
    setLoader(true);
    signuUp(obj)
      .then((res) => {
        setLoader(false);
        alert(res);
      })
      .catch((err) => {
        setLoader(false);
        alert(err);
      });
  };
  return (
    <div className="signcontainer">
      <h1>Signup</h1>
      <div className="input4">
        <SMInput
          label="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input5">
        <SMInput
          label="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input6">
        <SMInput
          label="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button5">
        already have an account? <Link to="/login" style={{textDecoration:"none",fontWeight:"500"}}>Login Here</Link>
      </div>
      <div className="button6">
        <SMButton loading={loader} label="Signup" onClick={SignupUser} />
      </div>
    </div>
  );
}
export default Signup;
