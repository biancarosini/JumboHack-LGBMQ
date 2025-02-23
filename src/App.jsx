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
        <button onClick={handleClick}>
          {showFormComponent ? 'Hide Form' : 'Show Form'}
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
    deadline: "",
    pnumber: "",
    mess: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Data:", formData);
    hideForm(false); // Hide the form on submit
    onSubmit(); // Change background & show clock
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your goal:</label>
      <input type="text" name="goal" value={formData.goal} onChange={handleChange} required />

      <label>Enter your deadline:</label>
      <input type="time" name="deadline" value={formData.deadline} onChange={handleChange} required />

      <label>Enter a phone #:</label>
      <input type="tel" name="pnumber" value={formData.pnumber} onChange={handleChange} required />

      <label>Enter your message:</label>
      <input type="text" name="mess" value={formData.mess} onChange={handleChange} required />

      <button type="submit">Submit</button>
    </form>
  );
}

// APP COMPONENT 
function App() {
  const [background, setBackground] = useState("Home.jpg");
  const [showCountdownClock, setShowCountdownClock] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);

  function changeBackground() {
    setBackground("Tunnel.jpg"); // Change background on form submission
    setShowCountdownClock(true);
    setShowStartButton(false); // Hide Start Button on submit
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

      {/* Hide StartButton after form submission */}
      {showStartButton && <StartButton onSubmit={changeBackground} hideButton={!showStartButton} />}

      {/* Show CountdownClock after submission */}
      {showCountdownClock && <CountdownClock />}
    </div>
  );
}

export default App;