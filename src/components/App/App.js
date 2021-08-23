import CardDashboard from "../CardDashboard/CardDashboard";
import TicketCardSection from "../TicketCardSection/TicketCardSection";
import LineGraphDefault from "../LineGraphDefault/LineGraphDefault";
import KpiChart from "../KpiChart/KpiChart";
import { Background, Flex } from "playbook-ui";
import   Header from "../Header/Header"

function App() {
  return (
    <div className="App">
       <Flex
        paddingTop="md"
        paddingX="xl"
        spacing="between"
    >
      <Header></Header>
      </Flex>
      <Background backgroundColor="light" padding="xl">
        <KpiChart />
        <LineGraphDefault />
        <TicketCardSection />
        <CardDashboard />
      </Background>
    </div>
  );
}

export default App;
