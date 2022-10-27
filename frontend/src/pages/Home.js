import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

function Home() {
  return (
    <Row>
        <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
            <div>
                <h1>Notre précieux Chatbot avec les potes</h1>
                <p>App Révolutionnaire de ChatBot interne entre pote</p>
                <LinkContainer to="/chat">
                    <Button variant='success'>Allons-y!! <i className='fas fa-comments home-message-icon'></i></Button>
                    
                </LinkContainer>
            </div>
        </Col>

        <Col md={6} className="home__bg">

        </Col>
    </Row>
  )
}

export default Home