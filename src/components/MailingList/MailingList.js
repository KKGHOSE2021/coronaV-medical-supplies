import React, { useState } from 'react';
import {IconContext} from 'react-icons';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

const MailingList = () => {
    const [subscriber, setSubscriber] = useState({email:""});

    const handleSubmit = (e)=>{          
         fetch(`http://localhost:5000/addSubscriber`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(subscriber)
        });
        e.preventDefault();
    }

    const myReactIcons = {
        marginLeft: "30px"};
     
    return (
        <>
        <div className="col">
            <h3>JOIN OUR MAILING LIST</h3>
            <p className="text-white">You may unsubscribe at any time. For that purpose, please find our contact info in the legal notice</p>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit}> 
                <input type="text" name="email" onBlur={ e => setSubscriber({email: e.target.value})}  placeholder="abc@gmail.com"/>                                
                <input type="submit" value="SUBSCRIBE"/>
                <br/>                       
            </form>
        </div>
        <div className="col d-flex align-items-center justify-content-center">
            <IconContext.Provider value={{size: 40}}>
                <a href="https://www.facebook.com" target="_blank"><FaFacebook style={myReactIcons}/></a>
                <a href="https://www.twitter.com" target="_blank"><FaTwitter style={myReactIcons}/></a>
                <a href="https://www.instagram.com" target="_blank"><FaInstagram style={myReactIcons}/></a>
                <a href="https://www.youtube.com" target="_blank"><FaYoutube style={myReactIcons}/></a>                
            </IconContext.Provider>
        </div>
            
        </>
    );
};

export default MailingList;