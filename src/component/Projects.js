import React from 'react';
// import './App.css';
import { Card } from "react-bootstrap";
import { Container } from 'react-bootstrap';
import './Project.css';

function Projects() {

    return (
        <div>
           <h1><Card body>My Projects:</Card></h1>
            <br/>__________________________________________________________________________________________________________________________________________________________________________________________________

            {/* <Container className="card"> */}
                <div >
                    <Card  style={{ width: '40rem' }}  >
                        <Card.Img variant="top" src="images/humgry.png" />
                        <Card.Body>
                            <Card.Title className="card">Humgry</Card.Title >
                            <Card.Text>
                                An app that searches for recipes using an ingredient or cuisines at your convience or new to try.
<div>
                                    <Card.Link href="https://github.com/JD-Jaramillo/Recipe-and-Cocktail-Suggester" target="_blank">Humgry Repository</Card.Link>
                                </div>
                                <div>
                                    <Card.Link href="https://jd-jaramillo.github.io/Recipe-and-Cocktail-Suggester/" target="_blank">Humgry Deployed</Card.Link>
                                </div>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="bottom" src="images/weatherdashboard.png" />
                    <Card.Body>
                        <Card.Title className="card">Weather Dashboard</Card.Title>
                        <Card.Text>
                            An app that takes in a cities input and returns currect and future weather conditions
                            <div>
                                    <Card.Link href="https://github.com/basedmilz/mh-weather-dashboard" target="_blank">Weather Dashboard Repository</Card.Link>
                                </div>
                                <div>
                                    <Card.Link href="https://basedmilz.github.io/mh-weather-dashboard/" target="_blank">Weather Dashboard Deployed</Card.Link>
                                </div>
</Card.Text>

                    </Card.Body>
                </Card>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src="images/workday.png" />
                    <Card.Body>
                        <Card.Title className="card">Work Day Scheduler</Card.Title>
                        <Card.Text>
                        A calendar saving application that uses Javascript and third-party API to save logged events throughout the day.
                            <div>
                                    <Card.Link href="https://github.com/basedmilz/mh-work-day-scheduler" target="_blank">Work Day Scheduler Repository</Card.Link>
                                </div>
                                <div>
                                    <Card.Link href=" https://basedmilz.github.io/mh-work-day-scheduler/" target="_blank">Work Day Scheduler Deployed</Card.Link>
                                </div>
    </Card.Text>

                    </Card.Body>
                </Card>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src="images/doodlenode.png" />
                    <Card.Body>
                        <Card.Title className="card">Doodle Node</Card.Title>
                        <Card.Text>
                       An app that creates LogIn and create drawings on their profile which are then stored in MySQL database, the user can then go back in and update the drawings.
                       <div>
                                    <Card.Link href="https://github.com/basedmilz/Drawings-Creator-and-Gallery" target="_blank">Doodle Node Repository</Card.Link>
                                </div>
                                <div>
                                    <Card.Link href=" https://drawings-creator-and-gallery.herokuapp.com/" target="_blank">Work Day Scheduler Deployed</Card.Link>
                                </div>
    </Card.Text>

                    </Card.Body>
                </Card>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src="images/lenotetaker.png" />
                    <Card.Body>
                        <Card.Title className="card">Note Taker</Card.Title>
                        <Card.Text>
                        An application that can be used to write, save. This application will use an express backend to save data and give access when requested
                        <div>
                                    <Card.Link href="https://github.com/basedmilz/hw11-mh-notetaker" target="_blank">Doodle Node Repository</Card.Link>
                                </div>
                                <div>
                                    <Card.Link href=" https://rocky-sea-77997.herokuapp.com/" target="_blank">Work Day Scheduler Deployed</Card.Link>
                                </div>

    </Card.Text>

                    </Card.Body>
                </Card>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src="images/passgen.png" />
                    <Card.Body>
                        <Card.Title>Random Password Generator</Card.Title>
                        <Card.Text>
                            This is an app that allows the user to set a different types and length of character and outputs an optimal password.
    </Card.Text>
    <div>
    <Card.Link href="https://github.com/basedmilz/pass-gen-mh" target="_blank">Random Password Generator Repository</Card.Link>
                                </div>
                                <div>
                                    <Card.Link href=" https://basedmilz.github.io/pass-gen-mh/" target="_blank">Random Password Generator Deployed</Card.Link>
                                </div>

                    </Card.Body>
                </Card>
            {/* </Container> */}

        </div>
    );
}





export default Projects; 