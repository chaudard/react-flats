import React, { Component} from 'react';
import Flat from './flat';
class FlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return this.props.flats.map(flat => { return <Flat flat={flat} key={flat.name} selectFlatFunction={this.props.selectFlatFunction} selectedFlat={this.props.selectedFlat}/> })       
    }
}
export default FlatList;