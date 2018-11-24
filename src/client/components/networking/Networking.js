import React from "react";
import NetworkCard from './NetworkCard';
import LoginContext from '../../contexts/login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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
      return <div className="container container-height"> 
                <p className="text-center"><FontAwesomeIcon size="5x" icon="spinner" pulse/></p>
                <h2 className="text-center">Loading</h2>

             </div>;
    }
    else {
      return (
            <div className="container"> 
<<<<<<< HEAD
            <h1 className="">Networking</h1>
            <br />
            {contextType.isLoggedIn ? 
                <a className="btn btn-outline-danger btn-large-mobile no-gutters mb-3" href="/Networking/add"><FontAwesomeIcon icon="plus"/> Add Network</a>
=======
            <h1 className="text-center text-uppercase text-secondary mb-0">NETWORKING</h1>
            {/* <hr class="star-dark mb-5"></hr> */}
            <hr className="hr-style2"/>
            {contextType.isLoggedIn ? 
                <a className="btn btn-outline-danger btn-lg mentor-add-button" href="/Networking/add"><FontAwesomeIcon icon="plus"/> Add Network</a>
>>>>>>> chandu/master
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
