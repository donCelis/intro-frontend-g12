// REGLAS DE REACT

// 1. Por convención, los nombres de Componentes empiezan con Mayúscula (esto incluye el nombre de Archivo)
// 2. En react, siempre debo mandar a importar la dependencia de react: import React from 'react';
import React from 'react';
import './counter.scss';

// 3. La clase/función debe llamarse igual que el archivo.

class Counter extends React.Component {
    //Inicializar valores

    constructor(props){
        console.log(props);
        // super ejecuta el constructor del padre, y lo necesito para poder manejar estados en React con Clases
        super(props);
        // El State se va a encargar de modificar el DOM por mi.
        // React detecta cambios en el State y actualiza la UI.
        this.state = {
            count: props.initCount
        }
    }

    // Todo componente debe devolver una vista (hacer render)
    // render() sirve para mostrar el JSX que lleva el componente en la pantalla del navegador.
    // JSX no reconoce class como atributo, debemos usar className
    render(){
        return (
            <div className="counter-main">
                <h5>{this.state.count}</h5>
                <div className="counter-buttons">
                    <button
                        onClick={()=>this.setState({count: this.state.count + 1})}
                    >
                        Agregar
                    </button>

                    <button
                        onClick={()=>this.setState({count: this.state.count - 1})}
                    >
                        Disminuir
                    </button>
                </div>
            </div>
        )
    }

}

export default Counter;
