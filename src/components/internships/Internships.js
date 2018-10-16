import React from "react";
import Header from "../header/Header"

class Internships extends React.Component {
  constructor(props){
    super(props);
    this.state = {internships : []};
  }
  //fetch data using API
  componentDidMount() {
    fetch('https://my.api.mockaroo.com/internship.json?key=d38d0f10')
      .then(response => response.json())
      .then(data => {
         this.setState({ internships : data })
      });

  }
  //Read data using console
  //Display data using list
  //Add style to it or follow List view from Group1
  render() {
      console.log(this.state.internships);
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <li>Internships</li>
        </main>
      </div>
    );
  }
}

export default Internships;
