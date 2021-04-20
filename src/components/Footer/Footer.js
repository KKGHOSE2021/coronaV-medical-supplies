import React from 'react';
import {GoLocation} from 'react-icons/go';

const Footer = () => {
    return (
        <>
            <div className="col">
                <p className="text-white font-weight-bold"><GoLocation/> Address</p>
                <small>CoronaV Medical Supplies Inc. 9870 St Vincent Place, Glasgow, DC 45</small>
            </div>
            <div className="col">
                <p className="text-white font-weight-bold">Company</p>
                <li>About</li>
                <li>Project</li>
                <li>Our Team</li>
                <li>Our Top Services</li>
            </div>
            <div className="col">
                <p className="text-white font-weight-bold">Quick Links</p>
                <li>Products</li>
                <li>Sales</li>
                <li>Discount Offers</li>
                <li>Contact</li>
            </div>
            <div className="col">
                <p className="text-white font-weight-bold">About us</p>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugit totam culpa perspiciatis inventore incidunt explicabo, alias praesentium, velit facere amet magni consectetur consequatur reprehenderit exercitationem distinctio esse, laborum nobis.</small>    
            </div>    
        </>
    );
};

export default Footer;