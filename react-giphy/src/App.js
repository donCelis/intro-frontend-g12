import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import './App.css';

class App extends React.Component {
  state={
    results: [] //Aqui guardo los resultados de mi busqueda, para usarlos en el render
  }


  sendSearch = (search)=>{
    const apiKey = 'eQRiBhStJJW3Bbcsv8sN3yt1t1Ik4lAB';
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=10&offset=0&rating=g&lang=es`)
    .then((response)=>{
      console.log(response.data.data);
      this.setState({ results: response.data.data}) //guardo mi busqueda en el estado
    }).catch((error)=>{
      console.log(error);
    })
  }

componentWillMount(){
  console.log('1. WILLMOUNT: ANTES DE QUE SE EJECUTE EL RENDER')
}

componentDidMount(){
  console.log('3. DIDMOUNT: DESPUÉS DE QUE SE EJECUTA EL RENDER')
  //this.sendSearch('gatitos');
}

  render(){
    console.log('2. SE EJECUTA EL RENDER: PINTO LA PANTALLA')
    return(
      <div className="App">
        <SearchBar emitSearch={this.sendSearch} />
        <div className="grid-cards">
          {
            //Iterar cada elemento del arreglo, e invocar un componente ImageCard para cada uno de ellos
            this.state.results.map( gif => ( <ImageCard url={gif.images.fixed_height.url} key={gif.id} />) )
          }
        </div>
      </div>
    )
  }
}

export default App;
