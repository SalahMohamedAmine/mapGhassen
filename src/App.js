/*import React, { useRef } from "react";
import Demo from "./Demo.js";

const App = () => {
    const innerRef = useRef();

    const getLocation = () => {
        innerRef.current && innerRef.current.getLocation();
    };

    return (
        <article style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line no-console*//*}
            <Demo onError={(error) => console.log(error)} ref={innerRef} />
            <button
                className="pure-button pure-button-primary"
                onClick={getLocation}
                type="button"
            >
                Get location
            </button>
        </article>
    );
};

export default App;*/
import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { geolocated } from 'react-geolocated';

const DEFAULT_LONGITUDE = -123;
const DEFAULT_LATITUDE = 48;

class App extends React.Component {
    state = {
        lat: 17.4,
        lng: 78.4,
        zoom: 7,
        isMapInit: false
    };

    saveMap = map => {
        this.map = map;
        this.setState({
            zoom: map.zoom
        });
    };
    render() {
        const longitude = this.props.coords ? this.props.coords.longitude : DEFAULT_LONGITUDE;
        const latitude = this.props.coords ? this.props.coords.latitude : DEFAULT_LATITUDE;
        const {zoom} = this.state
        return (
            <Map center={[latitude, longitude]} zoom={zoom} ref={this.saveMap}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {console.log("test")}
                {
                    !this.props.coords ?
                        <div className="loading">Loading</div> :
                        <Marker position={[latitude, longitude]}>
                            <Popup>
                                You are here!
                            </Popup>
                        </Marker>
                }
                {/*<Routing from={[57.74, 11.94]} to={[57.6792, 11.949]} />*/}
                {/*{this.state.isMapInit && <RoutingDemo map={this.map} />}*/}
            </Map>
        );
    }


}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true
    },
    userDecisionTimeout: 5000,
    watchPosition: true
})(App);
/*
export default App;*/

