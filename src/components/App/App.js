import './App.css';
import CardDashboard from '../CardDashboard/CardDashboard';
import BlockNav from '../BlockNav/BlockNav';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';

function App() {
  return (
    <div className="App">
      <LineGraphDefault/>
      <BlockNav/>
      <CardDashboard/>

    </div>
  );
}

export default App;
