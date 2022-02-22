
import './estiloChat.css';
import React, { useEffect } from 'react';
import Filas from './MensajesChat';

class ChatSeparados extends React.Component {//componente encargado de mostrar la interfaz del chat y los mensajes haciendo uso de otro componente
  constructor(props) {
    super(props);
    var UsuarioLogeado=localStorage.getItem("UsuarioLogeado");//cojo el usuario que está almacenado en el local storage      
    this.state = {
      arraySelectMensajes: [],
      chatBD:{
        valueChat1:"",
        "usuarioDelMensaje":UsuarioLogeado, //guardo aquí el user del localStorage
      }
    }
    this.salir= this.salir.bind(this);
    this.cambioCampoTexto1= this.cambioCampoTexto1.bind(this);
    this.enviarDatos= this.enviarDatos.bind(this);
  }
  salir(event){//evento que borra el usuario del almacenamiento local y devuelve a la pantalla de inicio de sesion
    localStorage.removeItem("UsuarioLogeado");
    this.setState({UserLogueadoExitoso: ""});
    window.location.href=("http://localhost:3000/");
  }
  componentDidMount(){//Cargo los mensajes con el componentDidMount
    fetch('http://localhost/Practica%20Chat%20ConexionBD/selectChatBD.php')
    .then(response2 => {
      response2.json()
      .then((result) => {
        this.setState({
          isLoaded: true,
          arraySelectMensajes:  result
        });
        console.log(this.state.arraySelectMensajes);
      })
    })
    .then((err) => {
      console.log(err);
    })
  }
  cambioCampoTexto1(event){
    this.setState(state=>{
      const estadtoChatBD=state.chatBD;
      estadtoChatBD["valueChat1"]=event.target.value;
      return{
        chatBD:estadtoChatBD
      }
    })
  }
  enviarDatos(event){
    this.setState(state=>{
      const estadtoChatBD=state.chatBD;
      estadtoChatBD["valueChat1"]=""; //vacío el chat
      return{
        chatBD:estadtoChatBD
      }
    })
    var datos= JSON.stringify(this.state.chatBD);
    fetch('http://localhost/Practica%20Chat%20ConexionBD/conexionChatBD.php',{//llamada y pasada de datos al php encargado de insertar el user+mensaje en la bd
      method: 'POST',
      body:datos
    })
    fetch('http://localhost/Practica%20Chat%20ConexionBD/selectChatBD.php')//llamada a php encargado de hacer un select y devolver todas las filas
    .then(response2 => {
      response2.json()
      .then((result) => {
        this.setState({//guardo el resultado del select de toda la tabla en el array
          arraySelectMensajes:  result 
        });
        console.log(this.state.arraySelectMensajes);
      })
    })
    .then((err) => {
      console.log(err);
    })
  }
  render(){
    return(
      <div className='totalidadMovil'>
        <div className="movil">
            <input type="button" value="Salir" onClick={this.salir} />
          <div className="PantallaSuperior">
            <div className="nombreGrupo">
              <p>Los animados sin Lucro</p>
            </div>
            <div className="ZonaMensajes">
              {
                this.state.arraySelectMensajes.map(id=>{
                  return <Filas idFilas={id} user={this.state.chatBD.usuarioDelMensaje} />
                  //le paso el id para que recorra y acceda posteriormente al usuario de cada fila guardado en el array
                  // y el usuario del mensaje del local Storage.
                })//devuelvo fila a fila los mensajes junto con el usuario que lo mandó desde el otro componente, el cual es el 
                  //se encarga de filtrar dependiendo del usuario logueado
              }          
            </div>            
            <div className="zonaTeclado">
              <label>
                <input type="text" className="entradaTexto" value={this.state.chatBD.valueChat1} onChange={this.cambioCampoTexto1} />
              </label>               
              <button  type="button" className='botonEnviarMensaje' value="Enviar" onClick={this.enviarDatos} ><p>→</p></button>
            </div>           
          </div>
        </div>
      </div> 
    )
  }
}
export default ChatSeparados;