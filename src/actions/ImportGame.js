//export const FETCH_CEP_DATA = 'FETCH_CEP_DATA';
import axios from 'axios'
import { createStore } from 'redux'
export function ImportGame(name){


// window.location="http://www.devmedia.com.br/";
        //const response = axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then(res => this.setState({ response: res.data }));
         const response = {
            "title": "Watch Dogs 2",
            "name":"nome do jogo",
            "languages": `${name.paramArray}`,
            "genre":"aventura",
            "count_views":"100",
            "count_likes":"200",
            "count_dislikes":"50",
            "owners":"300",
            "price":"25 dols"
        }

  return{

    //type: FETCH_CEP_DATA,
     response
  }
}
