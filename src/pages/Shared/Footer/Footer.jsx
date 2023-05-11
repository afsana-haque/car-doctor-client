import React from 'react';
import logo from "../../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-900 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p className='text-white'>Edwin Diaz is a software and web<br/> technologies engineer, a life coach<br/> trainer who is also a serial .</p>
            </div>
            <div className='text-white'>
                <span className="footer-title">About</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div className='text-white'>
                <span className="footer-title">Company</span>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
            </div>
            <div className='text-white'>
                <span className="footer-title">Support</span>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </div>
        </footer>
    );
};

export default Footer;
