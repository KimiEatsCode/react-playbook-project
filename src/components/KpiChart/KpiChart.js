import React from 'react';
import LineGraphNav from '../LineGraphNav/LineGraphNav';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';
import { Caption, Card, CircleIconButton, Flex, FlexItem, SectionSeparator, Title } from 'playbook-ui';
import styled from 'styled-components'


const GraphTitle = styled.p `
color:#242b42;
font-weight:bold;
padding:20px 20px 5px 20px;
text-align:left;
`;

const KpiChart = (props) => {

  return (
  <div>

    <Caption>Dashboard</Caption>
    <Title  
          size={3}
          tag="h1"
          text="Commerce Dashboard"></Title>
    <Card align="stretch" padding="none" marginTop="sm" marginBottom="md">
     <Card.Body padding="none">
       <Flex orientation="row" spacing="between">
     <GraphTitle>Key Performance Indicators</GraphTitle>
     <CircleIconButton
      paddingTop="sm"
      paddingRight="sm"
                  icon="ellipsis-h"
                  variant="secondary"
              />
        </Flex>
      </Card.Body>
      <SectionSeparator variant="card"></SectionSeparator>

      <Flex orientation="row" justify="stretch">
      <Flex
      orientation="column">
      <FlexItem></FlexItem>
      </Flex>


      <Flex orientation="column" justify="stretch">
      <FlexItem grow>


      </FlexItem>
      </Flex>

    </Flex>

    <Flex orientation="row"  >
      <FlexItem>
    <LineGraphNav  padding="none"></LineGraphNav>
    </FlexItem>
    <FlexItem>
    <Card padding="sm" borderRadius="none">
    <LineGraphDefault/>
    </Card>
    </FlexItem>
    </Flex>
    </Card>

  </div>
);
  }


export default KpiChart;
