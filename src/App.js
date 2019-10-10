import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Unicorn from './Unicorn'
import Puppy from './Puppies'
import Shark from './Sharks'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to='/unicorns' className='nav' >Unicorns</NavLink>
          <NavLink to='/puppies' className='nav' >Puppies</NavLink>
          <NavLink to='/sharks' className='nav' >Sharks</NavLink>
        </header>
        <Route exact path='/' component={Home} /> 
        <Route exact path='/unicorns' component={Unicorn} />
        <Route exact path='/puppies' component={Puppy} />
        <Route exact path='/sharks' component={Shark} />
      </main>
    );
  }
}
