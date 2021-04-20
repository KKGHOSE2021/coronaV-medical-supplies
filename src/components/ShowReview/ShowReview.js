import React from 'react';

const ShowReview = (props) => {
    const {name, designation,  description} = props.review; 
    return (
        <div className="col-4 mb-2">
            <div class="card col-size">
                {/* <img src={imageUrl} class="card-img-top img-thumbnail rounded" alt="..."/> */}
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{name}</h5>
                        <p class="card-text text-info font-weight-bold">{designation}</p>
                        <div className="d-flex justify-content-between"> 
                        <p class="card-title text-dark text-justify">{description}</p>                        
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default ShowReview;