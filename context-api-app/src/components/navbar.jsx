import React from "react";
import { IsAuth } from "../context/IsAuth";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";


const NavbarWrap=styled.div`
display:flex;
flex-direction:row-reverse;
padding:20px;   
background-color:pink;  
`

function Navbar(){

    const { theme }=React.useContext(AuthContext)
    const { status, handlestatus }=React.useContext(IsAuth)
    return(
        
        <NavbarWrap them={theme}>
            <button onClick={handlestatus}>{status}</button>
            {/* <p>hello</p> */}
           
        </NavbarWrap>
        
    )
}
export default Navbar