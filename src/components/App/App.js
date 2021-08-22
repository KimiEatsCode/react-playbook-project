import CardDashboard from '../CardDashboard/CardDashboard';
import BlockNav from '../BlockNav/BlockNav';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';
import KpiChart from '../KpiChart/KpiChart';
import { Background } from 'playbook-ui'
import TicketCardSection from '../TicketCardSection/TicketCardSection';

function App() {
  return (
    <div className="App">
      <Background  backgroundColor="light"
      padding="xl"
      >
<KpiChart/>
      <LineGraphDefault/>
      <TicketCardSection/>
      <CardDashboard/>
      </Background>
    </div>
  );
}

export default App;
