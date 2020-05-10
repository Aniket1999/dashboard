import React, { Component } from 'react';
import logo from '../assets/new-logo.png'
import './footer.css'

class footer extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="footer col-md-12">
                        <div className="footer-logo col-md-5">
                            <img src={logo} />
                        </div>
                        <div className="footer-details col-md-7">
                            <ul className="ul-footer">
                                <li className="col-md-3 li-footer">ABOUT</li>
                                <li className="col-md-3 li-footer">ORDERS</li>
                                <li className="col-md-3 li-footer">PRODUCTS</li>
                                <li className="col-md-3 li-footer">CONTACT US</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;