import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component
{

  state={
    name:'Sigma Infosolutions',
    CEO:'Pranav Panpalia',
    location:'Bangalore',
    revenue:'You cannot imagine!',
    department:'Lend Foundry',
    Age: 22,
    Citizenship:['India','UK','US']
        };
   
 getLocation=()=>{
     if(this.state.location)
     {
       return (this.state.location);
     }
  };  

  /* not working both method
  
  getCitizenship=function (){
    return (this.state.Citizenship.forEach((city) => {
         return(this.state.CEO+'has lived in '+city);
         })
    );
  };

  getCitizenship=()=>{
    return(this.state.Citizenship.forEach(
(city) => {
 return(this.state.CEO+'has lived in '+city);
          })
          );
 
  };
  */

 getCitizenship()
 {
   /*const citym=this.state.Citizenship.map((city)=>{
              return  this.state.CEO+' has lived in '+city ;
              });
    return citym;          */
    return (this.state.Citizenship.map((city)=>this.state.CEO+' has lived in '+ city));
  }

  /*function getLocation()
  {
    if(this.state.location)
    {
      return(this.state.location);
    }
   
  };  */
  
  getRevenue=()=>{
     if(this.state.revenue)
     return(<p>Revenue: {this.state.revenue}</p>);
  }
  
  render()
   {
    
    
    return (
      <div className="App">

        <h1> { this.state.name.toUpperCase() } </h1>

        { this.state.Age>=20 && <p> Age: {this.state.Age } </p>}

        <h2>Department: { this.state.department?this.state.department:'Not defined' } </h2>

        <h3> { this.getCitizenship() }</h3> 

        <ol>
             <li> <p> CEO: { this.state.CEO } </p> </li>
             <li> <p> Location: { this.getLocation() } </p> </li>  
        </ol>

         { this.getRevenue() }

      </div>
    );
  }
}

export default App;
