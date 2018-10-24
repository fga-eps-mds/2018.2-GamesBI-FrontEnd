import React,{Component} from 'react';
import axios from 'axios';



class Grafico extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: {}
        }
    }



    componentWillMount(){
        const data = {
            name: "nome",
            display: "table",
            limit: "10"
           };

        axios.post(`http://localhost:8000/api/get_iframe/`,
            {data})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })


        const response = axios.get(`http://localhost:8000/api/get_iframe/?name=nome`)
            .then(res => this.setState({ response: res.data }));
    }

    render() {
        console.log(this.state.response)
        return (
            <div>
            <iframe>
                url = {`http://localhost:400/public/question/${this.state.response}`}
            </iframe>
            </div>
        )
    }
}
export default Grafico;
function mapStateToProps(state){
    return {}
