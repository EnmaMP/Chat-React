
import './estiloChat.css';
import React, { useEffect } from 'react';
import LoginUser from './iniciarSesion'
import ChatSeparados  from './Chat.js';
import CrearCuenta from './crearCuenta';
import {BrowserRouter,Route, Routes} from "react-router-dom";
class Home extends React.Component {//componente principal encargado de enrutar. Muestra uno u otro componente según interaccione el usuario
  constructor(props) {
    super(props);
    this.state= {UserLogueadoExitoso:""};
  }
  render(){
    var {UserLogueadoExitoso}=this.state;
    var UserLogueadoExitoso=localStorage.getItem("UsuarioLogeado");
    console.log(UserLogueadoExitoso);
    return(//rutas
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginUser />}></Route>
        <Route path="/Chat" element={<ChatSeparados />}></Route>
        <Route path="/Crear_Cuenta" element={<CrearCuenta />}></Route>
      </Routes>
      </BrowserRouter>     
    )
  }
}
export default Home;