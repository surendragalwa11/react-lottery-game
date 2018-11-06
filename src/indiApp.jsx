import React,{Component} from 'react';

class IndicisionApp extends Component
{

    state={
        options:[],
        count:0
    };

    
    formSubmit=(e)=>{
         e.preventDefault();
         console.log('form submitted');
        const  oValue=e.target.elements.option.value;

         if(oValue)
         {
           this.state.options.push(oValue);
           e.target.elements.option.value='';
           this.setState({count:this.state.count+1});
         }
    };
    

    removeAll=()=>{
        //this.state.options.length=0;
        this.state.options=[];
        this.setState({count:0});
    };

    luWinner=()=>{
            const winner=Math.floor(Math.random() * this.state.options.length);
            alert("Winner is "+this.state.options[winner]);
    };
    
    render()
    {
        return(
               <div> 
                  <h1> Indecision App </h1> 

                  <p> Put your life in hands of computer </p> 

                  { this.state.options.length>0 ? 'Here are your options' : 'No options' }

                  <h1> Items: { this.state.count } </h1>

                  <button disabled = { this.state.options.length===0 } onClick = { this.luWinner } > Who is lucky winner? </button>

                  <button onClick = { this.removeAll } > Remove All </button>

                  <ol>
                     { this.state.options.map( ( obtn ) => {
                          return <li key = { obtn } > { obtn } </li>
                          })
                      }
                  </ol>

                  <form onSubmit = { this.formSubmit } > 
                      <input type="text" name="option"/>
                      <button > Add Option </button>
                  </form>

              </div>
        );
    }

}

export default IndicisionApp;