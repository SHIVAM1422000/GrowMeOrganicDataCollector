import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getData } from "../../utils/fetchUser";
import { useNavigate } from "react-router-dom";

interface UserDetailsInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [usersArray, setUsersArray] = useState<UserDetailsInterface[]>([]);
  let nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userDetails")) {
      nav("/");
    } else {
      console.log("Data Already There");
    }
  }, [localStorage.getItem("userDetails")]);

  useEffect(() => {
    const fetchUser = async () => {
      setUsersArray(await getData<UserDetailsInterface[]>(url));
    };

    fetchUser();
  }, []);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        User Details
      </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="right">userId</StyledTableCell>
              <StyledTableCell align="right" width="400">
                title
              </StyledTableCell>
              <StyledTableCell align="right" width="800">
                Body
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersArray.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.userId}</StyledTableCell>
                <StyledTableCell align="right">{row.title}</StyledTableCell>
                <StyledTableCell align="right">{row.body}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
