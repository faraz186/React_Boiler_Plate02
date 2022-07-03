import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SMInput from "../config/components/Input";
import { login } from "../config/firebase/firebasemethod";
import '../App.css';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from "@mui/material";
import initializeAuthetication from "../config/firebase/firebaseinit";
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth"

initializeAuthetication();

const provider = new GoogleAuthProvider();

function Login() 
{
  const [email, setEmail] = useState("");
  const [user,setUser] = useState({})
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = () =>{
    const auth = getAuth();
  
    signInWithPopup(auth,provider).then((response)=>
    {
      const user = response.user;
      setUser(user)
      dispatch({
        type:"DATAFROMGOOGLELOGIN",
        login: response.user,
      });
      navigate("/dashboard");
    })
  } 

  const loginUser = () => 
  {
    const obj = {
      email,
      password,
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
    login(obj)
      .then((res) => {
        alert("Login Successfully");
        console.log(res);
        dispatch({
          type: "DATAFROMLOGIN",
          payload: res,
        });
        navigate("/dashboard");
        setLoader(false);
      })
      .catch((err) => {
        alert(err);
        setLoader(false);
      });
  };
  return (
    <div className='Logincontainer'>
      <h1>Login</h1>
      <div className="input1">
        <SMInput
          label="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input2">
        <SMInput
          label="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button1">
        If You are New! <Link to="/signup" style={{textDecoration:"none",fontWeight:"500"}}>Create Account</Link>
      </div>
      <div className="button2">
        <Button style={{backgroundColor:"rgb(201, 241, 233)",fontSize:"15px",color:"#22619c",fontWeight:"700",padding:"8px 20px"}} variant="contained" label="Login" onClick={loginUser}> <LoginIcon style={{color:"rgb(10, 80, 100)"}} /> Login</Button>
      </div>
      <div>
        <Button style={{backgroundColor:"rgb(201, 241, 233)",position: "absolute",fontSize:"18px",top:"82%",left:"52%"}} onClick={handleGoogleSignIn}> <GoogleIcon style={{color:"rgb(10, 80, 100)"}} /> Google</Button>
      </div>
    </div>
  );
}
export default Login;
