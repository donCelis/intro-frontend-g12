import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
    //Necesito un estado que guarde las letras que voy pulsado.
    state = {
        search: "", //Comenzamos vacio, por que no he buscado nada.
    }

    render(){
        return(
            <div className="search-bar">
                <input 
                    className="search-input"
                    placeholder="¿Qué deseas buscar?"
                    name="search"
                    //event
                    onChange={(event)=>{
                        // Cada vez que el usuario modifica el input
                        // onChange recibe un callback con el evento y
                        // este trae el valor actual
                        this.setState({search: event.target.value});
                        console.log(event.target.value);
                    }}
                />

                <button
                    className="search-button"
                    onClick={()=> this.props.emitSearch(this.state.search)}
                >
                    Buscar
                </button>
            </div>
        )
    }
}

export default SearchBar;