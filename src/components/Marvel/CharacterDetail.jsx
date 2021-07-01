import React from "react";
import propTypes from "prop-types";
import "../../assets/css/components/CharacterDetail.scss";
import Empty from "../plugins/Empty";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const CharacterDetail = (props) => {
    const { data, comics } = props;
    const {
        title,
        url,
        description
    } = data;

    return (
        <div className="characterDetail">
            <img className="characterDetail-img" src={url} alt="Character" />
            <div className="characterDetail__container">
                <h2 className="characterDetail-name">{title}</h2>
                <div className="characterDetail__item">
                    <span className="characterDetail__item-type">Descripción:  </span>
                    {description === "" ? (
                        <Empty text="Personaje Sin Descripción" accion="Sin Imagen" />
                    ) : (
                        <span className="characterDetail__description">{description}</span>
                    )}
                </div>
                <span className="characterDetail__item-type">Comics:  </span>
                <ListGroup>

                    {
                        comics === 'Sin Resultados' ? (
                            <Empty text="Sin Comics Asociados" accion="Sin Imagen" />
                        ) : (
                            comics.map((item) => (
                                <ListGroupItem key={item.id}>{item.title}</ListGroupItem>

                            ))
                        )
                    }
                </ListGroup>



            </div>
        </div>
    );
};

CharacterDetail.propTypes = {
 
    data: propTypes.object
  };

export default CharacterDetail;
