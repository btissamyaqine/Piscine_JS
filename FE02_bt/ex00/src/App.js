import './App.css';

function App() {
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          fetch("http://localhost:3000/")
            .then((response) => console.log(response.json()))
            .then((payload) => {
              console.log(payload)
            });
        }}
      >
        Fetch List
      </button>
    </div>
  );
}

export default App;
