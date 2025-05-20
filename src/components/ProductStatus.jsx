import React from 'react'

function ProductStatus() {
    return (
        <div className='d-flex justify-content-center align-items-center gap-4 my-5 ' style={{
            position: 'relative'
        }}>
            <div className='add-line'></div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='addres_circle' style={{
                    backgroundColor: ' rgba(0, 0, 255, 0.832)',
                    color: 'white'
                }}>
                    1
                </div>
                <div>Address</div>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='addres_circle'>
                    2
                </div>
                <div>Order Summary</div>
            </div>

            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='addres_circle'>
                    3
                </div>
                <div>Payment</div>
            </div>
        </div>
    )
}

export default ProductStatus