import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://rocky-oasis-87872.herokuapp.com/orderPlacedByEmail?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }, [])


    return (
        <div class="container mt-5">
            <h3 class="mb-5 text-center">Your have made the following order</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Vaccine</th>
                        <th scope="col">Type</th>                        
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>                        
                    </tr>
                </thead>
                {
                    products.map ( 
                        product =>   
                        <tbody>
                        <tr>
                            <td>{product.vaccine}</td>
                            <td>{product.vacType}</td>                            
                            <td>${product.price}</td>
                            <td>{new Date(product.orderTime).toString()}</td>
                        </tr> 
                    </tbody>               
                        
                    )
                }

            </table>            
        </div>
    );
    
};

export default Order;