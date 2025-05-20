import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Slider({ images }) { // Accept images from props

    useEffect(() => {
        const interval = setInterval(() => {
            const carousel = document.querySelector('#carouselExampleIndicators');
            if (carousel && window.jQuery) {
                window.jQuery(carousel).carousel('next');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img
                            className="d-block w-100 img-fluid"
                            style={{ height: '25rem', objectFit: 'contain' }} // Keep the height and objectFit
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
