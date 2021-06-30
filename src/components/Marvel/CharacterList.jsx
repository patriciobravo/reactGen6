import React, { useState } from 'react';
import Error from '../plugins/Error';
import Loader from '../plugins/Loader';
import { useGetMarvel } from '../../custom-hooks/useGetMarvel'
import propTypes from "prop-types";
import Character from './Character';
import Empty from '../plugins/Empty';

const CharacterList = ({ item }) => {

    const [error] = useState(false);
    const { data, loading } = useGetMarvel(item);

    return (

        <div>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Error />
                ) : (
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <div className="row">
                            {
                                data === undefined ? (
                                    <Empty text="Sin Resultados para el Personaje Ingresado" />
                                ) : data === 'Sin Resultados' ? (
                                    <Empty text="Sin Resultados para el Personaje Ingresado" />
                                ) : (
                                    data.map((item) => (
                                        <div className="col-md-4 mt-3" key={item.id}>
                                            <Character key={data.id} data={item} />
                                        </div>
                                    ))
                                )}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

CharacterList.propTypes = {
    data: propTypes.object,
};  

export default CharacterList;

