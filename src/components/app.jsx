import React, { Component } from 'react';
import SimpleMap from './simple_map';
import flats from '../../assets/data/flats.js';
import FlatList from './flat-list';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFlat: null
        };
    }
    selectFlat = (flat) => {
        this.setState({selectedFlat: flat});
    }
    render() {
        let lat = 48.875627333;
        let lng = 2.3441685;
        if (this.state.selectedFlat) {
            lat = this.state.selectedFlat.lat;
            lng = this.state.selectedFlat.lng;
        }
        return (
            <div>
                <div className="flat-list">
                    <FlatList flats={flats} selectFlatFunction={this.selectFlat} selectedFlat={this.state.selectedFlat}/>
                </div>
                <div className="map-container">
                    <SimpleMap lat={lat} lng={lng}/>
                </div>
            </div>
        )
    }
}
export default App;