import React from "react";
import Navbar from './Navbar';

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peepname: '',
      title: '',
      url: '',
      date: new Date(),
      users: [] //this is array as on our page there will be drop down menu for users so can select all the users already in database
    }
  }

  render () {
    return (<div>
       <div><Navbar /></div>
      <h1>This is the create Recipe</h1>
    </div>)
  }
} 


export default CreateRecipe