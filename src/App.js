import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import NavigationBar from './components/navbar.js'
import Rivets from './pages/Rivets.js'
import {
  Row,
  Col
} from 'react-bootstrap'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            rivets: [
                {
                   id: 1,
                   title: 'Gold',
                   summary: 'Gold rivet',
                   description: "Gold rivet mined from the hills of San Francisco, forged in fire deep within Mordor."
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
                <NavigationBar />
                <Route exact path="/" render={props => (
                    <div>
                        <small className='subtitle'>Add a rivet</small>
                        <br />
                        <Link to='/rivets'><button type="button" className="rivet-button"> See rivets</button></Link>
                    </div>
                )} />

                <Route exact path="/rivets" render={props => (
                    <Row>
                        <Col xs={4}>
                            <Link to='/' id='rivets-link'>Add a Rivet</Link>
                        </Col>
                        <Rivets rivets={this.state.rivets} />
                    </Row>
                )} />
            </div>
        </Router>
    );
  }
}


export default App;
