
import logo from './logo.svg';
import './estiloPracticaUsoReact.css';
import React from 'react';
import ListaMostrar from './listaC';
import FormularioC from './FormularioC';



function Prueba(){
  var user="Pepe";
  return(
    <div className="Prueba">
      <header className="Header">
        <h1>Listado de los mejores Personajes de Dragon Ball</h1>
        <p>Muy buenas tardes, usuario llamado {user}</p> 
        <nav>{< ListaMostrar  usuario= {user} />} </nav>     
      </header>
      <body>
        
        {<FormularioC usuario= {user}/>} 
      </body>  
    </div>
  )
}
// export default Prueba;