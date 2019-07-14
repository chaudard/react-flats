import React, { Component} from 'react';
import Flat from './flat';
class FlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return this.props.flats.map(flat => { return <Flat key={flat.name}/> })       
    }
}
export default FlatList;