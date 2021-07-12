import React from 'react';
import '../styles/components/Header.scss';
import { Link } from "react-router-dom";
import banner from '../images/banner.png';

const header = () => {
    return (
        <div className="container-header">
            <div className="container-ed">
                <img className="imgBanner-ed" src={banner} alt="" />
                <h1 className="title-ed">Ed ManaGer</h1>
                <p className="pagraph-ed">The best manager for solve problems soccer</p>
            </div>
            <div className="ed-buttons">
                <Link to="/manager">
                    <button className="btn btn-signin">Sign in</button>
                </Link>
                <button className="btn btn-login">Login</button>
            </div>
        </div>
    );
};

export default header;