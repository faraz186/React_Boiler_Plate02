import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';


function Dashboard() 
{

  const userFromRedux = useSelector((a) => a);

  const googlefromRedux = useSelector((e)=>e);
  console.log(googlefromRedux);

  const navigate = useNavigate();
  useEffect(() => {
    if (userFromRedux) 
    {
    } else 
    {
      navigate("login");
    }
  }, []);

  useEffect(()=>{
    if(googlefromRedux)
    {

    }else
    {
      navigate("login")
    }
  });

  const homepage = ()=>
  {
    navigate("/home")
  }

  return (
    <div style={{marginLeft:"120px",width:"700px",borderRadius:"7px",padding:"50px 50px"}} className="container">
      <img style={{borderRadius:"90px",position:"absolute",top:"-32%",right:"45%"}} src={"https://lh3.googleusercontent.com/a-/AOh14GjzNShLwKC6wkbJ_BAUuA0pnt8Jqt8_2c96JgY=s96-c"} alt=""/>

      <h1 style={{fontFamily:"arial",fontSize:"28px"}}><span style={{fontSize:"30px",color:"darkblue"}}>Provider ID:</span> {googlefromRedux.login?googlefromRedux.login.providerId:" "}</h1>
      <h1 style={{fontFamily:"arial",fontSize:"28px"}}><span style={{fontSize:"30px",color:"darkblue"}}>Name:</span> {googlefromRedux.login?googlefromRedux.login.displayName:" "}</h1>
      <h1 style={{fontFamily:"arial",fontSize:"28px"}}><span style={{fontSize:"30px",color:"darkblue"}}>Email:</span> {googlefromRedux.login?googlefromRedux.login.email:" "}</h1>

      <Button style={{marginLeft:"230px",marginTop:"20px"}} variant="contained" onClick={homepage}>Go to Home</Button>
    </div>

    
  );  
}
export default Dashboard;
