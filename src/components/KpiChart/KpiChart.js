import React from 'react';
import LineGraphNav from '../LineGraphNav/LineGraphNav';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';
import { Card,Flex, FlexItem, SectionSeparator } from 'playbook-ui';
import styled from 'styled-components'

const GraphTitle = styled.p `
color:#242b42;
font-weight:bold;
padding:20px 20px 5px 20px;
text-align:left;
`;

const KpiChart = (props) => (
  <div>
    <Card padding="none">
     <Card.Body padding="none">
     <GraphTitle>Key Performance Indicators</GraphTitle>
      </Card.Body>
      <SectionSeparator variant="card"></SectionSeparator>
     <Flex spacing="between"
       orientation="row"
        wrap>
      <FlexItem  grow><LineGraphNav padding="none"></LineGraphNav></FlexItem>

      <FlexItem>
    <LineGraphDefault/></FlexItem>
    </Flex>
    </Card>
  </div>
);


export default KpiChart;
