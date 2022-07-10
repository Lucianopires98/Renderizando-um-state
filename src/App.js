import React, { Component } from 'react';
import './App.css';
import Laranja from './img laranja/laranja.jpg'


class App extends Component {

 state = {

  aluno:[
   {
    nome:'Luciano',
    idade: 23,
    comidafavorita: 'estrogonofe',
    musicas:['Matue - De Alta', 'Bk - Caminhos', 'Ret - Good Vibe']
  }

  ]

 }

render(){
  return(
    <div>

      <h1>Luciano</h1>

      <h2>23</h2>

      <h3>estrogonofe</h3>

      <ul>
        <li>Matue - De Alta </li>
        <li>Bk - Caminhos</li>
        <li>Ret - Good Vibe</li>
      </ul>
 
       <img src= {Laranja} />

    </div>
  )
}

}








export default App;
