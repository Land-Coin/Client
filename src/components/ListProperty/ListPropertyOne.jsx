import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Modal,
  NumberInput,
  Paper,
  Select,
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

const ListPropertyOne = () => {
  const [addDOpen, setAddDOpen] = useState(false);
  const [cat, setCat] = useState("building")

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
                List Your Property Today
              </Title>
            </Stack>
          </Center>
        </Paper>

        <Paper my="xl" p="sm" shadow="xl" radius="lg">
          <Grid>
            <Grid.Col span="auto"></Grid.Col>
            <Grid.Col xs={8}>
              <Grid>
                <Grid.Col md={6}>
                  <Select label="Category" value={cat} onChange={value => setCat(value)} data={[
                    {value: "building", label:"Building"},
                    {value: "land", label:"Land"}
                  ]} />
                </Grid.Col>
                <Grid.Col md={6}>
                  <Select label="Purpose" data={[
                    {value: "sell", label:"Sell"},
                    {value: "rental", label:"Rental"},
                    {value: "personal", label:"Personal"}
                  ]} />
                </Grid.Col>
                <Grid.Col md={6}>
                    <TextInput label={cat === "building" ? "Size (Square Metres)" : "Size (Acres)"} />
                </Grid.Col>
                <Grid.Col md={6}>
                    <TextInput label={cat === "building" ? "House Number" : "Title Deed"} />
                </Grid.Col>
                <Grid.Col md={6}>
                    <TextInput label="Enter Owners (comma separated)" />
                </Grid.Col>
                <Grid.Col md={6}>
                    <NumberInput label="Price in KES" />
                </Grid.Col>
                <Grid.Col md={6}>
                    <NumberInput label="Price in LandCoins" />
                </Grid.Col>
                <Grid.Col md={6}>
                    <NumberInput label="Location Latitude" />
                </Grid.Col>
                <Grid.Col md={6}>
                    <NumberInput label="Location Longitue" />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span="auto"></Grid.Col>
          </Grid>

          <Group position="center" my="lg">
            <Button
              color="blue"
              radius="xl"
              size="md"
              px="xl"
              onClick={openModal}
            >
              Submit
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

export default ListPropertyOne;
