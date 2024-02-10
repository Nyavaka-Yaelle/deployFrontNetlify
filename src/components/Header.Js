import React from "react";
function Header(props) 
{
  return(
    <div className="header">
             <button type="submit" className={props.btn}> {props.valeur} </button>      
    </div>
  );
}

export default Button;