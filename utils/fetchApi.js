import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'fae2efe391msha6d3307013153b8p1cfc68jsn206328841e15'
        }
    })
    return data
}
