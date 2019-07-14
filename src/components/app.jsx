import React, { Component } from 'react';
import SimpleMap from './simple_map';
import Flat from './flat';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className="flat-list">
                    <Flat />
                </div>
                <div className="map-container">
                    <SimpleMap />
                </div>
            </div>
        )
    }
}
export default App;