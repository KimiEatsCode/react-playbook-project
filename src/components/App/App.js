import BottomDashboard from "../BottomDashboard/BottomDashboard";
import TicketCardSection from "../TicketCardSection/TicketCardSection";
import LineGraphDefault from "../LineGraphDefault/LineGraphDefault";
import KpiChart from "../KpiChart/KpiChart";
import { Background } from "playbook-ui";
import   Header from "../Header/Header";

function App() {


 async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/ticketnew");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

  return (
    <div className="App">
    <Header></Header>
      <Background backgroundColor="light" padding="xl">

        <KpiChart />

        <LineGraphDefault />
        <TicketCardSection ticketNewFunc={getServerSideProps}/>
        <BottomDashboard />
      </Background>

    </div>
  );
}


export default App;
