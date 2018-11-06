import React , {Component} from 'react';

class Counter extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      counter:0  
    };
  }
  
 

  plusOne=()=>{
      this.setState({counter: this.state.counter+1});
  } ;

  minusOne=()=>{
    this.setState({counter:this.state.counter-1});
  };

  reset=()=>{
    this.setState({counter:0});
  };
  
  componentDidMount()
  {
    const stringCounter=localStorage.getItem('counter');
    const counter=parseInt(stringCounter,10);

    if(!isNaN(counter))
    {
      this.setState( ()=>( { counter } ) );
    }

    
  }
  
  componentDidUpdate(prevProps,prevState)
  {
     if(prevState.counter!==this.state.counter)
     {
      
       localStorage.setItem('counter',this.state.counter);
     }
  }
  
  render()
   {
     return(
        <div>
        <h1>Counter : {this.state.counter}</h1>  &nbsp;
        <button onClick={this.plusOne}>Counter+1</button> &nbsp;
        <button onClick={this.minusOne}>Counter-1</button>  &nbsp;
        <button onClick={this.reset}>RESET</button>
        </div>
     );
   }
}

export default Counter;