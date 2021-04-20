import React, { useState } from 'react';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({email:""});

    const handleSubmit = (e)=>{ 
         console.log(admin);
         fetch(`https://rocky-oasis-87872.herokuapp.com/addAdmin`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        });
        e.preventDefault();
    }


    return (
        <div className="py-5">
            <h3 className="text-center mb-5">Make Admin</h3>
            <form onSubmit={handleSubmit}>                
                <label>Email</label>
                <input type="text" name="email" onBlur={ e => setAdmin({email: e.target.value})}  placeholder="abc@gmail.com"/>                                
                <input type="submit" value="Submit"/>
                <br/>                       
            </form>
        </div>
    );
};

export default MakeAdmin;