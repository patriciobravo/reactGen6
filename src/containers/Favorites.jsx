import React, { useState } from "react";
import FavoriteList from "../components/Favorites/FavoriteList";
import FavoriteGifs from "../components/Favorites/FavoriteGifs";
import { Tabs, Tab } from "react-bootstrap";
import "../assets/css/components/FavoriteList.scss";
import { withError } from '../error';

const Favorites = () => {

    const [key, setKey] = useState('Marvel');

    return (
        <div className="container mt-3">

            <Tabs defaultActiveKey="Marvel" activeKey={key}
                onSelect={(k) => setKey(k)}>
                <Tab eventKey="Marvel" title="Marvel" >
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <div className="row">
                            <div className="col-sm-12 mt-3">
                                {
                                    key === 'Marvel' ? (<FavoriteList keyTipo={key} />) : ('')
                                }
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="Gifs" title="Gifs">
                    <div className="container d-flex justify-content-center align-items-center h-100">
                        <div className="row row-content">
                            <div className="col-sm-12 mt-3">
                                <FavoriteGifs keyTipo={key} />
                            </div>
                        </div>
                    </div>

                </Tab>
            </Tabs>
        </div>
    )
}

export default withError(Favorites);
