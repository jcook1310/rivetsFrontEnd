import React, { Component } from 'react';
import {
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'
import App from '../App.js'

class Rivets extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
            <ListGroup className="all-rivets">
                {this.props.rivets.map((rivet, index) =>{
                    return(
                        <ListGroupItem
                            key={index}
                            header={
                                <h4>
                                    <span className='rivet-title'>
                                        {rivet.title}
                                    </span>
                                    <br />
                                        <small className='rivet-summary'>{rivet.summary}</small>
                                </h4>
                            }>
                            <span className='rivet-desc'>
                                {rivet.description}
                            </span>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </Col>
      </Row>
  );
  }
}

export default Rivets;
