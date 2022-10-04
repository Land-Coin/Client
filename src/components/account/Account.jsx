import { Center, Container, Group, NavLink, Paper, Title } from "@mantine/core";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <Container size="xl">
      <Paper
            radius="lg"
            my="md"
            sx={(theme) => ({
              background: theme.colors.dark[7],
              padding: "50px 0",
            })}
          >
            <Center>
                <Title order={1} align="center" mb="lg" color="white">
                  Your Account
                </Title>
            </Center>
          </Paper>
        <Paper shadow="xl" my="md" radius="lg" p="sm">
          <Title>Account</Title>
          <Group position="left" style={{ display: "flex" }}>
            <NavLink
              to="./trades"
              label="Trades"
              style={{ width: "120px" }}
              component={Link}
            />
            <NavLink
              to="./rent"
              label="Rent"
              style={{ width: "120px" }}
              component={Link}
            />
          </Group>
          <Outlet />
        </Paper>
      </Container>
    </div>
  );
};

export default Account;
