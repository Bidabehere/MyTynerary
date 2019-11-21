import tipo from './tipo';
import axios from 'axios';


const urlBase = 'http://localhost:3012/'; 

export const getCiudades = () => dispatch => {
    dispatch({
        type: tipo.GET_CIUDADES,
        payload:axios.get(${urlBase})
    })
}