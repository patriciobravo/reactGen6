import axios from 'axios';

export const getMarvel = async (item) => {
    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${item}&apikey=e15712209b92570b132d150ea23bfca9&ts=9&hash=8bfde16caf2f8222f4fb1f04306c4956`);
        const result = response.data.data;
        if(result.results.length === 0)
        {

        const dataMarvel = "Sin Resultados"
        return dataMarvel;
        }
        else{
            const dataMarvel = result.results.map(data => {
           
                  return {
                      id: data.id,
                      title: data.name,
                      url: data.thumbnail.path+'.'+data.thumbnail.extension,
                      description: data.description
                  }
              })
            return dataMarvel
        }
    } catch (error) {
        //console.log(error)
        const dataMarvel = "Sin Resultados"
        return dataMarvel;
    }


}