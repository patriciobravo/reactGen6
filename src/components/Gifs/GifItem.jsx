import React, { useState } from 'react';
import GifsCard from './GifsCard';
import Error from '../plugins/Error';
import Loader from '../plugins/Loader';
import { useGetGifs } from '../../custom-hooks/useGetGifs';
import Empty from '../plugins/Empty';

const GifItem = ({ item }) => {

    const [error] = useState(false);

    const { data: images, loading } = useGetGifs(item);

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
                                images === undefined ? (
                                    <Empty text="Sin Resultados para el Gif Ingresado" />
                                ) : images === 'Sin Resultados' ? (
                                    <Empty text="Sin Resultados para el Gif Ingresado" />
                                ) : (
                                    images.map((img) => (
                                        <div className="col-md-4 mt-3" key={img.id}>
                                            <GifsCard
                                                key={img.id}
                                                data={img}
                                                {...img} />
                                        </div>
    
                                    ))
                                )
                            }
                        </div>
                    </div>

                )
            }
        </div>


    )
}


export default GifItem;