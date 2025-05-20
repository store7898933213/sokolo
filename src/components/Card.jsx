// src/components/Card.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from '../Data/data.js'; // Import the product data

function Card() {
    const navigate = useNavigate();
    return (
        <div className="cardbg">
            <div className="row g-1"> {/* Use g-1 to reduce the gap between cards */}
                {data.map((card) => (
                    <div className="col-6 mb-1" key={card.id} style={{ cursor: 'pointer' }} onClick={() => { navigate(`/product/${card.id}`) }}>
                        <div className="card border-0" style={{ borderRadius: '0' }}>
                            <div className="position-relative" style={{ height: '200px' }}>
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="img-fluid py-4"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        height: '100%',
                                        width: 'auto',
                                        transform: 'translate(-50%, -50%)',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                            <div className="card-body p-2 px-4">
                                <div
                                    className="card-title"
                                    style={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        maxWidth: '100%',
                                    }}
                                >
                                    {card.title}
                                </div>
                                <span className="text-success">{card.discount}</span>
                                <div className="text-muted text-decoration-line-through" style={{ fontSize: '.7rem' }}>{card.price}</div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="card-price">{card.additionalPrice}</div>
                                    <img src="assured.png" style={{ height: '1.4rem' }} alt="Assured" />
                                </div>
                                <div className="delivery text text-center p-2 text-muted">
                                    Free Delivery in Two Days
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
