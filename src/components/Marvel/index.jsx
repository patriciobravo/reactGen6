import React, { useState } from 'react'
//import GifItem from './GifItem';
import MarvelSearch from './MarvelSearch';
import CharacterList from './CharacterList'
import '../../assets/css/styles.scss';

const Marvel = () => {

    const [heroe, setHeroe] = useState(['Iron Man']);

    return (
        <div className="container">
            <h2 className="text-center">Buscar Personaje</h2>
            <MarvelSearch setHeroe={setHeroe} /> 
            <hr />

            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        heroe.map((item) => (
                           
                            <div className="col-sm-12 mt-3" key={item}>
                                <CharacterList
                                    key={item}
                                    item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Marvel;