import React from "react";

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

            <h2>Company</h2>
        </div>
      );
    }
  }
}

export default Company;
