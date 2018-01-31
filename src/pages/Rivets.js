import React, { Component } from 'react';
import {
  Col,
  Row
} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Rivets extends Component {
  render() {
    return (
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
    );
  }
}

export default Rivets;
