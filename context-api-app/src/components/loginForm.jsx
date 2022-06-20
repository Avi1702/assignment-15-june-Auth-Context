import React from "react";
import styled from "styled-components";
// import { AuthContext } from "../context/AuthContext";
import { IsAuth } from "../context/IsAuth";


const LoginForm=styled.div`
width:20%;
margin:auto;
display:flex;
flex-direction:column;
gap:20px;
margin-top:50px;
`


function LoginPage(){

    // const [handlestatus]=React.useContext(IsAuth)
    const [formData,setFormData]=React.useState({
        email:"",
        password:""
    })

   


function handleChange(e)
{

let {name,value}=e.target;

setFormData({...formData,[name]:value})
}

const {email,password}=formData



function login(){

    handlestatus()


    const payload={
        email:email,
        password:password
    }

    // console.log(payload)
    fetch(`https://reqres.in/api/login`,{
        method:"POST",
        body: JSON.stringify(payload),
          headers: {
            "content-type":"application/json"
          }
        // content-type:"application-json"

    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    }

    const { handlestatus }=React.useContext(IsAuth) 

    return(
       <LoginForm>
        <input type={"text"}  name={"email"} value={email} placeholder="email" onChange={handleChange}></input>
        <input type={"password"} name={"password"} value={password} placeholder="Password" onChange={handleChange}></input>
        <button onClick={login}>Login</button>
        {/* <div>{data}</div> */}
       </LoginForm>
       

    )
}

export default LoginPage