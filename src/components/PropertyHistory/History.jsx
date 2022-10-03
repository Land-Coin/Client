import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { CssTextField } from "../CustomTextBox";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "./TableCell";
import TableRow from "@mui/material/TableRow";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("12/09/22", "buy", "0ooxo..ox9", "0ooxo..ox9", 4.0),
  createData("12/09/22", "sell", "0ooxo..ox9", "0ooxo..ox9", 4.3),
  createData("12/09/22", "buy", "0ooxo..ox9", "0ooxo..ox9", 6.0),
  createData("12/09/22", "sell", "0ooxo..ox9", "0ooxo..ox9", 4.3),
  createData("12/09/22", "buy", "0ooxo..ox9", "0ooxo..ox9", 3.9),
];

const History = () => {
  return (
    <Box sx={{ backgroundColor: "#E4E6E6", pt: "7%", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography fontSize={{ xs: "16px", sm: "32px" }}>
            Enter Title Number or ID Below
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "2%" }}>
          <CssTextField sx={{ width: "400px" }} />
        </Box>
        <Box sx={{ mt: "4%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Time / Day</StyledTableCell>
                  <StyledTableCell align="right">
                    Transaction Type
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Sender's Address
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Receiver's Address
                  </StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default History;
