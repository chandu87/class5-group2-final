import React from "react";
import Header from "../header/Header"

class Company extends React.Component {

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
          {/* <main> */}

            <h2>Company</h2>
          {/* </main> */}
        </div>
      );
    }
  }
}

export default Company;
