
import './estiloChat.css';
import React from 'react';
class LoginUser extends React.Component {//componente encargado de hacer un inicio de sesión comprobando que el usuario y contraseña son correctos
    constructor(props) {
        super(props);
        this.state = {   
            datosUser:{//variable estado general en la que guardo la demás variables referentes al usuario
                nombreUser:"",
                contraseniaUser:"" ,
                UserLogueadoExitoso: '',
                errorLoginUser: ""
            }
        }
        //creación de eventos
        this.cambioNombreUser= this.cambioNombreUser.bind(this);
        this.cambioContrasenia= this.cambioContrasenia.bind(this);
        this.enviarDatos1= this.enviarDatos1.bind(this);
    }
    cambioNombreUser(event){//evento que actualiza y guarda el estado el nombre del input del nombre usuario
        this.setState(state=>{
            const inputNombreUser=state.datosUser;//creo una variable en la que guardo el estado de datosUser
            inputNombreUser["nombreUser"]=event.target.value;//actualizo la variable nombreUser con el evento.target y el valor que se escribe en el input
            return{//retorno el nuevo estado de la variable para que se actualice
                datosUser:inputNombreUser
            }
        })
    }
    cambioContrasenia(event){//igual que el evento anterior pero con la contraseña
        this.setState(state=>{
            const inputContraseniaUser=state.datosUser;
            inputContraseniaUser["contraseniaUser"]=event.target.value;
            return{
                datosUser:inputContraseniaUser
            }
        })
    }
    enviarDatos1(event){//evento que envia los datos al php encargado de comprobar si el usuario existe y la contraseña es correcta
        var datos= JSON.stringify(this.state.datosUser);
        //guardo en la variable datos el estado de la variable datosUser, en la que van tanto el nombre como la contraeña del usuario
        fetch('http://localhost/Practica%20Chat%20ConexionBD/usuariosChatBD.php',{
            method: 'POST',
            body: datos
        })
        .then(response => {
            response.json()
            .then((result) => {        
                if(result=="True"){//si la respuesta del php es true significará que se encontró al usuario con la contraseña correcta
                    localStorage.setItem('UsuarioLogeado', this.state.datosUser.nombreUser);//Guardo en el almacenamiento local el usuario logueado
                    console.log(this.state.datosUser.UserLogueadoExitoso);  
                    this.state.datosUser.UserLogueadoExitoso=localStorage.getItem("UsuarioLogeado"); //Le paso a la variable UserLogueadoExitoso el mismo que está en 
                                                                                                    //localStorage aunque se puede hacer de otras formas
                    window.location.href=("http://localhost:3000/Chat");
                    console.log("Variable UserLogueadoExitoso= ".this.state.datosUser.UserLogueadoExitoso);
                }
                if(result!="True"){//En caso de que la respuesta no sea True, enseño por pantalla un mensaje de error
                    console.log("Login Incorrecto");
                    this.setState({errorLoginUser: "Nombre de usuario o contraseña erróneo"})
                    setTimeout(()=>{
                      this.setState({errorLoginUser: ""});
                  },7000) //mensaje de error que dura 7s en pantalla
                }
            })
            .then((err) => {
            console.log(err);
            })     
        })
    }
    render(){
        var {errorLoginUser}=this.state;
    
        return(
            <div id="login">
                <div className='InicioSesion'>
                    <h2>LOG IN</h2>
                    <h5>{errorLoginUser}</h5>
                    <form>
                      <label>
                        <input className='inputIniciarSesion' placeholder="Nombre" type="text"  value={this.state.datosUser.nombreUser} onChange={this.cambioNombreUser} />
                        <input type="password" className="inputIniciarSesion" placeholder="Contraseña" value={this.state.datosUser.contraseniaUser} onChange={this.cambioContrasenia} />
                      </label>
                        <input className='botonIniciarSesion' type="button" value="Iniciar Sesion" onClick={this.enviarDatos1} />
                    </form> 
                    <div className='Registrarse'>
                        <p>¿No tienes una cuenta? Registrate <a href="http://localhost:3000/Crear_Cuenta">aquí.</a></p>
                    </div>
                </div>
            </div>      
        )
    }
}
export default LoginUser;