import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 26.264500,
            lng: 82.072800
          }
        }
      >
           <Marker
          onClick={this.onMarkerClick}
          name={'Athlete Club'}
        />
        
    </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDV8IYgt-U8bhc-c0M60cRiH0KLNgK3exI'
})(MapContainer);

