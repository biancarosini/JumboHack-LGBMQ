import React, { useState, useEffect } from 'react';

const CountdownClock = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return; // Stop countdown at 0

        const intervalId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime === 0) {
                    clearInterval(intervalId);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [timeLeft]);

    // Rotate clockwise: 0° starts at top, 360° completes a full circle
    const angle = (1 - timeLeft / initialTime) * 360;

    return (
        <div style={{ textAlign: 'left' }}>
            <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                <img
                    src="clock-face-image.png" 
                    alt="Clock Face"
                    style={{
                        width: '200px',
                        height: '200px',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: '50%',
                    }}
                />
                <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <line
                        x1="100"
                        y1="120"
                        x2="100"
                        y2="180"
                        stroke="red"
                        strokeWidth="4"
                        transform={`rotate(${angle}, 100, 120)`}
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <h2>{timeLeft} seconds remaining</h2>
        </div>
    );
};

export default CountdownClock;
