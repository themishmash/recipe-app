import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipesList from './components/RecipesList';
import EditRecipe from './components/EditRecipe';
import CreateRecipe from './components/CreateRecipe';
import CreateUser from './components/CreateUser';


function App() {
  return (<div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RecipesList} />
          <Route path="/edit/:id" component={EditRecipe} />
          <Route path="/create" component={CreateRecipe} />
          <Route path="/user" component={CreateUser} />
  
        </Switch>
      </BrowserRouter>
     
    </div>)
 }
 

export default App;
