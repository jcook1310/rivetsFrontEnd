import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar.js'
import Rivets from './pages/Rivets.js'

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
                <Route exact path="/" render={props => (
                    <small className='subtitle'>Add a rivet</small>
                )} />
                <Route exact path="/rivets" render={props => (
                    <div>
                        <Row>
                            <Col xs={8}>
                                ACME rivets
                                <small className='subtitle'>All the Rivets</small>
                            </Col>
                            <Col xs={4}>
                                <small>
                                    <Link to='/' id='rivets-link'>Add a Rivet</Link>
                                </small>
                            </Col>
                        </Row>
                        <Rivets rivets={this.state.rivets} />
                    </div>
                )} />
            </div>
        </Router>
    );
  }
}


export default App;
