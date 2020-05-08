import React, { Component, Fragment } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

class HomeUI extends Component {
    render() {
        return (
            <Jumbotron style={{backgroundColor: '#fff'}}>
                <Container>
                    <Row>
                        <Col> <img
                            src="https://kit8.net/images/thumbnails/580/435/detailed/2/online_doctor@2x.png" style={{height: '700px',width:'800px',marginLeft:'-100px',marginTop:'-50px'}}/></Col>
                        <Col>
                            <br /><br /><br /><br /><br /><br /><br /><br />
                            <h1 style={{ color: '#45ac8b' }}>Bridging Doctors to Users</h1>
                            <p style={{ color: '#45ac8b' }}>  Solving the ground level issue of preordering items from brands directly. Making restocking inventory as seamless as possible</p>
                            <p><Button variant="primary" href='/login'>Signin</Button></p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomeUI;
