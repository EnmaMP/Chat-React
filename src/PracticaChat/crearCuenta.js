
import './estiloChat.css';
import React from 'react';
import ChatSeparados  from './Chat.js';
class CrearCuenta extends React.Component {//componente que se encarga de crear una cuenta (enviar nombre y contraseña al php encargado de guardar la información)
    constructor(props) {
        super(props);
        this.state={
            estadoCreacionCuenta:""
        }
        this.state = {
            datosUser:{
                nombreUser:"",
                contraseniaUser:"" ,
                UserLogueadoExitoso:""
            }
        }
        //creación de eventos
        this.cambioNombreUser= this.cambioNombreUser.bind(this);
        this.cambioContrasenia= this.cambioContrasenia.bind(this);
        this.enviarCrearCuenta= this.enviarCrearCuenta.bind(this);
    }
    cambioNombreUser(event){
        //evento comentado en IniciarSesion
        this.setState(state=>{
            const inputNombreUser=state.datosUser;
            inputNombreUser["nombreUser"]=event.target.value;
            return{
                datosUser:inputNombreUser
            }
        })
    }
    cambioContrasenia(event){
        this.setState(state=>{
            const inputContraseniaUser=state.datosUser;
            inputContraseniaUser["contraseniaUser"]=event.target.value;
            return{
                datosUser:inputContraseniaUser
            }
        })
    }
    enviarCrearCuenta(event){
    
        if(this.state.datosUser.nombreUser.replace(/\s+/g,"")==="" ||
            this.state.datosUser.contraseniaUser.replace(/\s+/g,"")==="")
        {//compruebo que los campos no estén vacíos. Al hacerlo con el required me daba fallos ya que recargaba cuando no quería
            this.setState({estadoCreacionCuenta: "Rellena todos los campos"});
            setTimeout(()=>{
                this.setState({estadoCreacionCuenta: ""});
            },7000)
        }
        else{
            var datos= JSON.stringify(this.state.datosUser);
            fetch('http://localhost/Practica%20Chat%20ConexionBD/registrarUserBD.php',{
              method: 'POST',
              body: datos
            })
            .then(response => {
                response.json()
                .then((result) => {
                    this.setState({
                    isLoaded: true,
                    });
                    console.log(result)
                    if(result=="False"){
                        this.setState({estadoCreacionCuenta: "El nombre de usuario ya existe"});
                        setTimeout(()=>{
                            this.setState({estadoCreacionCuenta: ""});
                        },5000)
                    }//Si es falso me muestra un mensaje de error, pero si es True me muestra que se creó el usuario
                    else{
                        localStorage.setItem('UsuarioLogeado', this.state.datosUser.nombreUser);
                        this.state.datosUser.UserLogueadoExitoso=localStorage.getItem("UsuarioLogeado");
                        this.setState({estadoCreacionCuenta: "¡Usuario creado!"});
                        this.setState(state=>{
                            const inputNombreUser=state.datosUser;
                            inputNombreUser["nombreUser"]="";
                            return{
                                datosUser:inputNombreUser
                            }
                        })//vacío los campos de nombre y contraseña
                        this.setState(state=>{
                            const inputContraseniaUser=state.datosUser;
                            inputContraseniaUser["contraseniaUser"]="";
                            return{
                                datosUser:inputContraseniaUser
                            }
                        })
                        setTimeout(()=>{//reenvío al chat directamente tras un segundo de mostrar el mensaje de Usuario creado
                            this.setState({estadoCreacionCuenta: ""});
    
                            window.location.href=("http://localhost:3000/Chat");
                        },1000)
                    }  
                })
              .then((err) => {
                console.log(err);
              })     
            })
        }
    }
    render(){
        var {UserLogueadoExitoso}=this.state;
        var {estadoCreacionCuenta}=this.state;
        console.log(UserLogueadoExitoso);
        <ChatSeparados UserLogueadoExitosoUsable={this.state.UserLogueadoExitoso}/>
        return(
            <div id="login">
                <div className='InicioSesion'>
                    <h2>Registrarse</h2>
                    <form>
                        <input className='inputIniciarSesion' type="text" placeholder="Nombre" value={this.state.datosUser.nombreUser} onChange={this.cambioNombreUser} />
                        <input type="password" class="inputIniciarSesion" placeholder="Contraseña" value={this.state.datosUser.contraseniaUser} onChange={this.cambioContrasenia} />
                        <input className='botonIniciarSesion' type="button" value="Crear Cuenta" onClick={this.enviarCrearCuenta} />
                    </form> 
                    <div className='Registrarse'>
                        {estadoCreacionCuenta}
                    </div>
                </div>
            </div>      
        )
    }
}
export default CrearCuenta;