import React, {useState} from 'react';  // Import React to use JSX
import CountdownClock from './CountdownClock'; 
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
    <form action="" method="get" className="form-rabbit" onSubmit={handleSubmit}>
      
    <div className="form-rabbit">
     <label for="goal">Enter your goal: </label>
     <input type="text" name="goal" id="goal" onChange={handleChange} required />
    </div>
    
   <div className="form-rabbit">
      <label for="deadline">Enter your deadline: </label>
      <input type="time" name="deadline" id="deadline" onChange={handleChange} required />
   </div>
  
   <div className="form-rabbit">
      <label for="number">Enter a phone #: 	</label>
      <input type= "tel" name="pnumber" id="pnumber" onChange={handleChange} required />
   </div>

    <div className="form-rabbit">
     <label for="mess">Enter your message: </label>
     <input type="text" name="mess" id="mess" onChange={handleChange} required />
    </div>
    
    <div className="form-rabbit">
      <input type="submit" value="Submit!" />
    </div>
    </form>
  )
}

function App() {
  return (
    <div style={{backgroundImage: `url("Home.jpg")`, backgroundSize: 'contain', width:'100vw',height:'100vh',backgroundPosition: "center",backgroundRepeat: 'no-repeat'}} >
      <h1>Hello, React!</h1>
      <StartButton/>
      <CountdownClock/>
    </div>
  );
};

export default App; 