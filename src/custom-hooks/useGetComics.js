import { useState, useEffect } from 'react'
import { getComics } from '../helpers/getComics';


export const useGetComics = (item) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getComics(item)
            .then(items => {
                setState({
                    comics: items,
                    loading: false
                })
            });
    }, [item])

    return state;
}
