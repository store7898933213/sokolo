import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/Navbar';

function Home() {
    const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

    // Array of images for the slider
    const images = [
        { id: 1, src: "./slide1.jpg", alt: "Slide 1" },
        { id: 2, src: "./slide3.jpg", alt: "Slide 2" },
        { id: 3, src: "./slide2.jpg", alt: "Slide 3" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Convert timeLeft (seconds) to minutes and seconds format
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <>
            {/* Navbar */}
            <NavBar />

            <div>
                <img src={'cate.png'} className='w-100' alt="Category Banner" />
            </div>

            {/* Dynamic Image Auto Slider with Circular Dots (Carousel) */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"  >
                <div className="carousel-indicators">
                    {images.map((image, index) => (
                        <button
                            key={image.id}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={image.src} className="d-block w-100" alt={image.alt} />
                        </div>
                    ))}
                </div>

            </div>

            {/* Deal Section */}
            <div className="container mt-3 ">
                <div className="row">
                    {/* Left Side - Deals of the Day */}
                    <div className="col text-center" style={{ color: 'blue' }}>
                        <div className="fs-5">Deals of the Day</div>
                        <div>
                            <i className="bi bi-stopwatch"></i> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        </div>
                    </div>

                    {/* Right Side - Sale is Live */}
                    <div className="col text-center py-3" style={{ color: 'red' }}>
                        <div className="p-3">
                            <strong>SALE IS LIVE</strong>
                        </div>
                    </div>
                </div>
            </div>

            <Card />
        </>
    );
}

export default Home;
