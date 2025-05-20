import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    // Set the initial time to 15 minutes (in seconds)
    const initialTime = 15 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        // Create an interval to decrease the time every second
        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Convert timeLeft to minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className='text-muted text-center border fw-bold p-3 fs-5'>
            Offer ends in <span className='text text-danger'>{minutes}min {seconds < 10 ? `0${seconds}` : seconds}Sec</span>
        </div>
    );
}

export default CountdownTimer;
