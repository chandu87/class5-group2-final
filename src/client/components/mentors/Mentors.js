import React from "react";
import Header from "../header/Header"
import Footer from "../footer/Footer";
import './Mentors.css';

class Mentors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('/api/mentors')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div> Loading.... </div>;
    }
    else {
      return (
        <div>
          {/* <header>
            <Header />
          </header> */}
          {/* <main id="mentors"> */}
          <div className="container"> 
          <div className="row">
          <div className="col">
          <h1>Mentors</h1> <br />
            <a href="/Mentors/add">Add new</a>

            {/* https://getbootstrap.com/docs/4.1/components/card/#card-columns */}
            <div className="card-columns">

            {items.map(item => (
              <div key={item.id} class="card">
              <img className="card-img-top" src={item.profile_picture} alt={item.first_name + " "+ item.last_name} />
              <div className="card-body">
                <h5 className="card-title">{item.first_name + " "+ item.last_name}</h5>
                <p className="card-text"><strong>Services</strong><br />
                  <span>{item.offering}</span> <br />
                  <strong>Availability</strong><br />
                  <span>{item.availability}</span> <br />
                  
                </p>
              </div>
              </div>
              ))}
            </div>
          </div>
          </div>
          </div>
          {/* </main> */}

          {/* <footer>
            <Footer />
          </footer> */}


        </div>
      );
    }
  }
}

export default Mentors;
