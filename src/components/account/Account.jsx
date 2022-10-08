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

          {/* 2nd papar */}
        <Paper shadow="xl" my="md" radius="lg" p="sm">
          <Title>Account</Title>
          <Group position="left" style={{ display: "flex" }}>
            <NavLink
              to="./BuysMade"
              label="Buys Made"
              style={{ width: "120px" }}
              component={Link}
            />
            <NavLink
              to="./rent"
              label="Rent Made"
              style={{ width: "120px" }}
              component={Link}
            />
          </Group>
{/* 2nd group under  inside 2nd paper */}
<Group position="right" style={{ display: "flex" }}>
            <NavLink
              to="./BuysMade"
              label="Buys Received"
              style={{ width: "120px" }}
              component={Link}
            />
            <NavLink
              to="./rent"
              label="Rents Received"
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
