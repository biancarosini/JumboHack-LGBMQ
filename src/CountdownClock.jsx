import React, {useState, useEffect} from 'react';
const CountdownClock = () => {
    const[timeLeft, timeRemaining] = useState(60);

    useEffect(() => {
        const intervalId = setInterval (() => {
        timeRemaining(prevTime => {
            if (prevTime == 0) {
                clearInterval(intervalId)
                return 0;
            }    
            return prevTime -1;
        });
         },1000);
         return () =>  clearInterval(intervalId); // Cleanup on component unmount
        } , []) ;

        const angle = (timeLeft / 60) * 360;

        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '200px', height: '200px' }}>
              {/* Clock Face Image */}
              <img
                src="clock-face-image.png" // Replace with the path to your clock face image
                alt="Clock Face"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: '50%',
                }}
              />
      
              {/* Countdown Hand */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="10"
                  stroke="red"
                  strokeWidth="4"
                  transform={`rotate(${angle}, 100, 100)`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2>{timeLeft} seconds remaining</h2>
          </div>
        )}
export default CountdownClock;;