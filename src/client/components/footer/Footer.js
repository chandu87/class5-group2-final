import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap-grid.css";


class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4">
                            <h4>About Us</h4>
                            <hr className="hr-style3"/>
                            <p>Textile Hub for Refugees' Empowerment, Employment 
                            and Entrepreneurship Advancement in Denmark - a 
                            new model</p>
                        
                            <p>The project is funded by Innovationsfonden.</p>
                            
                        </div>

                        <div className="col-12 col-md-4 col-lg-4">
                            <h4>Contact Us</h4>
                            <hr className="hr-style3"/>

                            <p>
                                <strong>Jane Malcolm-Davies, Director</strong><br />
                                Centre for Textile Research<br />
                                University of Copenhagen<br />
                                <strong>Tel.:</strong> +45 26 20 22 09<br />
                                <strong>E-mail:</strong> jane@jmdandco.com<br />
                            </p>
                            <p>
                            <strong>Egzona Haxha, Co-Director</strong><br />
                                Centre for Textile Research<br />
                                University of Copenhagen<br />
                                <strong>Tel.:</strong> +45 60 86 32 17<br />
                                <strong>E-mail:</strong> egzona@hum.ku.dk
                            </p>

                        </div>
                            <div className="col-12 col-md-4 col-lg-4">

                        
                            <h4>Developed By</h4>
                            <hr className="hr-style3"/>

                            <p>
                                Group 2 - Final Project<br />
                                Chandrashekar Palle<br />
                                Majid Khan<br />
                                Hack Your Future - Copenhagen<br />
                                Copyright © <a href="http://hackyourfuture.dk/">Hack Your Future</a>
                                <br/>
                            </p>
                        </div>

                   </div>

                   <hr className="hr-style3"/>

               </div>
            </div>
        );
    }
}

export default Footer;