import React from "react";
function Button(props) 
{
  return(
    <div className="bouton">
             <button type="submit" className={props.btn}> {props.valeur} </button>      
    </div>
  );
}

export default Button;