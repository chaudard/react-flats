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
        return (
            <div>
                <div className="flat-list">
                    <FlatList flats={flats} selectFlatFunction={this.selectFlat} selectedFlat={this.state.selectedFlat}/>
                </div>
                <div className="map-container">
                    <SimpleMap />
                </div>
            </div>
        )
    }
}
export default App;