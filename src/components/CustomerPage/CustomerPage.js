import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentAlt, faTasks } from '@fortawesome/free-solid-svg-icons';
import Checkout from '../Checkout/Checkout.js';
import CustomerReview from '../CustomerReview/CustomerReview';
import Order from '../Order/Order';

const CustomerPage = () => {
    const [sidebar, setSidebar] = useState("first");
    
    return (
        <div className="container">
            <div className="row">
                <div id="list-example" class="col-3 bg-info p-3 list-group">
                    <a onClick={()=>setSidebar("first")}class="list-group-item bg-info list-group-item-action text-white" href="#list-item-1"><FontAwesomeIcon icon={faShoppingCart} /> Book</a>
                    <a onClick={()=>setSidebar("second")} class="list-group-item bg-info list-group-item-action text-white" href="#list-item-2"><FontAwesomeIcon icon={faTasks} /> Booking List</a>
                    <a onClick={()=>setSidebar("third")}class="list-group-item bg-info list-group-item-action text-white" href="#list-item-3"><FontAwesomeIcon icon={faCommentAlt} /> Review</a>                    
                </div>

                <div className="col-9 bg-light">                    
                    { sidebar === "first" && <Checkout/> }
                    { sidebar === "second" && <Order/>  }
                    { sidebar === "third" && <CustomerReview/> }
                </div>
            </div>
        </div>

    );
};

export default CustomerPage;