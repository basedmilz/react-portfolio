import React from 'react';
import './Footer.css';
// import {Link} from 'react-router-dom';


function Footer() {
    return (
        <div className='main-footer'>
            <div className='container'>

                <div className='row'>
                    {/* column1 */}
                    <div className='col'>
                        <h4>Connect with me:</h4>
                        <ul className='list-unstyled'>
                            <a href="https://www.linkedin.com/in/milton-harper-0353bb161/" target="_blank"><li>Linkedin</li></a>

                            <a href="https://github.com/basedmilz" target="_blank">My Github<li> </li></a>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className='col'>
                        <h4 className='MEME'>
                            <ul className='list-unstyled'>
                                <li></li>
                                <li></li>
                                <li></li>

                            </ul>


                        </h4>

                    </div>
                    {/* colum3 */}
                    <div className='col'>
                        <h4 className='MEE'>
                            <ul className='list-unstyled'>
                                <li> Click</li>
                                <li>to view:</li>
                                <a href="https://docs.google.com/document/d/1ZMzTYlWJE5c2IUukwJ2XIRgeamRfXn_GtxwRPjBUIqA/edit?usp=sharing" target="_blank">My Resume<li> </li></a>



                            </ul>


                        </h4>

                    </div>
                    <hr />
                    <div className='row'>
                        <p className='col-sm'>

                        </p>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Footer; 