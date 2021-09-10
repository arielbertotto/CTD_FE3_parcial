import React from "react";
import data from "./data.json";
import Historial from "./Historial";
import Opcion from "./Opcion";

export default class Historia extends React.Component {

  state={
    contador: 1,
    narracion: data[0],
    opciones: [data[0].opciones.a, data[0].opciones.b],
    opcion: null
  };

  handleClick = (evento) => {
    if(this.state.contador < 5){
      let historia = data.find(elemento => elemento.id === String(this.state.contador + 1) + evento.target.value.toLowerCase())
      this.setState(prevstate => ({ 
        contador: prevstate.contador + 1,
        narracion: historia,
        opciones: [ historia.opciones.a, historia.opciones.b],
        opcion: evento.target.value
      }));
    }else{
      alert("Fin de la Historia")
    }
  }


  render() {
    return (
      <div className="layout">

        <h1 className="historia">{this.state.narracion.historia}</h1>
        
        <div className="opciones">
          {this.state.opciones.map((elemento, index) => <Opcion key={index} texto={index? "B" : "A"} descripcion={elemento} onClick={this.handleClick}/> )}
        </div>

        <div className="recordatorio">
          <Historial previa={this.state.opcion} />
        </div>
        
      </div>
    )
  }
}
