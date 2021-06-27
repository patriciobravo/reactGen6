
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import propTypes from "prop-types";
import { setFavorite } from "../../actions";
import Modal from "./Modal";
import CharacterDetail from "./CharacterDetail";
//import SVGStar from "../../assets/static/icons/star.svg";
//import useModal from "../custom-hooks/useModal";

const Character = (props) => {

  //const { modal, handleCloseModal, handleOpenModal } = useModal();
  const [modal, setModal] = useState(false)
  const [favorite, setFavorite] = useState(false);


  const { data, favoriteCharacters } = props;
  const { id, title, url } = data;

  const handleOpenModal = () => {
    setModal(true);
  }
  const handleCloseModal = () => {
    setModal(false);
  }

  const handleSetFavorite = () => {
    props.setFavorite({ data });
    setFavorite(true);
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
    <div className="card text-center bg-dark animate__animated animate__fadeInUp bg-personal mb-2">
      <div className="overflow ">
        <img src={url} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        {favorite ? (
          <button
            onClick={() => handleSetFavorite(id)}
            className="character__details-star favorite"
          />
        ) : (
          <button
            onClick={handleSetFavorite}
            className="character__details-star noFavorite"
          />
        )}
        {/* <p className="character__details__item-more">
          {description}
        </p> */}
      </div>
      <button type="button" className="btn btn-primary btn-lg " onClick={handleOpenModal}>Ver Detalle</button>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <CharacterDetail data={data} />
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
  //deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);