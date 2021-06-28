
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../../actions";
import Modal from "./Modal";
import CharacterDetail from "./CharacterDetail";
import "../../assets/css/components/Character.scss";
import { useGetComics } from '../../custom-hooks/useGetComics'
//import SVGStar from "../../assets/static/icons/star.svg";
//import useModal from "../custom-hooks/useModal";

const Character = (props) => {

  //const { modal, handleCloseModal, handleOpenModal } = useModal();
  const [modal, setModal] = useState(false)
  const [favorite, setFavorite] = useState(false);



  const { data, favoriteCharacters } = props;
  const { id, title, url, description } = data;
  const { comics } = useGetComics(id);
  const tipo = 'Marvel'

  const handleOpenModal = () => {
    setModal(true);
  }
  const handleCloseModal = () => {
    setModal(false);
  }

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
    console.log(comics)
  });

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp bg-personal mb-2">
      <div className="overflow ">
        <img src={url} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
       
        {favorite ? (
          // <button
          //   onClick={() => handleSetFavorite(id)}
          //   className="character__details-star favorite"
          // />
          <i className="fa fa-star text-warning" aria-hidden="true"  onClick={() => handleDeleteFavorite(id)}> Quitar de mis favoritos</i>
        ) : (
          // <button
          //   onClick={handleSetFavorite}
          //   className="character__details-star noFavorite"
          // />
          <i className="fa fa-star-o " aria-hidden="true"  onClick={handleSetFavorite}>Agregar a mis favoritos</i>

        )}
        <br />
        <br />
        <p >
          {description}
        </p>
      </div>
      <button type="button" className="btn btn-primary btn-lg " onClick={handleOpenModal}>Ver Detalle</button>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} comics={comics} />
      </Modal>
    </div>
  )
}


// prototype: components documentation
Character.propTypes = {
  data: propTypes.object,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Character);