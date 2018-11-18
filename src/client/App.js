import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { NotificationContainer } from 'react-notifications';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@material/card/dist/mdc.card.min.css";
import 'react-notifications/lib/notifications.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./components/home/HomePage";

import Internships from "./components/internships/Internships";
import InternshipItemDetails from "./components/internships/Internship-item-details";
import InternshipForms from "./components/internship-form";
import InternshipSearch from "./components/internships/InternshipSearch";

import Events from "./components/events/Events";
import EventsForm from './components/events-form';
import EventDetailedView from "./components/events/EventDetailedView";
import EventSearch from "./components/events/EventSearch";

import Mentors from "./components/mentors/Mentors";
import MentorSearch from "./components/mentors/MentorSearch";
import MentorForms from "./components/mentor-form";
import MentorItemDetails from "./components/mentors/mentor-item-details";

import Networking from "./components/networking/Networking";
import NetworkingItemDetails from "./components/networking/Network-item-details";
import NetworkForms from "./components/networking-form";
import NetworkSearch from "./components/networking/NetworkSearch";

import SearchBar from "./components/search-bar/SearchBar";

import Login from "./components/login";
import Logout from "./components/logout";
import LoginContext, { loadContextValue } from './contexts/login';

class App extends Component {
  render() {
    const contextValue = loadContextValue();
    
    return (
      <div id="app">
        <LoginContext.Provider value={contextValue}>
          <header>
            <Header />
            <NotificationContainer/>
          </header>
          <main>
            <SearchBar />
            <Switch>
              { /* Home Page*/}
              <Route exact path="/" component={Homepage} />
              { /* Internships Page*/}
              <Route exact path="/Internships" component={Internships} />
              <Route exact path="/Internships/add" component={InternshipForms.AddInternship} />
              <Route exact path="/Internships/edit/:id" component={InternshipForms.EditInternship} />
              <Route exact path="/Internships/delete/:id" component={InternshipForms.DeleteInternship}/>
              <Route exact path="/Internships/details/:id" component={InternshipItemDetails}/>
              <Route exact path="/Internships/search" component={InternshipSearch} />
              { /* Events Page*/}
              <Route exact path="/Events" component={Events} />
              <Route exact path="/Events/add" component={EventsForm.AddEvent} />
              <Route exact path="/Events/edit/:id" component={EventsForm.EditEvent} />
              <Route exact path="/Events/details/:id" component={EventDetailedView} />
              <Route exact path="/Events/delete/:id" component={EventsForm.DeleteEvent}/>
              <Route exact path="/Events/search" component={EventSearch} />

              { /* Mentors Page*/}
              <Route exact path="/Mentors" component={Mentors} />
              <Route exact path="/Mentors/add" component={MentorForms.AddMentor} />
              <Route exact path="/Mentors/edit/:id" component={MentorForms.EditMentor} />
              <Route exact path="/Mentors/details/:id" component={MentorItemDetails}/>
              <Route exact path="/Mentors/delete/:id" component={MentorForms.DeleteMentor}/>
              <Route exact path="/Mentors/search" component={MentorSearch} />
              { /* Networking Page*/}
              <Route exact path="/Networking" component={Networking} />
              <Route exact path="/Networking/add" component={NetworkForms.addNetwork}/>
              <Route exact path="/Networking/details/:id" component={NetworkingItemDetails}/>
              <Route exact path="/Networking/edit/:id" component={NetworkForms.editNetwork}/>
              <Route exact path="/Networking/delete/:id" component={NetworkForms.deleteNetwork}/>
              <Route exact path="/Networking/search" component={NetworkSearch} />
              { /* Authentication Routes*/}
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </LoginContext.Provider>
      </div>
    );
  }
}

export default App;
