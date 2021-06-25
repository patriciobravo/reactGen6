
import React from 'react';
const Character = (props) => {

  const { data } = props;
  const { title, url} = data;

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp bg-personal mb-2">      
      <div className="overflow ">
        <img src={url} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        {/* <p className="character__details__item-more">
          {description}
        </p> */}
      </div>
      <button type="button" className="btn btn-primary btn-lg ">Ver Detalle</button>
    </div>
  )
}

export default Character;