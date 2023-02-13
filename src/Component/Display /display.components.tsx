import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../utils/fetchUser";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Fragment } from "react";

interface UserDetailsInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DisplayUserComponent: React.FC = (): JSX.Element => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [usersArray, setUsersArray] = useState<UserDetailsInterface[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      setUsersArray(await getData<UserDetailsInterface[]>(url));
    };

    fetchUser();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90},
    { field: "userId", headerName: "userID", width: 90, sortable: false },
    {
      field: "title",
      headerName: "Title",
      width: 300,
      editable: false,
      sortable: true,
    },
    {
      field: "body",
      headerName: "Body",
      width: 800,
      editable: false,
      sortable: false,
    },
  ];

  return (
    <React.Fragment>
      <h1 style={{ marginLeft: "40vw", marginBottom: "5vh" }}>Users Data</h1>
      <Box sx={{ color: 'text.primary',borderColor: 'primary.main', height: 1000, width: "100%", ml: 3, mr: 5 }}>
        <DataGrid
          rows={usersArray}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </React.Fragment>
  );
};

export default DisplayUserComponent;
