import React from 'react';

export default class Opcion extends React.Component{
    render(){
        const {texto, onClick, descripcion} = this.props;
        return (
            <div className="opcion">
                <button  className="botones" value={texto} onClick={onClick}>{texto}</button>
                <h2>{descripcion}</h2>
            </div> );
    }
}