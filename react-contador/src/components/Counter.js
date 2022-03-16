// REGLAS DE REACT

// 1. Por convención, los nombres de Componentes empiezan con Mayúscula (esto incluye el nombre de Archivo)
// 2. En react, siempre debo mandar a importar la dependencia de react: import React from 'react';
import React from 'react';

// 3. La clase/función debe llamarse igual que el archivo.

class Counter extends React.Component {
    //Inicializar valores
    constructor(){
        // super ejecuta el constructor del padre, y lo necesito para poder manejar estados en React con Clases
        super();
        // El State se va a encargar de modificar el DOM por mi.
        // React detecta cambios en el State y actualiza la UI.
        this.state = {
            count: 0
        }
    }

    // Todo componente debe devolver una vista (hacer render)
    // render() sirve para mostrar el JSX que lleva el componente en la pantalla del navegador.
    // JSX no reconoce class como atributo, debemos usar className
    render(){
        return (
            <div className="counter-main">
                <h5>{this.state.count}</h5>
            </div>
        )
    }

}

export default Counter;
