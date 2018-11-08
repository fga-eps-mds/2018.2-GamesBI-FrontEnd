//export const FETCH_CEP_DATA = 'FETCH_CEP_DATA';
import axios from 'axios'
import { createStore } from 'redux'
export function ImportGame(name){


// window.location="http://www.devmedia.com.br/";
//    const response = axios.get(`http://localhost:8004/api/?name=${name}`);

let results = fetch(`http://localhost:8004/api/?name=${name}`)
        .then((data) => {
            return data.data;
        })

  return{
results
    //type: FETCH_CEP_DATA,

  }
}
