import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import Home from './Home'
import Creatures from './Creatures'
import unicornData from './data/unicorn-data'
import sharkData from './data/shark-data'
import puppyData from './data/puppy-data'
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
        <Route exact path='/unicorns' render={() => <Creatures data={unicornData} />} />
        <Route exact path='/puppies' render={() => <Creatures data={puppyData} />} />
        <Route exact path='/sharks' render={() => <Creatures data={sharkData} />} />
      </main>
    );
  }
}
