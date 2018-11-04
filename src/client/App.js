import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@material/card/dist/mdc.card.min.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Internships from "./components/internships/Internships";
import Homepage from "./components/home/HomePage";
import Events from "./components/events/Events";
import Mentors from "./components/mentors/Mentors";
import Networking from "./components/networking/Networking";
import NetworkingItemDetails from "./components/networking/Network-item-details";
import Company from "./components/networking/Company";
import MentorForms from "./components/mentor-form";
import NetworkForms from "./components/networking-form";
import InternshipForms from "./components/internship-form";
import EventsForm from './components/events-form';
import EventDetailedView from "./components/events/EventDetailedView";
import SearchBar from "./components/search-bar/SearchBar";

class App extends Component {
  render() {
    return (
      <div id="app">
        <header>
          <Header />
        </header>
        <main>
        <SearchBar />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Internships" component={Internships} />
            <Route exact path="/Internships/add" component={InternshipForms.AddInternship} />
            <Route exact path={`/Internships/edit/:id`} component={InternshipForms.EditInternship} />
            <Route exact path="/Events" component={Events} />
            <Route exact path="/Events/add" component={EventsForm.AddEvent} />
            <Route exact path="/Events/edit/:id" component={EventsForm.EditEvent} />
            <Route exact path="/Events/details/:id" component={EventDetailedView} />
            <Route exact path="/Mentors" component={Mentors} />
            <Route exact path="/Mentors/add" component={MentorForms.AddMentor} />
            <Route exact path={`/Mentors/edit/:id`} component={MentorForms.EditMentor} />
            <Route exact path="/Networking" component={Networking} />
            <Route exact path="/Networking/add" component={NetworkForms.addNetwork}/>
            <Route exact path="/Networking/details/:id" component={NetworkingItemDetails}/>
            <Route exact path="/Networking/edit/:id" component={NetworkForms.editNetwork}/>
            <Route exact path={`/Networking/company/:id`} component={Company} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
