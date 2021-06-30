import React from 'react'
import Gif from '../components/Gifs';
import { withError } from '../error';


export const GifExperts = () => {
    return (
        <section>
            <Gif />
        </section>
    )
}
export default withError(GifExperts);