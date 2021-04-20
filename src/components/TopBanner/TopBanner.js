import React from 'react';
import banner from '../Images/virus-protection-equipment-pack.jpg';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <>
            <div className="col banner-left"> 
                <h1 class="text-left">SPECIAL TRAINING FOR PERSONAL HYGIENE</h1>
                <p class="">Personal hygiene training will be provided by expertise to protect yourself from Corona Virus and lead your daily life with minimal risk of getting affected of Covid-19! </p>
                <a href="#" class="btn btn-primary">Get an Appointment</a>   
            </div>
            <div className="col banner-img">
                <img class="img-thumbnail" src={banner} alt="Card image cap"/>
            </div>
            
        </>
 
    );
};

export default TopBanner;