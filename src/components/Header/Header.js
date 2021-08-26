import React from "react";
import LeftHeaderNav from "../LeftHeaderNav/LeftHeaderNav";
import RightHeaderNav from "../RightHeaderNav/RightHeaderNav";
import {  Flex, FlexItem } from "playbook-ui";
import logo from "../../images/logo.png"

const Header = (props) => {


return (
  <>
   <Flex orientation="row" justify="right" spacing="between" align="start">
     <FlexItem><img className="logoTopNav"alt="PBJ logo"src={logo}></img></FlexItem>
     <FlexItem>
     <RightHeaderNav></RightHeaderNav>
     </FlexItem>
     </Flex>
     <LeftHeaderNav></LeftHeaderNav>

  </>
);
}
export default Header;
