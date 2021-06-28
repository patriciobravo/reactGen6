import React from "react";
import "../../assets/css/components/Empty.scss";
import emptyImage from "../../assets/static/images/marvel-vacio.png";

const Empty = ({text, accion}) => (
  <div className="empty">
     {accion === 'Sin Imagen' ? (''):( <img className="empty-img" src={emptyImage} alt="Rick" />
)}
    <span className="empty-text">
      {text}
      <br />
    
    </span>
  </div>
);

export default Empty;
