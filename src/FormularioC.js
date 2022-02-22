
import React from 'react';

class FormularioC extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.eventoEnviar = this.eventoEnviar.bind(this);
    this.eventoEscribir = this.eventoEscribir.bind(this);

  }

  eventoEnviar(event) {
    if(this.state.value=="Vegeta"){
      alert(this.state.value+ ' es si no el mejor, uno de los mejores con diferencia en escritura de la serie.');
    }
    if(this.state.value=="Gohan"){
      alert(this.state.value+ ' es el favorito de muchos... y con razón. Época dorada en la saga de Cell');
    }
    if(this.state.value=="Trunks"){
      alert(this.state.value+ ' es mi favorito. Desde mi punto de vista Trunks cuenta con la mejor historia y desarrollo');
    }
    if(this.state.value=="Goku"){
      alert(this.state.value+ ' le gana');
    }
    if(this.state.value=="Bardock"){
      alert(this.state.value+ '... una gran elección.');
    }
    if(this.state.value=="Yamcha"){
      alert(this.state.value+ '... no me creo que sea tú favorito.');
    }
    if(this.state.value==this.props.usuario){
      alert(this.state.value+ ' no pertenece a la serie.');
    }
    event.preventDefault();
  }
  eventoEscribir(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div id="pepe">
        <form >
        <label>
          ¿Cúal es tú favorito?:
          <input type="text" value={this.state.value} onChange={this.eventoEscribir} />
        </label>
        <input type="button" value="Submit" onClick={this.eventoEnviar}/>
      </form>
      </div>
      
    );
  }
}

export default FormularioC;