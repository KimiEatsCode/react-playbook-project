import React from "react";
import LeftHeaderNav from "../LeftHeaderNav/LeftHeaderNav";
import RightHeaderNav from "../RightHeaderNav/RightHeaderNav";
import { Background, Body, Card,Collapsible, Flex, FlexItem, Icon, Layout, Pill, Nav, NavItem, Title, User} from "playbook-ui";
import MusicApp from "../MusicAppExample/MusicAppExample"

const Header = (props) => (
  <>


<Flex orientation="row" align="end" {...props}>
  <FlexItem>
 <RightHeaderNav ></RightHeaderNav>
 </FlexItem>
 </Flex>

<Flex orientation="row" {...props}>
      <Title>left</Title>
      </Flex>




  </>
);

export default Header;
