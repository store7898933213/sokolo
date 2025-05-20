import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is included
import ProductStatus from '../components/ProductStatus';
import { useNavigate, useLocation } from 'react-router-dom';

const Address = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { price, additionalPrice } = location.state || {}; // Retrieve price and additional price

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        pin: '',
        city: '',
        state: '',
        flat: '',
        area: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form data
        console.log('Form Data Submitted:', formData);
        navigate('/payment', { state: { price, additionalPrice } }); // Pass prices to Payment page
    };

    return (
        <div className="address-form-container p-4 mb-5" style={{ paddingBottom: '70px' }}>
            <div className="header-container mb-3">
                <div className="row align-items-center">
                    <div className="col-1">
                        <button
                            className="btn btn-link p-0"
                            id="back_btn"
                            onClick={() => navigate(-1)} // Navigate back to the previous page
                        >
                            <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="col-10">
                        <h4 className="mb-0">Add Delivery Address</h4>
                    </div>
                </div>
            </div>

            <ProductStatus />
            <div className='d-flex justify-content-center my-3'>
                <img src='../discount.png' style={{
                    height: '6rem'
                }} />
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full Name (Required)*"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="name">Full Name (Required)*</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="text"
                            id="number"
                            name="number"
                            placeholder="Mobile number (Required)*"
                            value={formData.number}
                            onChange={handleChange}
                        />
                        <label htmlFor="number">Mobile Number (Required)*</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="text"
                            id="pin"
                            name="pin"
                            placeholder="PIN code (Required)*"
                            value={formData.pin}
                            onChange={handleChange}
                        />
                        <label htmlFor="pin">PIN Code (Required)*</label>
                    </div>

                    <div className="row g-2 mb-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    className="form-control"
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="City (Required)*"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                <label htmlFor="city">City (Required)*</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select
                                    className="form-select"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select State</option>
                                    <option value="AP">Andhra Pradesh</option>
                                    <option value="AR">Arunachal Pradesh</option>
                                    <option value="AS">Assam</option>
                                    <option value="BR">Bihar</option>
                                    <option value="CG">Chhattisgarh</option>
                                    <option value="DL">Delhi</option>
                                    <option value="GA">Goa</option>
                                    <option value="GJ">Gujarat</option>
                                    <option value="HR">Haryana</option>
                                    <option value="HP">Himachal Pradesh</option>
                                    <option value="JK">Jammu and Kashmir</option>
                                    <option value="JH">Jharkhand</option>
                                    <option value="KA">Karnataka</option>
                                    <option value="KL">Kerala</option>
                                    <option value="MP">Madhya Pradesh</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="MN">Manipur</option>
                                    <option value="ML">Meghalaya</option>
                                    <option value="MZ">Mizoram</option>
                                    <option value="NL">Nagaland</option>
                                    <option value="OD">Odisha</option>
                                    <option value="PB">Punjab</option>
                                    <option value="RJ">Rajasthan</option>
                                    <option value="SK">Sikkim</option>
                                    <option value="TN">Tamil Nadu</option>
                                    <option value="TG">Telangana</option>
                                    <option value="TR">Tripura</option>
                                    <option value="UP">Uttar Pradesh</option>
                                    <option value="UK">Uttarakhand</option>
                                    <option value="WB">West Bengal</option>
                                    <option value="AN">Andaman and Nicobar Islands</option>
                                    <option value="CH">Chandigarh</option>
                                    <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value="LD">Lakshadweep</option>
                                    <option value="PY">Puducherry</option>
                                    <option value="TG">Telangana</option>
                                    <option value="TN">Tamil Nadu</option>

                                </select>
                                <label htmlFor="state">State (Required)*</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="text"
                            id="flat"
                            name="flat"
                            placeholder="House No., Building Name (Required)*"
                            value={formData.flat}
                            onChange={handleChange}
                        />
                        <label htmlFor="flat">House No., Building Name (Required)*</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            type="text"
                            id="area"
                            name="area"
                            placeholder="Road name, Area, Colony (Required)*"
                            value={formData.area}
                            onChange={handleChange}
                        />
                        <label htmlFor="area">Road Name, Area, Colony (Required)*</label>
                    </div>

                    <button className="btn mx-3" style={{
                        position: 'fixed',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        backgroundColor: 'rgb(251, 100, 27)',
                        height: '60px',
                        border: 'none',
                        color: 'white',
                        fontSize: '1.2rem',
                        zIndex: '100'
                    }} type="submit"> {/* Changed to type="submit" for form submission */}
                        Save Address
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Address;
