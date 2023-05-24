import React from "react";
import {
  Body,
  Caption,
  Card,
  CircleIconButton,
  Flex,
  FlexItem,
  IconStatValue,
  ProgressSimple,
  SectionSeparator,
  Title,
} from "playbook-ui";

const pipelineData = {
  title: "Pipeline Chart",
  chartData: [
    { label: "Add to Cart", percent: 100.0, value: 2577 },
    { label: "Shopping Cart", percent: 79.0, value: 2023 },
    { label: "Payment Methods", percent: 59.0, value: 1567 },
    { label: "Delivery Methods", percent: 56.0, value: 1252 },
    { label: "Confirm", percent: 49.0, value: 1182 },
    { label: "Delivery", percent: 46.0, value: 1098 },
  ],
};

const ticketData = {
  gridData: [
    {
      icon: "ticket-alt",
      variant: "green",
      size: "lg",
      text: "Tickets (YTD)",
      value: "1426.0",
    },
    {
      icon: "times-square",
      variant: "red",
      size: "lg",
      text: "Overdue",
      value: "25.0",
    },
    {
      icon: "tasks",
      variant: "teal",
      size: "lg",
      text: "Closed Without Action (YTD)",
      value: "97.0",
    },
    {
      icon: "exclamation-triangle",
      variant: "yellow",
      size: "lg",
      text: "Escalated (YTD)",
      value: "896.0",
    },
  ],
};

const FulfillmentChart = ({ chartData, title, props }) => {
  function valueCommaSeparated(val) {
    val = val.toString();
    let part1 = val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    return part1;
  }

  return (
    <div>
      <Card borderNone marginTop="lg" padding="none" shadow="deeper">
        <Flex spacing="between" vertical="center">
          <Title padding="sm" size="4" text={title} />
          <CircleIconButton icon="ellipsis-h" variant="link" />
        </Flex>
        <SectionSeparator />

        {chartData.map((row, i) => (
          <Flex key={i} padding="sm" spacing="between" vertical="center">
            <FlexItem fixedSize="100px">
              <Caption size="xs" text={row.label} />
            </FlexItem>
            <FlexItem grow>
              <Flex spacing="around" vertical="center">
                <ProgressSimple percent={row.percent} width="100px" />
                <FlexItem fixedSize="50px">
                  <Caption marginX="xs" size="xs" text={`${row.percent}%`} />
                </FlexItem>
              </Flex>
            </FlexItem>
            <FlexItem>
              <Flex vertical="right">
                <Body text={valueCommaSeparated(row.value)} />
              </Flex>
            </FlexItem>
          </Flex>
        ))}
      </Card>
    </div>
  );
};

const GridRowFill = ({ data }) => (
  <Card.Body padding="none">
    <Flex horizontal="center" spacing="evenly" wrap>
      {data.map((line, i) => (
        <FlexItem
          fixedSize="215px"
          key={`grid-row-item-${line.icon}-${i}`}
          margin="md"
        >
          <IconStatValue {...line} />
        </FlexItem>
      ))}
    </Flex>
  </Card.Body>
);

const IconGrid = ({ gridData, props }) => (
  <div>
    <Card borderNone marginTop="lg" padding="none" shadow="deeper">
      <Flex orientation="row">
        <Card borderRadius="none">
          <GridRowFill data={gridData.slice(0, 1)} />
        </Card>
        <Card borderRadius="none">
          <GridRowFill data={gridData.slice(1, 2)} />
        </Card>
      </Flex>

      <Flex orientation="row" align="stretch">
        <Card borderRadius="none">
          <GridRowFill data={gridData.slice(2, 3)} />
        </Card>
        <Card borderRadius="none">
          <GridRowFill data={gridData.slice(-1)} />
        </Card>
      </Flex>
    </Card>
  </div>
);

const CardDashboard = () => {
  return (
    <>
      <div>
        <hr></hr>
        <div className="row mt-5">
          <Caption>This week's sales stats</Caption>
          <Title size={3} tag="h1" text="Sales Details"></Title>
        </div>
        <Flex orientation="row" wrap spacing="between">
          <FlexItem fixedSize="45%">
            <FulfillmentChart {...pipelineData} />
          </FlexItem>
          <FlexItem fixedSize="50%">
            <IconGrid {...ticketData} />
          </FlexItem>
        </Flex>
      </div>
    </>
  );
};

export default CardDashboard;
