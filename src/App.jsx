import React, { useState } from 'react';
import CountdownClock from './CountdownClock';

// HOME PAGE BUTTON 
function StartButton({ onSubmit, hideButton }) { 
  const [showFormComponent, setShowFormComponent] = useState(false);

  function handleClick() {
    setShowFormComponent(!showFormComponent);
  }

  return (
    <div>
      {!hideButton && (
        <button 
        onClick={handleClick} 
        style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}
      >
          <img 
            src="EatMe.png" 
            alt="Click me" 
            style={{ width: "200px", height: "200px" }} 
          />
        </button>
      )}
      {showFormComponent && <FormComponent onSubmit={onSubmit} hideForm={setShowFormComponent} />}
    </div>
  );
}

// GOAL BUTTON (Rose Button)
function RoseButton({ onClick, hideButton }) { 
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    if (onClick) onClick(); // Trigger background change in App
  }

  return (
    <div>
      {!hideButton && (
        <button 
          onClick={handleClick} 
          style={{ border: "none", background: "none", padding: 0, cursor: "pointer" }}
        >
          <img 
            src={isClicked ? "RoseRed.png" : "RoseWhite.png"} // Toggle images
            style={{ width: "250px", height: "250px" }} 
            alt="Rose Button"
          />
        </button>
      )}
    </div>
  );
}

// FORM COMPONENT 
function FormComponent({ onSubmit, hideForm }) {
  const [formData, setFormData] = useState({
    goal: "",
    time: "",
    pnumber: "",
    mess: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Data:", formData);

    const timeInSeconds = parseInt(formData.time, 10) * 60;

    hideForm(false); // Hide the form on submit
    onSubmit(timeInSeconds, formData.mess, formData.pnumber); // Pass data to App
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Enter your goal:</label>
        <input type="text" name="goal" value={formData.goal} onChange={handleChange} required />
      </div>

      <div>
        <label>Enter time limit **minutes:</label>
        <input type="number" name="time" value={formData.time} onChange={handleChange} required />
      </div>

      <div>
        <label>Enter a phone #:</label>
        <input type="tel" name="pnumber" value={formData.pnumber} onChange={handleChange} required />
      </div>

      <div>
        <label>Enter your message:</label>
        <input type="text" name="mess" value={formData.mess} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

// MAIN APP COMPONENT
function App() {
  const [background, setBackground] = useState("Home.jpg");
  const [showCountdownClock, setShowCountdownClock] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [countdownTime, setCountdownTime] = useState(60); // Default to 60 seconds
  const [showRoseButton, setShowRoseButton] = useState(false);
  const [showElements, setShowElements] = useState(true); // Controls visibility of all elements
  const [message, setMessage] = useState(""); // Store message but don't display it yet
  const [recipient, setRecipient] = useState(""); // Store recipient but don't display it yet

  function changeBackground(timeInSeconds, mess, pnumber) {
    setBackground("Tunnel.jpg"); // Change background on form submission
    setShowCountdownClock(true);
    setShowStartButton(false); // Hide Start Button on submit
    setCountdownTime(timeInSeconds); // Set countdown time
    setShowRoseButton(true); // Show Rose Button on submit

    // Store message details but don't display them yet
    setMessage(mess);
    setRecipient(pnumber);
  }

  function handleRoseClick() {
    setBackground("teaParty.png"); // Change background when rose is clicked
    setShowElements(false); // Hide all elements
  }

  function handleCountdownEnd() {
    if (showRoseButton) { // If Rose Button was shown but never clicked
      setBackground("beheading.png");
      setShowElements(false); // Hide all elements
    }
  }

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'contain',
      width: '100vw',
      height: '100vh',
      backgroundPosition: "center",
      backgroundRepeat: 'no-repeat'
    }}>
      {showElements && (
        <>
          <h1 style={{ color: "black" }}>GOaling Down the Rabbit Hole!</h1>


          {showStartButton && <StartButton onSubmit={changeBackground} hideButton={!showStartButton} />}
          {showCountdownClock && <CountdownClock initialTime={countdownTime} onTimerEnd={handleCountdownEnd} />}
          {showRoseButton && <RoseButton onClick={handleRoseClick} hideButton={!showRoseButton} />}
        </>
      )}

      {/* SHOW MESSAGE ONLY WHEN beheading.png IS ACTIVE */}
      {background === "beheading.png" && (
        <h2>{message} is being sent to {recipient}</h2>
      )}
    </div>
  );
}

export default App;
