import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import EventsCard from "./EventsCard.js";

const mapStyles = {
    position: 'absolute',
    width: '100%',
    height: '80vh'
};

export class MapContainer extends Component {

  state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {} ,         //Shows the infoWindow to the selected place upon a marker
        activeEvent: ""
      };
  onMarkerClick = (props, marker, e) =>
      {
        console.log(props.id);
        document.getElementById(`class${props.id}`).scrollIntoView();
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true,
          activeEvent : props.id
        })};
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
      const eventsData = this.props.events;
      console.log("events data : ", eventsData);
      const coordsData = eventsData.map(item=>{
        return {lat :item.event_geo_lat, lng :item.event_geo_lng, eventName : item.event_name}
      } );
      
      console.log("filteredData", coordsData);
    return (
        <div className="row">
          <div className="col-md-6 col-sm-12"> {/* Events List view container */}
              <div className="list-group">
                    {eventsData.map(item =>  (
                      <EventsCard key={item.id} event={item} activeEvent={this.state.activeEvent}/>
                    ))
                  }
              </div>
          </div>
          <div className="col-md-6 col-sm-12"> {/* Google map view container*/}
            <Map google={this.props.google}
                style={{width: '100%', height: '100%', position: 'relative'}}
                className={'map'}
                zoom={7.1} initialCenter={{ lat: 56.4884, lng: 10.5233 }}>

              {coordsData.map(coord=>  
                                      <Marker key={coordsData.indexOf(coord)} id={coordsData.indexOf(coord)+1} onClick={this.onMarkerClick}
                                      title={'The marker`s title will appear as a tooltip.'}
                                      name={coord.eventName}
                                      position={coord} /> 
                              )
              }
              <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                  >
                  <div>
                      <h4>{this.state.selectedPlace.name}</h4>
                  </div>
              </InfoWindow>
            </Map>
          </div>
      </div>

      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAlQuaJL2EB4PgZiyDah8Uj6bMfOcFMFb4'
})(MapContainer);