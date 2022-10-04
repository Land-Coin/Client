import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Modal,
  Paper,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";

const CustomRow = ({ obj }) => {
  return (
    <Grid mb="sm">
      <Grid.Col span={6}>
        <Title order={6}>{obj?.title}</Title>
      </Grid.Col>
      <Grid.Col span={6}>{obj?.value}</Grid.Col>
    </Grid>
  );
};

const CustomDispute = ({}) => {
  return (
    <Paper radius="md" shadow="lg" my="sm" p="sm">
      <Title order={5}>dalmasonto.testnet</Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eius
        sapiente eos. Itaque, omnis esse! Vitae architecto deleniti earum
        possimus ratione. Expedita eum vero at illo ea nemo, quam amet.
      </Text>
    </Paper>
  );
};

const Property = () => {
  const [addDOpen, setAddDOpen] = useState(false);

  const openModal = () =>
    openConfirmModal({
      title: "Please confirm purchase",
      children: (
        <Text size="sm">Are you sure you want to but this property?</Text>
      ),
      labels: { confirm: "Confirm", cancel: "Cancel" },
      centered: true,
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed"),
    });

  return (
    <div>
      <Container
        sx={(theme) => ({
          // margin: "50px auto",
          marginBottom: "100px",
          borderRadius: theme.radius.xl,
        })}
      >
        <Paper
          radius="lg"
          my="md"
          sx={(theme) => ({
            background: theme.colors.dark[7],
            padding: "50px 0",
          })}
        >
          <Center>
            <Stack>
              <Title order={1} align="center" mb="lg" color="white">
                Search Property
              </Title>
              <TextInput placeholder="Search ID or Title No" />
              <Button color="indigo" radius="xl" size="sm" px="xl" mt="md">
                Search
              </Button>
            </Stack>
          </Center>
        </Paper>
        {/* <Center> */}
        <Paper my="xl" p="sm" shadow="xl" radius="lg">
          <CustomRow obj={{ title: "Title Number", value: "Som enumb" }} />
          <CustomRow obj={{ title: "Category", value: "Land" }} />
          <CustomRow obj={{ title: "Use", value: "Rent" }} />
          <CustomRow obj={{ title: "Size", value: "Som enumb" }} />
          <CustomRow obj={{ title: "Price", value: "Som enumb" }} />
          <CustomRow obj={{ title: "Location", value: "Som enumb" }} />
          <CustomRow obj={{ title: "Disputes", value: "10" }} />
          <CustomRow obj={{ title: "Has Caveat", value: "Yes" }} />
          <Box py="md">
            <Title order={2}> Disputes </Title>
            <CustomDispute />
            <CustomDispute />
            <CustomDispute />
          </Box>
          <Group position="center" my="lg">
            <Button color="indigo" radius="xl" size="md" px="xl">
              Add Caveat
            </Button>
            <Button
              color="blue"
              radius="xl"
              size="md"
              px="xl"
              onClick={openModal}
            >
              Buy
            </Button>
            <Button
              color="red"
              radius="xl"
              size="md"
              px="xl"
              onClick={(e) => setAddDOpen(true)}
            >
              Dispute
            </Button>
          </Group>
        </Paper>
        {/* </Center> */}
        <Modal
          title={<Title order={3}>Add dispute</Title>}
          opened={addDOpen}
          centered
          radius="md"
          transition="rotate-left"
          onClose={(e) => setAddDOpen(false)}
        >
          <Textarea radius="md" minRows={6} />
          <Group position="center" mt="lg">
            <Button color="blue" radius="xl" size="sm" px="xl">
              Add
            </Button>
          </Group>
        </Modal>
      </Container>
    </div>
  );
};

export default Property;
