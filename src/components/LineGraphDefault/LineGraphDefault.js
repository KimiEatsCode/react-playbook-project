import React from 'react'
import { LineGraph } from 'playbook-ui'
import BlockNav from '../BlockNav/BlockNav'
const data = [{
  name: 'Number of Installations',
  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
}]

const LineGraphDefault = (props) => (
  <div>

<BlockNav></BlockNav>
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
  </div>
)

export default LineGraphDefault