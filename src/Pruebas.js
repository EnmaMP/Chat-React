// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ListaMostrar from './listaC';
// import FormularioC from './FormularioC';






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// ReactDOM.render(<prueba usuario="Enmanuel"/>, document.getElementById('root'));

// function Prueba(){
//   var user="Enmanuel";
//   return(
//     <div className="Prueba">
//       <header className="Header">
//         <h1>Okeeeey Lets go</h1>
//         <nav>{< ListaMostrar  usuario= {user} />} </nav>     
//       </header>
//       <body>
//         <p>Muy buenas tardes, usuario llamado {user}</p> 
//         {<FormularioC />} 
//       </body>  
//     </div>
//   )
// }

// export default Prueba;
// function ListaMostrar(){
//   const numerosArray = [1, 2, 3, 4, 5];
//   const listaElementos = numerosArray.map((numerosArray) => <li>{numerosArray}</li>);
//   return(
    
//     <body>
//       <ul>
//         <li>{listaElementos}</li>
//       </ul>
//     </body>
//   )
// }


// class PrimerFormulario extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
    
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     document.body.innerHTML+=this.state.value;
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div id="pepe">
//         <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//         {/* <p>{this.state.value}</p> */}
//       </div>
    
//     );
//   }
// }

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 3
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }


// class Prueba extends React.Component{
  
//   render(){
//      return(
//     <div className="Prueba">
//       <header className="Header">
//         <h1>Okeeeey Lets go</h1>
//       </header>
//       <body>
//         <p>Muy buenas tardes, usuario llamado {user}</p>  
//       </body>  
//     </div>
    
    
//     );
//   }
 

// }

// export default Prueba;