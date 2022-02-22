
import './estiloChat.css';
import React from 'react';

class Filas extends React.Component {//componente encargado de filtrar los mensajes según si es el usuario logueado o no y mandarlos a Chat para 
  //que los muestre
  
  constructor(props) {
    super(props);
  }
  render(){
    var UserLSTR=this.props.user; //gracias al props recojo los datos de las variables que le pasé en el componente del chat
    var nombreUsuario=this.props.idFilas.Usuario;
    if(UserLSTR==this.props.idFilas.Usuario){ //comparo que si el usuario del localStorage es el mismo que el de la fila del mapeo
      //le pongo de className nombreUserPrincipal
      return(
        <div className="UserRegistrado" ><div className='nombreUserPrincipal'>{nombreUsuario}</div> {this.props.idFilas.MensajesChat}</div>
      ) 
    }
    else{//si no, son los demás usuarios. De esta manera podemos diferenciar los mensajes del logueado de los del resto y devolverlos
      return(
        <div className="UsersNo" ><div className='nombreUsersSecundarios'>{nombreUsuario}</div>{this.props.idFilas.MensajesChat}</div>
      )
    }
  }
}
export default Filas;