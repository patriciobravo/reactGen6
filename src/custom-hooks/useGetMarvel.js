import { useState, useEffect } from 'react'
import { getMarvel } from '../helpers/getMarvel';


export const useGetMarvel = (item) => {
    console.log(item)

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getMarvel(item)
            .then(items => {
                setState({
                    data: items,
                    loading: false
                })
            });
    }, [item])

    return state;
}
