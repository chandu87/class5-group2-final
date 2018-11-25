import React from "react";
import threadImage1 from './thread-event-lecture.jpg';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid home-page">
          <div className="container">
          <div className="jumbotron form-container">

              <h1 className="display-4">Welcome!</h1>
              <p className="lead">
                The goal for this project is to develop an online platform to
                facilitate the connections between refugee women and individuals
                or partners or other organisations which share an interest in
                textiles and craft activity. The partners or other organisations
                are part of the THREAD network therefore they will be metioned as
                networking.
              </p>
              <hr className="my-4" />

              </div>
            <div className="row home-page-row">
              <div className="col-sm-12 col-md-6">
                <h2> THREAD</h2>
                <p>
                          THREAD stands for Textile Hub for Refugee Empowerment, Employment
                          & Entrepreneurship Advancement in Denmark THREAD is a dynamic and
                          innovative collaboration of diverse partners from business,
                          design, education, research and refugee support agencies aiming to
                          achieve life-changing results for women who are forging new lives
                          in Denmark.
                        </p>
              </div>
              <div className="col-sm-12 col-md-6">
              <img src="https://s3.us-east-2.amazonaws.com/hyf-thread-class05/thread-recruitment.jpg"/>
                </div>
            </div>
            <hr className="hr-style3"/>
            <div className="row home-page-row">
              <div className="col-sm-12 col-md-6">
              <img src={threadImage1}/>
              </div>
              <div className="col-sm-12 col-md-6">
                <h2>Integration is a key problem</h2>
                <p>Integration is a key problem for refugees and their 
                                  host countries. This project seeks to help solve this
                                  problem by developing and testing a pioneering 
                                  themed model of Empowerment, Employment and 
                                  Entrepreneurship opportunities. The model offers 
                                  a step-change programme to women refugees with 
                                  differing levels of life experience and educational 
                                  qualifications, which may be accessed according to 
                                  their individual confidence and competence.</p>
                                  
                </div>
            </div>
            <hr className="hr-style3"/>

          </div>
        
      </div>
    );
  }
}

export default HomePage;
