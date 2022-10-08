import { Grid, NavLink, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const BuysMade = () => {
  return (
    <div>
      <Grid>
        <Grid.Col md={3}>
          <Stack spacing="0">
          <NavLink to="./one" label="Trade one"  component={Link} />
          <NavLink to="./two" label="Trade one" component={Link} />
          <NavLink to="./three" label="Trade one" component={Link} />
          <NavLink to="./foure" label="Trade one" component={Link} />
          </Stack>
        </Grid.Col>
        <Grid.Col md={9}>
          <Paper radius="lg" p="xs" sx={theme => ({
            background: theme.colors.gray[0],
            height: "100%"
          })}>
          <Outlet />
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default BuysMade;
