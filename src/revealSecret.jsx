import React, { Component } from 'react';


class Secret extends Component
{
  state={
     revealed:0,
     quote:''
  };

  showHide=()=>{
     if(this.state.revealed===0)
     {
         this.setState({quote:'I dont have any secret. :-D'}) ; 
         this.setState({revealed:1});
     }
     else
     {
        this.setState({quote:''}) ; 
        this.setState({revealed:0});
     }
  };

  tellNow=()=>{
    this.setState({quote:'I won 1 crore rs. lottery.'}) ; 
    this.setState({revealed:2});  

  };

  render()
  {
    var style1 = {
        backgroundColor: 'red',
        display: 'inline-block',
      };  
    
    var style2 = {
        display: 'none',
      };  
    
    return(
          <div>
              <h1>Let's reveal secrets!!!</h1>

              <button onClick={this.showHide}>{this.state.revealed>0 ? 'Hide secrets' : ' Show secrets' }</button> <br /> <br />
              
              <h3>  { this.state.quote } </h3>
            
              <button style={this.state.revealed===0 ? style2 : style1} onClick={this.tellNow} disabled={this.state.revealed===2} >Please tell me </button>  

          </div>
      );
  }
}
export default Secret;