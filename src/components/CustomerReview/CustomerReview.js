import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const CustomerReview = () => {      
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        console.log("data", data);
        const { name, designation, description } = data;
        const review = {
            name: name,
            designation: designation,
            description: description            
        };
        console.log("product", review)

        await fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your item saved in database.')
                }
            })
        reset();
    }

 

    return (              
            <div>

                <form onSubmit={handleSubmit(onSubmit)} className="row g-3 p-5 justify-content-center align-items-center">
                    <h3 class="text-dark">Review</h3>             
                    <div class="col-12">
                        <label class="form-label">Your name</label>
                        <input name="name" type="text" placeholder="Enter your name" ref={register} class="form-control" />
                    </div>

                    <div class="col-12">
                        <label class="form-label">Company's name, Designation</label>
                        <input name="designation" type="text" placeholder="Enter your company name and designation" ref={register} class="form-control" />
                    </div>

                    <div class="col-12">
                        <label class="form-label">Description</label>
                        <input name="description" type="text" placeholder="Enter message details" ref={register} class="form-control" />
                    </div>
                    
                    <div class="col-12 mt-4 mb-5">
                        <button type="submit" class="btn btn-danger px-3">Submit</button>
                    </div>
                </form>
            </div>

    );
};
    

export default CustomerReview;