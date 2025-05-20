import React from 'react'

function OrderSummary() {
    return (
        <div className='px-3  '>
            <div className='d-flex gap-4 fs-4 my-3'>
                <div style={{ cursor: 'pointer' }}>
                    <i class="bi bi-arrow-left"></i>
                </div>
                <div>
                    Order Summary
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <img src='../order.png' className='mx-auto' style={{
                    height: '4rem'
                }} />
            </div>
            <div className='mb-4'>
                <div className='fs-4'>
                    Delivered To:
                    <div className='fs-5'>Deepak</div>
                    <div style={{ fontSize: '.9rem' }}>72b, AnandNagar Bhopal, Andhra Pradesh 463559</div>
                    <div style={{ fontSize: '.9rem' }}>84757463559</div>
                </div>

                <div className='d-flex  my-4 gap-3'>
                    <div>
                        <img src='https://stvoffers.shop/admin/uploads/product/product-14-05-2024-1715661250-1000093684.webp'
                            style={{ height: '5rem', width: '5rem' }}
                        />
                        <div className='mx-3 fs-5'>QTY:1</div>
                    </div>
                    <div>
                        <div className='fs-5'>boAt AVANTE Bluetooth Soundbar</div>
                        <img src='../assured.png' style={{ height: '1.5rem', marginBottom: '1.5rem' }} />
                        <div className='fs-5'><span className='text text-success '>80% off </span> ₹499</div>
                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <div className='fs-4'>Price Details</div>
                <div className='d-flex justify-content-between mt-4' style={{
                    fontSize: '1.1rem'
                }} >
                    <div className='d-flex flex-column gap-3'>
                        <div>Price (1 item)</div>
                        <div>Discount</div>
                        <div>Delivery charges</div>
                        <div>Total Amount</div>
                        <div className='text-success'>You will save ₹11990 on this order</div>
                    </div>
                    <div className='d-flex flex-column text-end gap-3'>
                        <div>₹12499</div>
                        <div className='text-success'>-₹12499</div>
                        <div className='text-success'>FREE DELIVERY</div>
                        <div>₹599</div>
                    </div>
                </div>
            </div>

            <div className='my-3 d-flex justify-content-center align-items-center gap-2 p-3' style={{ backgroundColor: 'rgb(241, 243, 246)' }}>
                <img src='../safePay.png' style={{ height: '3rem' }} />
                <div style={{ color: 'rgb(113, 116, 120)', fontWeight: '600', width: '230px', fontSize: '12px' }}>
                    Safe and secure payments. Easy returns. 100% Authentic product
                </div>
            </div>

            {/* Bottom fixed section */}
            <div className='d-flex justify-content-between align-items-center px-3 py-2'
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    backgroundColor: '#fff',
                    boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000
                }}>
                <div className='d-flex flex-column'>
                    <div style={{ textDecoration: 'line-through', color: 'grey' }}>₹12499</div>
                    <div style={{ color: '#fb641b', fontWeight: 'bold' }}>₹599</div>
                </div>
                <button className='btn btn-warning mx-4 px-4' style={{ backgroundColor: '#ffc107' }}>
                    Continue
                </button>
            </div>
        </div>
    )
}

export default OrderSummary;
