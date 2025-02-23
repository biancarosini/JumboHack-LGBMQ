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
          {showFormComponent}
          <img 
    src="EatMe.png" 
    alt="Click me" 
    style={{ width: "100px", height: "100px" }} 
  />

        </button>
      )}
      {showFormComponent && <FormComponent onSubmit={onSubmit} hideForm={setShowFormComponent} />}
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

    // Convert time (minutes) to seconds
    const timeInSeconds = parseInt(formData.time, 10) * 60;
    
    hideForm(false); // Hide the form on submit
    onSubmit(timeInSeconds); // Pass time to App
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


function App() {
  const [background, setBackground] = useState("Home.jpg");
  const [showCountdownClock, setShowCountdownClock] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);
  const [countdownTime, setCountdownTime] = useState(60); // Default to 60 seconds

  function changeBackground(timeInSeconds) {
    setBackground("Tunnel.jpg"); // Change background on form submission
    setShowCountdownClock(true);
    setShowStartButton(false); // Hide Start Button on submit
    setCountdownTime(timeInSeconds); // Set countdown time
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
      <h1>PROJECT TITLE!</h1>

      {showStartButton && <StartButton onSubmit={changeBackground} hideButton={!showStartButton} />}

      {showCountdownClock && <CountdownClock initialTime={countdownTime} />}
    </div>
  );
}


export default App;