import React from "react";
import Navbar from './Navbar';

// function CreatePeep ()
// {
//   return (<div>
//      <div><Navbar /></div>
//     <h1>This is the create peep</h1>
//   </div>)
// }

class CreatePeep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peepname: '',
    }
  }

  onchangePeepname = (e) => {
    //we won't do this.state.username = "beau"
    this.setState({
      peepname: e.target.value //target is textbox. updates user name in the state
    });
  }

  onSubmit = (e) => { 
    e.preventDefault();
    this.setState(state => ({
      peepname: this.state.peepname,
      
      
    }));
    console.log(this.state);
    
   this.setState({
     peepname: ''
    })
     
   

  }

  render () {
    return (<div>
      <div><Navbar /></div>
      <h3>Create New Peep</h3>
      <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-25">
              <label>Peep name</label>
            </div>
            <div className="col-75">
              <input type="text"
              required
              className="peep-name"
              name="peep-name"
              placeholder="Your peep name"
              value={this.state.peepname}
              onChange={this.onchangePeepname}
              />
            </div>
          </div>

          <div className="row">
            <button onClick={this.onSubmit} className="submit">Add Peep</button>
          </div>
        </form>
      </div>
    </div>)
  }
}

export default CreatePeep