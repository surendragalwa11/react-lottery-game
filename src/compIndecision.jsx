import React, { Component } from 'react';

import AddPlayer from './components/AddPlayer';

class IndecisionApp extends Component
{
    constructor(props)
    {
      super(props);

      this.findWinner=this.findWinner.bind(this);
      this.newGame=this.newGame.bind(this);
      this.removePlayer=this.removePlayer.bind(this);

      this.state={
          players:props.players,
          title: `Lottery Game`,
          subtitle: `Put your life in hands of a computer.`
      };

    }

    componentDidMount()
    {
        
        const json=localStorage.getItem('players');
        const players=JSON.parse(json);
        this.setState( ()=>( { players:players } ) );
    }
 
    componentDidUpdate(_prevProps,prevState)
    {
      if(prevState.players.length!==this.state.players.length)
      {
        const json=JSON.stringify( this.state.players );
        localStorage.setItem('players',json);
      }
    }
    
     findWinner=()=>{
        const winner= Math.floor( Math.random() * this.state.players.length );
        alert(`Winner is ${ this.state.players[winner] }`);
        alert(`He won ${ Math.floor( Math.random() *100 ) } rupees. All loosers will pay same amount.`);
     }

     newGame=()=>{
       this.setState(()=>({ players: [] }));
     }


     addPlayer=(player)=>{

        if(!player)
        {
            alert(`Please enter valid name.`);
        }
        else
        {
          if( this.state.players.indexOf(player) > -1 )
          {
           alert(`Player already exists. Enter new name `);
          }
          else
          {
            this.setState((prevState)=>( { players : prevState.players.concat(player) } ));
          }
        }       
     }

     removePlayer=(playername)=>{
         this.setState((prevState)=>( { players:prevState.players.filter( (player)=> {
                                                                                        return player!==playername; 
                                                                                      } ) } ));
                                                               
     }

    render()
    {
        
        return(
            <div>
                <Header title={ this.state.title } subtitle= { this.state.subtitle } />
                <Action findWinner={ this.findWinner } hasPlayer= { this.state.players.length>0 } /> <br />
                <Options newGame= { this.newGame }  hasPlayer= { this.state.players.length>0 } players={ this.state.players } removePlayer={ this.removePlayer } />
                <AddPlayer addPlayer={ this.addPlayer } />
                
            </div>
        );
    }
}


IndecisionApp.defaultProps={
    players:[]
};

const Header=(props)=>{
    return (
              <div>
                 <h1> { props.title } </h1>
                 <h2> { props.subtitle } </h2>
              </div>
            );

}

Header.defaultProps={
  title:'Indecision App'
};

const Action=(props)=>{
    return (
        <div>
            <button onClick= { props.findWinner } disabled={ !props.hasPlayer } >Who is winner?</button>
        </div>
    );
}

  const Options=(props)=>{
    return(
        <div>
            <button onClick={props.newGame }  disabled={ !props.hasPlayer } >New Game</button>

             <ol>
                { props.players.map((pplayer)=> <h3><li> <PrintList key={ pplayer } pname= { pplayer } removePlayer={ props.removePlayer } /> </li></h3> ) }
            </ol>

        </div>
    );
  }
const PrintList=(props)=>{
    return(
        <div>
            { props.pname } &nbsp; &nbsp;
            <button onClick={(e)=>{
                props.removePlayer(props.pname); 
            }}>Remove</button>
        </div>
    );

}




export default IndecisionApp;

