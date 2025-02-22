import React from 'react';  // Import React to use JSX
function StartButton() {
  coonst [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm(!showForm);
  }
<Form/>
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
    <form action="" method="get" class="form-rabbit">
      
    <div class="form-rabbit">
     <label for="goal">Enter your goal: </label>
     <input type="text" name="goal" id="goal" required />
    </div>
    
   <div class="form-rabbit">
      <label for="deadline">Enter your deadline: </label>
      <input type="time" name="deadline" id="deadline" required />
   </div>
  
   <div class="form-rabbit">
      <label for="number">Enter a phone #: 	</label>
      <input type= "tel" name="pnumber" id="pnumber" required />
   </div>

    <div class="form-rabbit">
     <label for="mess">Enter your message: </label>
     <input type="text" name="mess" id="mess" required />
    </div>
    
    <div class="form-rabbit">
      <input type="submit" value="Submit!" />
    </div>
    </form>
  )
}

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App; 