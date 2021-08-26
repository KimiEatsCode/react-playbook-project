import React from 'react'
import CardDashboard from "../CardDashboard/CardDashboard";
import TicketCardSection from "../TicketCardSection/TicketCardSection";
import LineGraphDefault from "../LineGraphDefault/LineGraphDefault";
import KpiChart from "../KpiChart/KpiChart";
import { Background, Flex, FlexItem, Title } from "playbook-ui";
import   Header from "../Header/Header"
import RightHeaderNav from "../RightHeaderNav/RightHeaderNav";
import LeftHeaderNav from "../LeftHeaderNav/LeftHeaderNav";
import UserForm from "../UserForm/UserForm"
import UserProvider from '../MyProvider/MyProvider';
const state ='test';



function App() {
  return (
    <div className="App">
        <UserProvider>
      <UserForm></UserForm>
    <Header></Header>
      <Background backgroundColor="light" padding="xl">
        <KpiChart />
        <LineGraphDefault />
        <TicketCardSection />
        <CardDashboard />
      </Background>
      </UserProvider>
 
    </div>
  );
}
export const AppContext = React.createContext(state);
export default App;
