import React from 'react';
import LineGraphNav from '../LineGraphNav/LineGraphNav';
import LineGraphDefault from '../LineGraphDefault/LineGraphDefault';
import { Card,Flex, FlexItem } from 'playbook-ui';

const KpiChart = () => (
  <div>
    <Card padding="none">
     <Flex
        // className="flex-container"
        // horizontal="center"
        // margin="xs"
        // spacing="between"
        orientation="row"

    >

      <FlexItem><LineGraphNav useLayout="false"></LineGraphNav></FlexItem>

      <FlexItem grow>
    <LineGraphDefault/></FlexItem>
    </Flex>
    </Card>
  </div>
);


export default KpiChart;
