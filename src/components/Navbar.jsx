import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ product }) {

    const navigate = useNavigate()


    return (
        <div className='p-2' style={{
            backgroundColor: '#0d6efd'
        }}>
            {/* Main container with d-flex and align-items-center for vertical alignment */}
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    {/* Conditional rendering for the back arrow icon */}
                    {!product ? (
                        <img src={'./image.png'} className='mx-2' alt='Logo' style={{ cursor: 'pointer' }} />
                    ) : (
                        <i className="bi bi-arrow-left" style={{
                            color: 'white',
                            fontSize: "1.7rem",
                            fontWeight: 'bold',
                            marginRight: '1.5rem',
                            marginLeft: '.5rem',
                            cursor: 'pointer'
                        }} onClick={() => { navigate('/') }} ></i>
                    )}
                    {/* Second logo image */}
                    <img src={'../image2.png'} style={{
                        height: '2rem',
                        cursor: 'pointer'
                    }} alt='Logo 2' />
                </div>

                {/* Search and cart icons container */}
                <div className='d-flex align-items-center justify-content-center'>

                    {/* <i className="bi bi-search" ></i> */}
                    <i className="bi bi-phone" style={{
                        color: 'aliceblue',
                        fontSize: '1.3rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }} ></i>
                    <i className="bi bi-person-circle " style={{
                        color: 'aliceblue',
                        fontSize: '1.3rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }}></i>
                    <i className="bi bi-cart4" style={{
                        color: 'aliceblue',
                        fontSize: '1.4rem',
                        marginRight: '1rem',
                        cursor: 'pointer'
                    }}></i>
                </div>
            </div>

            {/* Conditional rendering for the search input */}
            {!product ? (
                <div className='p-2'>
                    <input type='text' className='w-100 py-2 px-4 mt-3 border' style={{
                        borderRadius: '.2rem',
                        outline: 'none'
                    }} placeholder='Search for Products, Brands and More' />
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default Navbar;
