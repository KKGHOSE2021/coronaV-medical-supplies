import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faPlus, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import OrderList from '../OrderList/OrderList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Admin = () => {
    const [showResults, setShowResults] = useState("first")
  
    return (
        <div className="container">
            <div className="row">
                <div id="list-example" class="col-3 bg-info p-3 list-group">
                <a onClick={()=>setShowResults("first")}class="list-group-item bg-info list-group-item-action text-white" href="#list-item-2"><FontAwesomeIcon icon={faListAlt} /> Order list</a>
                    <a onClick={()=>setShowResults("second")} class="list-group-item bg-info list-group-item-action text-white" href="#list-item-1"><FontAwesomeIcon icon={faPlus} /> Add Item</a>
                    <a onClick={()=>setShowResults("third")}class="list-group-item bg-info list-group-item-action text-white" href="#list-item-2"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</a>
                    <a onClick={()=>setShowResults("fourth")} class="list-group-item bg-info list-group-item-action text-white" href="#list-item-1"><FontAwesomeIcon icon={faTasks} /> Manage Item</a>
                </div>

                <div className="col-9 bg-light">                    
                    { showResults === "first" && <OrderList/> }
                    { showResults === "second" && <AddProduct/> }
                    { showResults === "third" && <MakeAdmin/> }
                    { showResults === "fourth" && <ManageProduct/> }
                </div>
            </div>
        </div>

    );
};

export default Admin;