import React from "react";
import LeftHeaderNav from "../LeftHeaderNav/LeftHeaderNav";
import RightHeaderNav from "../RightHeadNav/RightHeadNav";
import { Body, Card, Flex, FlexItem, Layout, Pill, Title } from "playbook-ui";

const Header = () => (
  <>
    <Flex orientation="column">
      <RightHeaderNav></RightHeaderNav>
      <LeftHeaderNav></LeftHeaderNav>
    </Flex>
  </>
);

export default Header;
