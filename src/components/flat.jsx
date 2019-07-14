import React, { Component} from 'react';
class Flat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const urlBackground = this.props.flat.imageUrl;
        return (
            <div className="card" style={{backgroundImage: `url(${urlBackground}) , linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`}}>
                <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
                <div className="card-description">
                    <h2>{this.props.flat.name}</h2>
                </div>
                <a className="card-link" href="#"></a>
            </div>
        )
    }
}
export default Flat;