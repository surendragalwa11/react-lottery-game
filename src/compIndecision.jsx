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

    // componentDidMount() {
    //     try {
    //       const json = localStorage.getItem('players');
    //       const players = JSON.parse(json);
    
    //       if (players) {
    //         this.setState(() => ({ players }));
    //       }
    //     } catch (e) {
    //       // Do nothing at all
    //     }
    //   }
    //   componentDidUpdate(prevProps, prevState) {
    //     if (prevState.players.length !== this.state.players.length) {
    //       const json = JSON.stringify(this.state.players);
    //       localStorage.setItem('players', json);
    //     }
    //   }
    
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
// class Header extends Component
// {
//     render()
//     {
//         return (
//             <div>
//                 <h1> { this.props.title } </h1>
//                 <h2> { this.props.subtitle } </h2>
//             </div>
//         );
//     }
// }

//stateless and function based component ( method-2)
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

// class Action extends Component
// {
//     render()
//     {
//         return (
//             <div>
//                 <button onClick= { this.props.findWinner } disabled={ !this.props.hasPlayer } >Who is winner?</button>
//             </div>
//         );
//     }
// }

//stateless and function based component ( method-2)
const Action=(props)=>{
    return (
        <div>
            <button onClick= { props.findWinner } disabled={ !props.hasPlayer } >Who is winner?</button>
        </div>
    );
}

// class Options extends Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <button onClick={ this.props.newGame }  disabled={ !this.props.hasPlayer } >New Game</button>

//                  <ol>
//                     { this.props.players.map((pplayer)=> <h3><li> <PrintList key={ pplayer } pname= { pplayer }  /> </li></h3> ) }
//                 </ol>

//             </div>
//         );
//     }
// }

//stateless and function based component ( method-2)
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



// class PrintList extends Component
// {
//     render()
//     {
//         return (
//             <div>
//                { this.props.pname }  
//             </div>
//         );
//     }
// }

//stateless and function based component ( method-2)
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


// import React, { Component } from 'react';

// class IndecisionApp extends Component
// {
//    title='Indecision App';
//   subtitle='Put your life in hands of a computer.';
//   options=['Item 1','Item 2','Item 3'];

//   render()
//   {
//       return(
//           <div>
//         <Header title={this.title} subtitle={this.subtitle} />
//         <Action />  <br />  <br />
//         <Options options={ this.options }/> <br />
//         <AddOption />
//         </div>
//       );
   
//   }
// }

// class Header extends Component
// {
//   render()
//   {
//      return(
//          <div>
//          <h1> { this.props.title } </h1>
//          <h2> { this.props.subtitle } </h2>
//          </div>
//      );
//   }
// }

// class Options extends Component
// {
//    constructor(props)
//    {
//      super(props);
//      this.newGame=this.newGame.bind(this);
//    }

//    newGame=()=>{
//        alert(` Yeah we're starting new game. `);
//     }
   
//     render()
//     {
//         return (
//             <div>

//                 <button onClick= { this.newGame }> Start new game </button>
            
//                   {  
//                    this.props.options.map((option)=> <Option key={ option } optionText= { option } />)
//                   }    
                
//             </div>
//         );
//     }
// }

// class Option extends Component
// {
//     render()
//     {
//         return( 
//             <div>
                
//              { this.props.optionText }
               
//             </div>
//          );
//     }
// }

// class Action extends Component
// {
//     findWinner=()=>{
//         alert(`Yes you're winner`);
//     }
    
//     render()
//     {
//         return (
//             <button  onClick= { this.findWinner }> Who is winner? </button>
//         );
//     }
// }

// class AddOption extends Component
// {
//     addParticipant=(e)=>{
//         e.preventDefault();
//         const player=e.target.elements.player.value.trim();

//         if(player )
//         {
//             alert(`Participant will be added`);
//             e.target.elements.player.value='';
//         }
       
//     }
    
//     render()
//     {
//         return (
//             <form onSubmit= { this.addParticipant }>
//               <input type="text" name="player"/>
//               <button >Add Participant</button>
//             </form>
           
//         );
//     }
// }

 