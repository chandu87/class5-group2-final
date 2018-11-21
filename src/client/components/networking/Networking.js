import React from "react";
import { Link } from "react-router-dom";
import NetworkCard from './NetworkCard';
import LoginContext from '../../contexts/login';


class Networking extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
   componentDidMount() {
     fetch('/api/networking')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        })
      });
  }

  render() {
    const contextType = LoginContext._currentValue;
    console.log("Networking page",contextType.isLoggedIn);

    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div className="container"> <h2>Loading.... </h2></div>;
    }
    else {
      return (
            <div className="container"> 
            <h1 className="">NETWORKING</h1>
            {contextType.isLoggedIn ? 
                <a className="btn btn-outline-danger btn-lg" href="/Networking/add">Add Network</a>
                : ""} 
                {items.map(item => (
                  <NetworkCard key={item.id} networkItem={item} displayCardFooter={true}></NetworkCard>
                ))}                                  
                </div>
      );
    }
  }
}

export default Networking;
