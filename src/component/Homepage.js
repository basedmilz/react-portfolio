import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import { Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import './Homepage.css';


function Homepage() {
    return (
        <div >
            <h1><Card body>About Me</Card></h1>
            <br/>
                <br/>
                <br/>
                <br/>
                <Container>
            <img className="image" src="/images/m-port.jpg" width="200em"  />

                </Container>
            <Container>
            

            
            <p>
            <br/>
                <br/>
                <br/>
                <br/>
                
                    {/* Hi , my name is Milton Harper I am a Full-Stack Developer, and my background is in Nursing. New to coding looking for a full-time full-stack position */}
                    <h3><Card body>Hi , my name is Milton Harper I am a Full-Stack Developer, and my background is in Nursing. New to coding looking for a full-time full-stack position.</Card></h3>
            </p>
<div>

</div>
            

            </Container>


        </div>
    );
}

export default Homepage; 