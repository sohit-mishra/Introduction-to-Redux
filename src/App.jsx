import './App.css'
const SET_VALUE = "SET_VALUE";


const formData = (State,action)=>{
  switch(action.type){
    case INCREMENT :{
      return State+1;
    }
    default:{
      return State;
    }
  }
}

const store = legacy_createStore(formData, 0);

function App() {
  
  function handleIncrement() {
    dispatch({ type: INCREMENT });
  }
  
  return (
    <>
      <h1>Redux Assignments</h1>
      <div className="card">
        <button onClick={handleIncrement}>
          count is 
        </button>
  
      </div>

    </>
  )
}

export default App
