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

    fetch('https://my.api.mockaroo.com/mentor.json?key=d38d0f10')
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
          <header>
            <Header />
          </header>
          <main>
            <ul>
              {items.map(item => (
                <li className='mentorsLi' key={item.id}>
                  Name: <span className='name'> {item.first_name} </span> || Email: <span className='email'> {item.email} </span> || Availability: <span className='availability'> {item.availability} </span>
                </li>
              ))};
                </ul>
          </main>

          <footer>
            <Footer />
          </footer>


        </div>
      );
    }
  }
}

export default Mentors;
