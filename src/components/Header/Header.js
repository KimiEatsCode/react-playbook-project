import React from "react";
import LeftHeaderNav from "../LeftHeaderNav/LeftHeaderNav";
import RightHeaderNav from "../RightHeadNav/RightHeadNav";
import { Flex, FlexItem } from "playbook-ui";

const Header = () => (
  <>
    <Flex orientatin="row"> <FlexItem>
      <RightHeaderNav></RightHeaderNav>
    </FlexItem> </Flex>
 <Flex orientatin="row"></Flex>
    <FlexItem>
      <LeftHeaderNav></LeftHeaderNav>
    </FlexItem>
    <Flex/>


  </>
);

export default Header;
