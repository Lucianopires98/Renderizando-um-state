import React, { Component } from "react";
import "./App.css";
import Laranja from "./img laranja/laranja.jpg";

class App extends Component {
  state = {
    aluno: {
      nome: "Luciano",
      idade: 23,
      comidafavorita: "estrogonofe",
      musicas: ["Matue - De Alta", "Bk - Caminhos", "Ret - Good Vibe"],
    },
  };

  render() {
    return (
      <div>
        <h1>Meu nome é {this.state.aluno.nome}</h1>

        <h2>Tenho {this.state.aluno.idade} anos</h2>

        <h3>Minha comida favorita é {this.state.aluno.comidafavorita}</h3>

        <ul>
          <li>{this.state.aluno.musicas[0]}</li>
          <li>{this.state.aluno.musicas[1]}</li>
          <li>{this.state.aluno.musicas[2]}</li> 
        </ul>
        <div>Bônus</div>
        <img src={Laranja} alt="laranja" />
      </div>
    );
  }
}

export default App;
