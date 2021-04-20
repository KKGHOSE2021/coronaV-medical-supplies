import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';
import TopBanner from '../TopBanner/TopBanner';
import Projects from '../Projects/Projects';
import ShowReview from '../ShowReview/ShowReview';
import Footer from '../Footer/Footer';
import MailingList from '../MailingList/MailingList';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);  

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [products]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews]);



    return (
        <div className="container bg-light rounded">
            <div className="row top-banner-bg p-5 mb-5"><TopBanner /> </div>
            <div className="row justify-content-center p-3 mb-3"> 
                <h3 class="font-weight-bold"><span className="text-success">Our Vaccination</span> <span class="text-danger mx-0">Services</span></h3> 
            </div>
            <div className="row d-flex justify-content-around services-bg p-5 mb-5">                
                {products.length === 0 && <CircularProgress color="primary" alignItems="center" justifyContent="center"/>}                
                {products.map(product => <Product product={product}/>)}                
            </div>
            <div className="row projects-bg px-5 mb-5"><Projects /> </div>
            <div className="row justify-content-center"> 
                <h3 class="font-weight-bold text-success mb-4">Featured Reviews</h3> 
            </div>            
            <div className="row testimonial-bg p-5 mb-5"> 
                {reviews.map(review => <ShowReview review={review}/>)}                
            </div>
            <div className="d-flex row mailing-list-bg text-white p-5 mb-5"><MailingList /></div>
            <div className="d-flex row bg-info text-white p-5 mb-5"><Footer /></div>
        </div>
    );
};

export default Home;