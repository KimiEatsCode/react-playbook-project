import React from 'react'
import { Card, Layout, LineGraph } from 'playbook-ui'
import BlockNav from '../BlockNav/BlockNav'
const data = [{
  name: 'Number of Installations',
  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
}]

const LineGraphDefault = (props) => (
  <div>


  {/*<Layout.Header><Card.Header>Key Performance Indicators</Card.Header></Layout.Header>*/}
  <Card>
    <Card.Header>Key Performance Indicators</Card.Header>
    <Layout layout="content">
  <Layout.Side>
<BlockNav></BlockNav>
</Layout.Side>

<Layout.Body>
    <LineGraph
        axisTitle="Number of Employees"
        chartData={data}
        height="50%"
        id="line-percentage-height"
        title="Percentage Height (50%)"
        xAxisCategories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        yAxisMin={0}
        {...props}
    />
     </Layout.Body>
    </Layout>
    </Card>
  </div>
)

export default LineGraphDefault