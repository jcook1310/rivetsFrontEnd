import React, { Component } from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar.js'
import Rivets from './pages/Rivets'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            rivets: [
                {
                   id: 1,
                   title: 'Gold',
                   summary: 'Gold rivet',
                   description: "Gold rivet mined from the hill of San Francisco, forged in fire deep within Mordor."
                 },
                 {
                   id: 2,
                   title: 'Silver',
                   summary: 'Silver rivet',
                   description: "Silver rivet crafted from a silver bullet, plucked out of Dracula's heart."
                 },
                 {
                   id: 3,
                   title: 'Bronze',
                   summary: 'Bronze rivet',
                   description: "Bronze rivet made from the tears and medals of the third place atheletes from the Nagano Olympics."
                 }
            ]
        }
    }
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route path="/" render={props => (
                    <small className='subtitle'>Add a rivet</small>
                )} />
                <Route path="/rivets" component={Rivets} />
            </div>
        </Router>
    );
  }
}

export default App;
