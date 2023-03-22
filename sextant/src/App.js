import './App.css';
import Card from './components/Card/Card';
import {user_data} from './components/data.js';

function Banner(props) {
  return (
    <header className="Banner">
        <h1>Welcome to Sextant!</h1>
    </header>
  );
}

function CardField(props) {
  return (
    <div className="wrapper">
      {user_data.map(data =>
        <Card
          key = {data.title}
          title = {data.title}
          IP_URL= {data.url}
        />
      )}
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
