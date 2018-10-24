import axios from 'axios';

class GameDashboard extends Component {
constructor(props) {
      super(props);
      this.state = {
        response: {}
      }
    }
componentWillMount(){
    const response = axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then(res => this.setState({ response: res.data }));
}
