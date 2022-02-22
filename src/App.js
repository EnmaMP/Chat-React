  import logo from './logo.svg';
  import './App.css';
  import React from 'react';
  import ListaMostrar from './listaC';
  import FormularioC from './FormularioC';


  class App extends React.Component {
    constructor(props) {
      super(props);

    }
    render() {
      return (
        <div id="Chat1">
          <form >
          <label>
            Chat User1: <input type="text" />
          </label>
          <input type="button" value="Enviar" />
        </form>
        </div>
        
      );
    }
  }

  export default Chat;