import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    position: 'absolute',
  width: '100%',
  height: '80vh'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };
      onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

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
      const coordsData = eventsData.map(item=>{
        return {lat :item.event_geo_lat, lng :item.event_geo_lng}
      } );
      console.log("filteredData", coordsData);
    return (
    <Map google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={7.1} initialCenter={{ lat: 56.4884, lng: 10.5233 }}>

        {coordsData.map(coord=>  
                                <Marker key={Math.random()} onClick={this.onMarkerClick}
                                title={'The marker`s title will appear as a tooltip.'}
                                name={'SOMA'}
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
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAlQuaJL2EB4PgZiyDah8Uj6bMfOcFMFb4'
})(MapContainer);