//export const FETCH_CEP_DATA = 'FETCH_CEP_DATA';
import axios from 'axios'
export function ImportGame(){



        //const response = axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then(res => this.setState({ response: res.data }));
         var response = {
            "title": "Watch Dogs 2",
            "name":"nome do jogo",
            "languages": "pt-br",
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
