import React from "react";
import { connect } from "react-redux";
import "../../assets/css/components/FavoriteList.scss";
import GifsCard from "../Gifs/GifsCard";
import Empty from "../plugins/Empty";

const FavoriteGifs = (props) => {
   
  const { keyTipo, favoriteCharacters } = props;
  console.log(props)
  const result = favoriteCharacters.filter(
    (favoriteCharacter) => favoriteCharacter.tipo === keyTipo
  );
 
  return (
  
<div>
{favoriteCharacters.length === 0 || result.length === 0 ? (
        <Empty text="No tienes Favoritos" />
     )  :  
     result === []? (<Empty text="No tienes Favoritos" />):
     (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
            {
                    result.map((character) => (                                    
                    <div className="col-md-4 mt-3" key={character.data.id}>
                         <GifsCard key={character.data.id} data={character.data} />
                    </div>
               
            ))}
            </div>
        </div>

    )
}
</div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

export default connect(mapStateToProps, null)(FavoriteGifs);
