import React, {useState} from 'react';  // Import React to use JSX
function DynamicBackground() {
  const [background, setBackground] = useState('Home.jpg');

  const changeBackground = () => {
    setBackground(background === 'Home.jpg');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        cursor: 'pointer',
      }}
      onClick={changeBackground}
    >
      <button onClick={changeBackground}>Change Background</button>
    </div>
  );
}

function StartButton() {
  const [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm(!showForm);
  }
  return (
    <div> 
    <button onClick={handleClick}>
    {showForm ? 'Hide Form': 'Show Form'}
    </button>
    {showForm && <Form />} {/* Conditionally render the form */}
    </div>
  );
}
function Form(){
  return(
    <form action="" method="get" className="form-rabbit">
      
    <div className="form-rabbit">
     <label for="goal">Enter your goal: </label>
     <input type="text" name="goal" id="goal" required />
    </div>
    
   <div className="form-rabbit">
      <label for="deadline">Enter your deadline: </label>
      <input type="time" name="deadline" id="deadline" required />
   </div>
  
   <div className="form-rabbit">
      <label for="number">Enter a phone #: 	</label>
      <input type= "tel" name="pnumber" id="pnumber" required />
   </div>

    <div className="form-rabbit">
     <label for="mess">Enter your message: </label>
     <input type="text" name="mess" id="mess" required />
    </div>
    
    <div className="form-rabbit">
      <input type="submit" value="Submit!" />
    </div>
    </form>
  )
}

function App() {
  return (
    <div>
      <DynamicBackground/>
      <h1>Hello, React!</h1>
      <StartButton/>
    </div>
  );
}

export default App; 