import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  Loader,
  LoadingOverlay,
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

import { useForm } from "@mantine/form";
import { nanoid } from "nanoid";
import { Check } from "@mui/icons-material";

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
  const [loading, setLoading] = useState(false);
  const [addDOpen, setAddDOpen] = useState(false);
  const [res, setRes] = useState("");

  const form = useForm({
    initialValues: {
      category: "building",
      purpose: "",
      size: "",
      title_no: "",
      owners: "",
      price: "",
      location: {
        lat: "",
        lon: "",
      },
    },

    validate: {
      category: (value) => (value === "" ? "Select Category" : null), // Do so for validation of other fields
    },
  });
  //function to change
  const getValue = () => {
    return form.values["category"];
  };

  const handleForm = () => {
    const data = JSON.parse(JSON.stringify(form.values)); // Am doing a deep copy so as I can edit the data (owners to make an array)
    const owners = data["owners"].split(",");
    data["id"] = nanoid();
    data["owners"] = owners;
    data["purpose"] = { name: data["purpose"] };
    setLoading(true);
    setRes("");

    const contract = window.contract;
    if (contract) {
      contract
        .add_property(data)
        .then((res) => {
          setRes("success");
        })
        .catch((err) => {
          console.log("Listing property error:", err);
        });
      setLoading(false);
    }
  };

  const openModal = () =>
    openConfirmModal({
      title: "Please confirm",
      children: <Text size="sm">Are you sure you want to list property?</Text>,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      centered: true,
      onCancel: () => console.log("Cancel"),
      onConfirm: () => handleForm(),
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
        {loading && <LoadingOverlay sx={{ height: "100%", width: "100%" }} />}
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
          <form
            onSubmit={form.onSubmit((values) => {
              if (Object.keys(form.errors).length === 0) {
                // return;
              }
              openModal();
            })}
          >
            <Grid>
              <Grid.Col span="auto"></Grid.Col>
              <Grid.Col xs={8}>
                <Grid>
                  <Grid.Col md={6}>
                    <Select
                      label="Category"
                      data={[
                        { value: "building", label: "Building" },
                        { value: "land", label: "Land" },
                      ]}
                      {...form.getInputProps("category")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <Select
                      label="Purpose"
                      data={[
                        { value: "sell", label: "Sell" },
                        { value: "rental", label: "Rental" },
                        { value: "personal", label: "Personal" },
                      ]}
                      {...form.getInputProps("purpose")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      label={
                        getValue() === "building"
                          ? "Size (Square Metres)"
                          : "Size (Acres)"
                      }
                      {...form.getInputProps("size")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      label={
                        getValue() === "building"
                          ? "House Number"
                          : "Title Deed"
                      }
                      {...form.getInputProps("title_no")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      label="Enter Owners (comma separated)"
                      {...form.getInputProps("owners")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      label="Price in KES"
                      {...form.getInputProps("price")}
                    />
                  </Grid.Col>
                  {/* <Grid.Col md={6}>
                    <NumberInput label="Price in LandCoins"  {...form.getInputProps('price')} />
                  </Grid.Col> */}
                  <Grid.Col md={6}>
                    <TextInput
                      label="Location Latitude"
                      {...form.getInputProps("location.lat")}
                    />
                  </Grid.Col>
                  <Grid.Col md={6}>
                    <TextInput
                      label="Location Longitue"
                      {...form.getInputProps("location.lon")}
                    />
                  </Grid.Col>
                </Grid>
              </Grid.Col>
              <Grid.Col span="auto"></Grid.Col>
            </Grid>

            <Group position="center" align="center" my="lg">
              <Button
                color="blue"
                radius="xl"
                size="md"
                px="xl"
                type="submit"
                rightIcon={loading && <Loader variant="oval" size={16} />}
              >
                Submit
              </Button>
              {
                res === "success" && <Check fontSize="16" />
              }
            </Group>
          </form>
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
