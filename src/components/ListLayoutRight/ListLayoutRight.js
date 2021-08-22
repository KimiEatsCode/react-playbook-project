import React from 'react'
import {
  Flex,
  FlexItem,
  Icon,
  List,
  ListItem,
  StatChange,
  Title,
} from 'playbook-ui'

// import List from '../_list'
// import ListItem from '../_list_item'

// import Currency from '../../pb_currency/_currency'
// import Title from '../../pb_title/_title'

const ListLayoutRight = (props) => {
  return (
    <>
<Flex>


      <List

          layout="right"
          {...props}
      >
        <ListItem>
          <Title
              size={4}
              text="Revenue"
              {...props}
          />
        <StatChange
          change="increase"
          value="26"
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Orders"
              {...props}
          />
          <StatChange
          change="decrease"
          value="2"
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Profit"
              {...props}
          />
         <StatChange
          change=""
          value=""
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Average Check"
              {...props}
          />
          <StatChange
          change="increase"
          value="5"
          {...props}
      />
        </ListItem>

        <ListItem>
          <Title
              size={4}
              text="Canceled"
          />
          <StatChange
          change="decrease"
          value="18"
          {...props}
      />
        </ListItem>
        <ListItem>
          <Title
              size={4}
              text="Repeat Sales"
          />
          <StatChange
          change=" "
          value=""
          {...props}
      />
        </ListItem>
      </List>
      </Flex>
    </>
  )
}

export default ListLayoutRight