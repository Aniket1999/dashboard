import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../navbar'
import Footer from '../footer'
import pic from '../../assets/acc.png'
import './dashboard.css'
import { Link } from 'react-router-dom';
import Profile from '../dashboard/profile/profile'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <ul className="ul-dash">
                        <li className="col-md-4 li-dash">
                            <div className="outer-div-dash">
                                <Link to={'/dashboard/profile'} style={{ all: "unset" }}>
                                    <div className="inner-div-dash">
                                        <img src={pic} />
                                        Your Profile
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="col-md-4 li-dash">
                            <div className="outer-div-dash">
                                <div className="inner-div-dash">
                                    <img src={pic} />
                                Payment Settings
                                </div>
                            </div>
                        </li>
                        <li className="col-md-4 li-dash">
                            <div className="outer-div-dash">
                                <div className="inner-div-dash">
                                    <img src={pic} />
                                Latest Orders
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* <div className="outer-div-dash">
                    <div className="inner-div-dash">
                        <img src={pic} />
                    Logout
                    </div>
                </div> */}

                <div style={{ backgroundColor: "#ffc107", bottom: "0", left: "0", right: "0", position: "absolute" }}>
                    <Footer />
                </div>
            </div >
        );
    }
}

export default Dashboard;