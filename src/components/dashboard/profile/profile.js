import React, { Component } from 'react';
import Navbar from '../../navbar'
import Footer from '../../footer'
import './profile.css'
import { Link } from 'react-router-dom';
import leftarrow from '../../../assets/leftarrow.png'

class profile extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar />
                <div className="li-p bread-p">
                    <div>
                        <Link to={'/dashboard'}><img src={leftarrow} style={{ width: "30px" }} /></Link>
                    </div>
                    <div>
                        <Link to={'/dashboard'}>&nbsp;&nbsp;Dashboard </Link>&nbsp;/ Profile
                    </div>
                </div>
                <div className="div-p">
                    <ul className="ul-p">
                        <li className="li-p">
                            <div className="inner-div-p">
                                <div style={{ display: "flex" }}>
                                    <div className="col-md-3">
                                        <h2 className="h2-p">User Details</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="h3-p">Name :</h3>
                                        <p className="p-p">Aniket Sharma</p>
                                        <h3 className="h3-p">Phone Number :</h3>
                                        <p className="p-p">9999999999</p>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-primary" style={{ float: " right" }}>EDIT</button>
                            </div>
                        </li>
                        <li className="li-p">
                            <div className="inner-div-p">
                                <div style={{ display: "flex" }}>
                                    <div className="col-md-3">
                                        <h2 className="h2-p">Tax Details</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="p-p">XXXXXXXXXXXXXXXXXX</p>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" style={{ float: " right" }}>EDIT</button>
                            </div>
                        </li>
                        <li className="li-p">
                            <div className="inner-div-p">
                                <div style={{ display: "flex" }}>
                                    <div className="col-md-3">
                                        <h2 className="h2-p">Bank Details</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="p-p">*Encrypted*</p>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" style={{ float: " right" }}>EDIT</button>
                            </div>
                        </li>
                        <li className="li-p">
                            <div className="inner-div-p">
                                <div style={{ display: "flex" }}>
                                    <div className="col-md-3">
                                        <h2 className="h2-p">Address :</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="h3-p">Line 1 :</h3>
                                        <p className="p-p">........................</p>
                                        <h3 className="h3-p">Line 2 :</h3>
                                        <p className="p-p">........................</p>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary" style={{ float: " right" }}>EDIT</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div style={{ backgroundColor: "#ffc107", bottom: "0", left: "0", right: "0" }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default profile;