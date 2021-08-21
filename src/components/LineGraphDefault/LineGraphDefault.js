import React from 'react'
import { Card, Layout, LineGraph, SectionSeparator, Title } from 'playbook-ui'
import ListLayoutRight from '../ListLayoutRight/ListLayoutRight'
import styled from 'styled-components'


const data = [{
  name: 'Number of Installations',
  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
}]

const GraphTitle = styled.p `
text-align:left;
padding:10px 20px ;
color:grey;
font-weight:bold;
`;

const LineGraphDefault = (props) =>(
  <div>


<LineGraph
        chartData={data}
        id="line-fixed-height"
        xAxisCategories={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
        yAxisMin={0}
        {...props}
    />
  </div>
)


export default LineGraphDefault