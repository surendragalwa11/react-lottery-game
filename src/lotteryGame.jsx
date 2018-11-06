import React, { Component } from 'react';

class Lottery extends Component
{
  state={
    pNames:['Surendra']
  };

  newGame=()=>{
      this.setState( { pNames:[] } );
  };

  findWinner=()=>{
     alert('Winner is : ' +  this.state.pNames[ Math.floor( Math.random() * this.state.pNames.length ) ]  );
     alert("He/She won $"+ Math.floor(Math.random()*100) + ". All loosers will pay equal amount.");
  };

  addPlayer=(e)=>{
         e.preventDefault();
         const name=e.target.elements.player.value;
        // console.log("Name before "+ name);

         if(this.state.pNames.indexOf(name)===-1 && name)
         {
           //console.log(name);
           this.state.pNames.push(name);
           e.target.elements.player.value='';
           this.setState({pNames:this.state.pNames});
         }
         else
         {
           alert(name +' empty/already exists.Choose different name.');
           e.target.elements.player.value='';
         }

        //  if(name)
        //  {
        //     //console.log(name);
        //     this.state.pNames.push(name);
        //     e.target.elements.player.value='';
        //     this.setState({pNames:this.state.pNames});
        //  }

  };
  
  render()
  {
      return(
          <div>
              <h1>Lottery Game</h1>

              <h3 >Win amount $0-100</h3>

               <button disabled={this.state.pNames.length===0} onClick= { this.newGame } >New Game</button>

               <button disabled={ this.state.pNames.length===0 } onClick={ this.findWinner } >Who is winner?</button>

               <h3> Participants: { this.state.pNames.length>0 ?  this.state.pNames.length  : 'Add participants to start' } </h3>

               <ol>
                   {this.state.pNames.map((Name)=>{
                           return <li key={Name} > {Name} </li>
                     })
                   }

               </ol>

               <form onSubmit={ this.addPlayer } >
                      <input type="text" name="player" />
                      <button> Add Player </button>
               </form>
             
          </div>
      );
  }
}

export default Lottery;