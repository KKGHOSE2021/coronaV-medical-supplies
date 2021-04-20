import React from 'react';
import './Product.css';
import {useHistory} from 'react-router-dom';

const Product = (props) => {
    const {_id, name, vacType, price, imageUrl } = props.product;        
    const history = useHistory();
    const handleBuy = (id) =>{               
        history.push(`/checkout/${id}`);
    }
    
    return (
        <div className="col">
            <div class="card col-size img-size">
                <img src={imageUrl} class="card-img-top img-thumbnail rounded" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{name}</h5>
                        <p class="card-text text-info font-weight-bold">{vacType}</p>
                        <div className="d-flex justify-content-between"> 
                        <h5 class="card-title text-danger font-weight-bold">${price}</h5>
                        <button onClick={()=>handleBuy(_id)} class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Product;