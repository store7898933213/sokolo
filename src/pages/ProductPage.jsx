// src/pages/ProductPage.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import CountdownTimer from '../components/CountdownTimer'; // Import CountdownTimer
import { data } from '../Data/data.js'; // Import your product data

function ProductPage() {
    const { id } = useParams(); // Get the product id from URL params
    const navigate = useNavigate();

    // Find the product data based on the id
    const product = data.find((card) => card.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div style={{
            backgroundColor: ' rgba(180, 211, 239, 0.342)',
            position: 'relative',
            minHeight: '100vh',
            paddingBottom: '4rem'
        }}>
            <Navbar product={'true'} />

            <div className='container' style={{ backgroundColor: 'white' }}>
                <Slider images={product.sliderImages} />
                <div className='border p-3'>
                    <div className='mb-2 ' style={{ fontSize: '1rem' }}>
                        {product.title} {/* Dynamic product title */}
                    </div>
                    <img src='../fassured.png' alt="F-Assured" />
                    <div className='mt-2 fs-5 fw-bold'>
                        <span className=' text-success'>{product.discount}</span> {/* Dynamic discount */}
                        <span className='text-muted text-decoration-line-through fs-5 mx-2' style={{ opacity: '.6' }}>{product.price}</span>
                        {product.additionalPrice}
                    </div>
                </div>

                {/* Countdown Timer */}
                <CountdownTimer />

                <div className='d-flex border p-4 justify-content-between align-items-center'>
                    <div className='text text-center'>
                        <img src='../replacement.png' alt="Replacement" className='productPage_icons' />
                        <div className='mt-2 productPage_icons_text'>7 days Replacement</div>
                    </div>
                    <div className='text text-center'>
                        <img src='../non-cod.png' alt="No COD" className='productPage_icons' />
                        <div className='mt-2 productPage_icons_text'>No Cash on Delivery</div>
                    </div>
                    <div className='text text-center'>
                        <img src='../fassured.png' alt="F-Assured" className='productPage_icons' />
                        <div className='mt-2 productPage_icons_text'>Plus (F-Assured)</div>
                    </div>
                </div>
            </div>

            <div className='container py-1'>
                <img src='../IMG_0018.jpg' className='w-100' />
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                display: 'flex'
            }}>
                <button style={{
                    width: '50%',
                    backgroundColor: 'aliceblue',
                    color: 'black',
                    border: 'none',
                    padding: '1rem',
                    fontSize: '1.1rem',
                    cursor: 'pointer'
                }} onClick={() => {
                    navigate('/add');
                }}>
                    Add to Cart
                </button>
                <button style={{
                    width: '50%',
                    backgroundColor: '#fdd835',
                    color: 'black',
                    border: 'none',
                    padding: '1rem',
                    fontSize: '1.1rem',
                    cursor: 'pointer'
                }} onClick={() => {
                    navigate('/add', {
                        state: {
                            price: product.price,
                            additionalPrice: product.additionalPrice
                        }
                    }); // Pass both prices to the Address page
                }}>
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default ProductPage;
