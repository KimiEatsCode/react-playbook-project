import './App.css';
import CardDashboard from '../CardDashboard/CardDashboard';
import BlockNav from '../BlockNav/BlockNav';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';
import KpiChart from '../KpiChart/KpiChart';


function App() {
  return (
    <div className="App">
<KpiChart/>
      <LineGraphDefault/>
      <BlockNav/>
      <CardDashboard/>

    </div>
  );
}

export default App;
