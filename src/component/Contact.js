import React from 'react';
import { Container } from 'react-bootstrap';
import './contact.css';
// import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'


function Contact() {
    return (
        <div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <Container className='container'>

                <div></div>

                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <h1>Contact Me:</h1>

                        <Card.Text>

                            <p>Email:</p>
                            <p>basedmilz@gmail.com</p>
                            <p>Phone:</p>
                            <p>252-432-0316</p>
                        </Card.Text>
                        <Card.Link href="https://github.com/basedmilz" target="_blank">Github</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/milton-harper-0353bb161/">Linkedin</Card.Link>
                    </Card.Body>
                </Card>
            </Container>

            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    );
}

export default Contact; 