import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const {id} = useParams();   
    const [product, setProduct] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        const url = `http://localhost:5000/checkout/${id}`; 
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])


    return (
        <div class="container bg-light">       
            <div className="row text-center justify-content-center mx-5">            
            <h3 class="text-center mt-5">Checkout</h3>          
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Vaccine</th>
                        <th scope="col">Type</th>                        
                        <th scope="col">Price ($)</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.vacType}</td>                        
                        <td>{product.price}</td>                        
                    </tr> 
                </tbody>
            </table>            
            </div>
            <hr/>
            <hr/>
            <div className="row">
                <Payment vaccine={product.name} vacType={product.vacType} price={product.price}/>
            </div>
           
        </div>
    );
};

export default Checkout;