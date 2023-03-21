import './App.css';

function Banner(props) {
  return (
    <div className="Banner">
      <header>
        <h1>Welcome to Sextant!</h1>
      </header>
    </div>
  );
}

function CardField(props) {
  return (
    <div className="CardField">
      <p>Insert cards here</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Banner />
      <CardField />
    </div>
  );
}

export default App;
