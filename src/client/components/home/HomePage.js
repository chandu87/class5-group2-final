import React from "react";

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid home-page">
          <div className="jumbotron jumbo-image">
            {/* <div className="container">                          
                <div className="jumbotron">

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
              </div> */}
          </div>
          <div className="container">
          <div className="jumbotron">

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
            <div className="row">
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
          </div>
        
      </div>
    );
  }
}

export default HomePage;
