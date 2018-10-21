import React from "react";

import Header from "../header/Header";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>

        <main>
          <div class="jumbotron">
            <h1 class="display-4">Welcome!</h1>
            <p class="lead">
              The goal for this project is to develop an online platform to
              facilitate the connections between refugee women and individuals
              or partners or other organisations which share an interest in
              textiles and craft activity. The partners or other organisations
              are part of the THREAD network therefore they will be metioned as
              networking.
            </p>
            <hr class="my-4" />
            <p>
              THREAD stands for Textile Hub for Refugee Empowerment, Employment
              & Entrepreneurship Advancement in Denmark THREAD is a dynamic and
              innovative collaboration of diverse partners from business,
              design, education, research and refugee support agencies aiming to
              achieve life-changing results for women who are forging new lives
              in Denmark.
            </p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="https://ctr.hum.ku.dk/research-programmes-and-projects/thread/" role="button">
                Learn more
              </a>
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default HomePage;
