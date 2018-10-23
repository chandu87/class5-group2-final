import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import './FooterPage.css';
import './bootstrap.min.css';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer color="stylish-color-dark" className="font-small pt-4 mt-4 bg-light">
                <Container fluid className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="4" xl="4" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Abous us</h6>
                    <p className='aboutus'>
                        <p>
                            Textile Hub for Refugees' Empowerment, Employment 
                            and Entrepreneurship Advancement in Denmark - a 
                            new model
                        </p>
                        <p className='aboutus'>
                            THREAD is a dynamic and innovative collaboration
                            of diverse partners from business, design, education, 
                            research and refugee support agencies aiming to 
                            achieve life-changing results for women who are 
                            forging new lives in Denmark.
                        </p>
                        <p>
                            Integration is a key problem for refugees and their 
                            host countries. This project seeks to help solve this
                            problem by developing and testing a pioneering 
                            themed model of Empowerment, Employment and 
                            Entrepreneurship opportunities. The model offers 
                            a step-change programme to women refugees with 
                            differing levels of life experience and educational 
                            qualifications, which may be accessed according to 
                            their individual confidence and competence.
              
                            The project is funded by Innovationsfonden.
                        </p>

                    </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none" />
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3 contact">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p>
                              
                                   <strong> Jane Malcolm-Davies, </strong> <i> Director </i><br/>
                                    Centre for Textile Research <br/>
                                    University of Copenhagen <br/> 
                            
                                    <i className="fa fa-envelope mr-3"></i> <span className='email'> jane@jmdandco.com </span> <br/>
                                    <i className="fa fa-phone mr-3"></i> +45 26 20 22 09
                                  </p>
                            <br/>
                            <hr className='w-80 clearfix ' />
                            <p>
                               <strong> Egzona Haxha, </strong> <i> Co-Director </i> <br/>
                                Centre for Textile Research <br/>
                                University of Copenhagen <br/>
                            
                            <i className="fa fa-envelope mr-3"></i><span className='email'> egzona@hum.ku.dk</span> <br/>
                            <i className="fa fa-phone mr-3"></i> +45 60 86 32 17 </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="d-flex align-items-center backColor">
                        <Col md="8" lg="8">
                            <p>
                                Developed by:  Group 2 for the Final Project Class at <br/>
                                Hack Your Future - Copenhagen <br/>
                                http://hackyourfuture.dk/
                            </p>
                            <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.facebook.com/threadcopenhagen/" target='_blank'> Thread </a></p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item"><a href='https://www.facebook.com/threadcopenhagen/' target='_blank' className="btn-floating btn-lg rgba-white-slight mx-1"><i className="fa fa-facebook fa-2x"></i></a></li>
                                  </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

export default FooterPage;