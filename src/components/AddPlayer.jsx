import React,{ Component } from 'react';

class AddPlayer extends Component
{
    constructor(props)
    {
        super(props);
        this.addPlayer=this.addPlayer.bind(this);
    }
    
    addPlayer=(e)=>{
      e.preventDefault();
      const pname=e.target.elements.newplayer.value.trim();
      e.target.elements.newplayer.value='';
      this.props.addPlayer(pname);
    }
    
    render()
    {
        return(
            <div>
                <form onSubmit={ this.addPlayer }>
                    <input type="text" name="newplayer" />
                    <button >Add Player</button>
                </form> 
            </div>
        );
    }
}

export default AddPlayer;