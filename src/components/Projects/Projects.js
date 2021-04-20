import React from 'react';
import projectImg from '../Images/face-shield.jpg';
import './Projects.css'

const Projects = () => {
    return (
        <div className="row py-5">
            <div className="col project-img mr-5">
                <img class="img-thumbnail" src={projectImg} alt="Card image cap"/>
            </div>
            <div className="col project-right"> 
                <h1 class="text-left">Stay <span className="text-danger">Healthy</span> Stay <span className="text-success">Safe</span></h1>
                <p class="">COVID-19 spreads mainly from person to person through respiratory droplets. Respiratory droplets travel into the air when you cough, sneeze, talk, shout, or sing. These droplets can then land in the mouths or noses of people who are near you or they may breathe these droplets in. </p>
                 
            </div>
            
        </div>
    );
};

export default Projects;