import React from "react";
import LeftHeaderNav from "../LeftHeaderNav/LeftHeaderNav";
import RightHeaderNav from "../RightHeaderNav/RightHeaderNav";
import { Flex, FlexItem } from "playbook-ui";

const Header = () => (
  <>
  <Flex orientatin="column">

    <Flex orientatin="row">
 
    <FlexItem>
      <LeftHeaderNav></LeftHeaderNav>
    </FlexItem>
    </Flex>

    <Flex orientatin="row">
      <FlexItem>
        <RightHeaderNav></RightHeaderNav>
      </FlexItem>
    </Flex>

    </Flex>
  </>
);

export default Header;
