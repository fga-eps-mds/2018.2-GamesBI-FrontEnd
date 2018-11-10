import React, { Component } from 'react';
import './index.css'
class PaletaDeCor extends Component {

  render() {
      let screns=[]
       let palet=[]
       let inicio = 0;
       let final= 5 ;
        for(let screenshots in this.props.color){
            for (let palette in this.props.color[screenshots].palettes) {
                palet.push(


                                <li key={palette+"k"} style =  {{backgroundColor: `${this.props.color[screenshots].palettes[palette].hex}`}} >
                                    <a>
                                        <p  >{this.props.color[screenshots].palettes[palette].hex}</p>
                                    </a>
                                </li>

                    )
            }
                 if (screenshots === "0") {

     screns.push(<div key={screenshots} className="carousel-item active ">
                       <img className="d-block w-100" src={this.props.color[screenshots].url} alt="First slide"/>
                       <div className="galeria">
                           <ul className="hoverbox">
                                {palet.slice(inicio,final)}
                           </ul>
                       </div>
                     </div>)
                     inicio += 5;
                     final += 5;
                 }else {
                    screns.push( <div key={screenshots} className="carousel-item">
                            <img className="d-block w-100" src={this.props.color[screenshots].url} alt="Third slide"/>
                            <div className="galeria">
                                <ul className="hoverbox">
                                     {palet.slice(inicio,final)}
                                </ul>
                            </div>
                          </div>

                      )
                      inicio += 5;
                      final += 5;
                 }


             }
             console.log(inicio);

    return (




          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

        {screns}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>



    )
  }
}



export default PaletaDeCor;
