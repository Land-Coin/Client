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
import { CONTRACT } from "../configs/appconfig";

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

const CustomDispute = ({ dispute }) => {
  return (
    <Paper radius="md" shadow="lg" my="sm" p="sm">
      <Title order={5}>{dispute.raiser}</Title>
      <Text>{dispute.message}</Text>
    </Paper>
  );
};

const Property = () => {
  const [addDOpen, setAddDOpen] = useState(false);

  const [data, setData] = useState(null);
  const [disputes, setDisputes] = useState(null);
  const [q, setQ] = useState("");
  const [message, setMsg] = useState("");

  const getProperty = () => {
    const wallet = window.walletConnection;
    const contract = window.contract;
    if (wallet && contract) {
      // wallet
      //   .account()
      //   .viewFunction(CONTRACT, "search_property", { query: q })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.error("Error: ", err);
      //   });
      contract
        .search_property({ query: q })
        .then((res) => {
          console.log(res);
          setData(res);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  };

  const addDispute = () => {
    const wallet = window.walletConnection;
    const contract = window.contract;
    if (wallet && contract) {
      contract
        .add_dispute({
          prop_id: data?.id,
          dispute: { raiser: wallet.getAccountId(), message },
        })
        .then((res) => {
          console.log(res);
          getProperty()
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  };

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
              <TextInput
                placeholder="Search ID or Title No"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <Button
                color="indigo"
                radius="xl"
                size="sm"
                px="xl"
                mt="md"
                onClick={getProperty}
              >
                Search
              </Button>
            </Stack>
          </Center>
        </Paper>
        {/* <Center> */}
        <Paper my="xl" p="sm" shadow="xl" radius="lg">
          <CustomRow obj={{ title: "Title Number", value: data?.title_no }} />
          <CustomRow obj={{ title: "Category", value: data?.category }} />
          <CustomRow obj={{ title: "Use", value: data?.purpose?.name }} />
          <CustomRow obj={{ title: "Size", value: data?.size }} />
          <CustomRow obj={{ title: "Price", value: data?.price }} />
          <CustomRow
            obj={{
              title: "Location",
              value: data && `${data?.location?.lon} ${data?.location?.lat}`,
            }}
          />
          <CustomRow obj={{ title: "Disputes", value: data?.disputes?.length }} />
          <CustomRow
            obj={{
              title: "Has Caveat",
              value: data && (data?.has_caveat ? "Yes" : "No"),
            }}
          />
          {data?.disputes && (
            <Box py="md">
              <Title order={2}> Disputes </Title>
              {data?.disputes?.map((d, i) => (
                <CustomDispute key={`eache_dispute_${i}`} dispute={d} />
              ))}
            </Box>
          )}
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
          <Textarea
            radius="md"
            minRows={6}
            value={message}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Group position="center" mt="lg">
            <Button
              color="blue"
              radius="xl"
              size="sm"
              px="xl"
              onClick={addDispute}
            >
              Add
            </Button>
          </Group>
        </Modal>
      </Container>
    </div>
  );
};

export default Property;
