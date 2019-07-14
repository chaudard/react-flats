import React, { Component} from 'react';
class Flat extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const urlBackground = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg";
        return (
            <div className="card" style={{backgroundImage: `url(${urlBackground}) , linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`}}>
                <div className="card-category">150 EUR</div>
                <div className="card-description">
                    <h2>Super 60m2 in trendy neighborhood!</h2>
                </div>
                <a className="card-link" href="#"></a>
            </div>
        )
    }
}
export default Flat;