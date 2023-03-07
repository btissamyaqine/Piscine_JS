import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
function Home() {


  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
    <Container>
      <Row>
        <Col>
        <br></br>
          <h3>Hi!</h3>
          <h1>I'm <Badge bg="danger">Btissam</Badge></h1>
          <p>I'm competent and challangings web developer, 
              over the years, Enthusiastic and positive, 
              Passionate about new technologies. I has built up a diverse range of skills, 
              I also enjoy reading and Discover new traditions by traveling .
              Check out my developer projects portfolio.
          </p>
          <Button variant="danger">Contact me</Button>
        </Col>
        <Col>
        <br></br>
        <Image style={{ display: "block", width: 450, height: 400, padding: 30 }} 
          rounded src='https://images.unsplash.com/photo-1631377307475-9acfa929b062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
        </Col>
      </Row>
      <br></br>
      <h1>Competence</h1>
      <Row>
      <div>
      <Badge bg="primary">
        JavaScript
      </Badge>{' '}
      <Badge bg="secondary">
        NodeJs
      </Badge>{' '}
      <Badge bg="success">
        Express
      </Badge>{' '}
      <Badge bg="danger">
        MongooDB
      </Badge>{' '}
      <Badge bg="warning" text="dark">
        PHP
      </Badge>{' '}
      <Badge bg="info">
        bootstrap
      </Badge>{' '}
      <Badge bg="light" text="dark">
        ReactJS
      </Badge>{' '}
      <Badge bg="dark">
        SQL
      </Badge>
    </div>

      </Row>
      <br></br>
      <h1>Projects</h1>
      <Row>
        <Col>
        
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Chat App</Accordion.Header>
            <Accordion.Body>
            Building a chat app with Socket.io and React rocket, Just to give a bit of context, 
            point_downpoint_down you send a message to a person or a group, they see the message and reply back.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Col>
        <Col>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Loisira</Accordion.Header>
            <Accordion.Body>
            Building a chat app with Socket.io and React rocket, just to give some context, 
            point_down you send a message to a person or a group, they see the message and reply.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Col>
        <Col>
        
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Expense_Tracker_ReactJs</Accordion.Header>
            <Accordion.Body>
            In this project we will take a vanilla JS expense tracker app and turn it into a React app using hooks (useState, useContext, useReducer) and the context API.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Col>
      </Row>
      </Container>

    </ThemeProvider>
    
      
  )
}

export default Home