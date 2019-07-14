import React, { Component} from 'react';
class Flat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick = () => {
        this.props.selectFlatFunction(this.props.flat);
    }
    flatClasses() {
        let result = "card";
        if (this.props.flat == this.props.selectedFlat) {
            result += " card-selected";
        }
        return result;
    }
    render() {
        const urlBackground = this.props.flat.imageUrl;
        return (
            <div className={this.flatClasses()} style={{backgroundImage: `url(${urlBackground}) , linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`}} onClick={this.handleClick}>                
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