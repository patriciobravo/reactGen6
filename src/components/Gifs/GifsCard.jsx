import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../../actions";

const GifsCard = (props) => {

    const [favorite, setFavorite] = useState(false);

    const { data, favoriteCharacters } = props;
    const { id, title, url } = data;
    const tipo = 'Gifs';

    const handleSetFavorite = () => {
        props.setFavorite({ data, tipo });
        setFavorite(true);
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
        setFavorite(false);
      };
    
    const isFavorite = () => {
        const result = favoriteCharacters.filter(
          (favoriteCharacter) => favoriteCharacter.data.id === id
        );
        if (result.length) {
          setFavorite(true);
        }
    };

    useEffect(() => {
        isFavorite();
      });
    
    


    return (
        <div className="card text-center bg-secondary animate__animated animate__fadeInUp bg-personal mb-2">
            <div className="overflow ">
                <img src={url} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
           
              <h4 className="card-title">{title}</h4>
              {favorite ? (
    
                  <i className="fa fa-star text-warning" aria-hidden="true"  onClick={() => handleDeleteFavorite(id)}> Quitar de mis favoritos</i>
                  ) : (

                  <i className="fa fa-star-o " aria-hidden="true"  onClick={handleSetFavorite}>Agregar a mis favoritos</i>
              )}

            </div>
        </div>

    )
}

GifsCard.propTypes = {
    data: propTypes.object,
  };


//export default GifsCard;

// Native functions react-redux (HOC)
const mapStateToProps = (state) => {
    return {
      favoriteCharacters: state.favoriteCharacters,
    };
  };
  
  const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(GifsCard);