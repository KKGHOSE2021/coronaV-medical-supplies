import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/orderPlacedByEmail?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    }, [])


    return (
        <div class="container mt-5">
            <h3 class="mb-5 text-center">Your have made the following order</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Vaccine</th>
                        <th scope="col">Pay With</th>                        
                        <th scope="col">Status</th>                                                
                    </tr>
                </thead>
                {
                    products.map ( 
                        product =>   
                        <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.vaccine}</td>                            
                            <td>Credit Card</td>
                            <td>Done</td>
                        </tr> 
                    </tbody>               
                        
                    )
                }

            </table>            
        </div>
    );
    
};

export default OrderList;