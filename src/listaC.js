
import React from 'react';

function ListaMostrar(props){
  const numerosArray = ["Vegeta", "Gohan", "Trunks", "Goku", "Bardock", props.usuario];
  const listaElementos = numerosArray.map((numerosArray) => <li>{numerosArray}</li>);
  return(
    <body>
      <ul>
        <li>{listaElementos}</li>
      </ul>
    </body>
  )
}
export default ListaMostrar;