import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/components/404.scss'
import img404 from '../assets/static/images/Capitana_Marvel.png'


const PageNotFound = () => {
    return (

        <div className="text-wrapper" >
            <img src={img404} alt="NotFund" className="imgmarvel" />
            <div className="title" data-content="404">
                404
            </div>

            <div className="subtitle">
                La página que estás buscando no existe.
            </div>

            <div className="buttons">

                <Link

                    className="button" to="/">Volver</Link>
            </div>
        </div >

    )
}

export default PageNotFound;