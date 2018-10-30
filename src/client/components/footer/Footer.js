import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap-grid.css";


class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-9">
                            <h4>About Us</h4>
                            <p>Textile Hub for Refugees' Empowerment, Employment 
                            and Entrepreneurship Advancement in Denmark - a 
                            new model</p>
                            
                            <p>THREAD is a dynamic and innovative collaboration
                            of diverse partners from business, design, education, 
                            research and refugee support agencies aiming to 
                            achieve life-changing results for women who are 
                            forging new lives in Denmark.</p>
                            
                            <p>Integration is a key problem for refugees and their 
                            host countries. This project seeks to help solve this
                            problem by developing and testing a pioneering 
                            themed model of Empowerment, Employment and 
                            Entrepreneurship opportunities. The model offers 
                            a step-change programme to women refugees with 
                            differing levels of life experience and educational 
                            qualifications, which may be accessed according to 
                            their individual confidence and competence.</p>
                            
                            <p>The project is funded by Innovationsfonden.</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <h4>Contact Us</h4>
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

                            <h4>Developed By</h4>
                            <p>
                                Group 2 for the Final Project Class at <br />
                                Hack Your Future - Copenhagen<br />
                                http://hackyourfuture.dk/<br />
                            </p>
                        </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default Footer;