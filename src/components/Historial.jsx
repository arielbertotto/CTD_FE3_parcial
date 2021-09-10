import React from 'react';

export default class Historial extends React.Component{

    state={
        historial: []
    }

    static getDerivedStateFromProps(props, state){
        
        if(props.previa  !== ""){
            return {
                historial: [...state.historial, props.previa]
            }     
        }else{
            return null;      
        }
    }

    render(){
        const {previa} = this.props;
        return(
            <>
                <h3>Seleccion anterior: {previa}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.state.historial.slice(0,-1).map((opcion, index) => <li key={index}>{opcion}</li>)}
                </ul>
            </>
        );
    }
}