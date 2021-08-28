import CardDashboard from "../BottomDashboard/CardDashboard";
import TicketCardSection from "../TicketCardSection/TicketCardSection";
import LineGraphDefault from "../LineGraphDefault/LineGraphDefault";
import KpiChart from "../KpiChart/KpiChart";
import { Background, Flex, FlexItem, Title } from "playbook-ui";
import   Header from "../Header/Header"
import RightHeaderNav from "../RightHeaderNav/RightHeaderNav";
import LeftHeaderNav from "../LeftHeaderNav/LeftHeaderNav";

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Background backgroundColor="light" padding="xl">
        <KpiChart />
        <LineGraphDefault />
        <TicketCardSection/>
        <CardDashboard />
      </Background>
    </div>
  );
}

export default App;
