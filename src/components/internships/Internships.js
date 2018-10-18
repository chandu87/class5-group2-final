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
      const {internships} = this.state;
      if(internships.length <= 0){
        return ("Loading");
      }else{
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          {internships.map(item =>(
            // <li key={item.id}>{item.internship_title}</li>
            <div key={item.id} className="card">
            <div className="card-header">
            <h5>{item.internship_title}</h5>
            </div>
            <div className="card-body">
              {/* <h5 class="card-title">{item.internship_title}</h5> */}
              <p className="card-text">{item.internship_description}</p>
              <a href="#" className="btn btn-primary">Click for more</a>
            </div>
          </div>
          
            ))}
        </main>
      </div>
    );
  }
  }
}

export default Internships;
