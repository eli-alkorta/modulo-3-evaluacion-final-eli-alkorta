import React from "react";
import logo from "../images/logo.png";

const Header = (props) => {
return(
<div className={`headerContainer ${props.dayMode === true ? 'sunshine' : ''}`}>
<div className="logoContainer">
<img src={logo} alt="logo" className="logo"/>
</div>
<button id="dayMode" className="dayMode" onClick={props.setDayMode}><i className="far fa-sun"></i>day mode</button>
</div>
   )}

   export default Header;