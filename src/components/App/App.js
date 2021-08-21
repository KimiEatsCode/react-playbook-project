import './App.css';
import CardDashboard from '../CardDashboard/CardDashboard';
import BlockNav from '../BlockNav/BlockNav';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';
import KpiChart from '../KpiChart/KpiChart';
import { Background } from 'playbook-ui'

function App() {
  return (
    <div className="App">
      <Background  backgroundColor="light"
      padding="xl"
      >
<KpiChart/>
      <LineGraphDefault/>
      <BlockNav/>
      <CardDashboard/>
      </Background>
    </div>
  );
}

export default App;
