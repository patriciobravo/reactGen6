import React, { useState } from 'react';
import Error from '../plugins/Error';
import Loader from '../plugins/Loader';
import { useGetMarvel } from '../../custom-hooks/useGetMarvel'
import Character from './Character';

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
                                data.map((item) => (
                                    <div className="col-md-4 mt-3" key={item.id}>
                                        <Character key={item.id} data={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                )
            }
        </div>


    )
}

export default CharacterList;

