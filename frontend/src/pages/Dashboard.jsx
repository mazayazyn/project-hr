import { Button, Box, Container } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useEffect, useState } from "react";

// const rows = [
//   { id: 1, client: 'Snow', created: 'Jon', status: 35 },
// ]

// function Dashboard() {
//   const [rows, setRows] = useState([])

//   useEffect(() => {
//     fetch("https://2aec877d-24d9-4769-b4b3-5dd68eb9fd69.mock.pstmn.io/api/dashboard")
//       .then((data) => data.json())
//       .then((data) => setRows(data))
//     console.log(rows)
//   }, [])

//   return (
//     <Container sx={{ my: 7, py: 5 }}>
//       <Box sx={{ display: "flex", height: 550, width: "100%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           disableSelectionOnClick
//         />
//       </Box>
//     </Container>
//   );
// }

// export default Dashboard;

const columns = [
  { field: "id", headerName: "Vacancy ID", minWidth: 100, flex: 1 },
  { field: "client", headerName: "Client", minWidth: 150, flex: 1 },
  {
    field: "openingDate",
    headerName: "Opening Date",
    minWidth: 150,
    flex: 1,
    filterable: false,
  },
  {
    field: "closingDate",
    headerName: "Closing Date",
    minWidth: 150,
    flex: 1,
    filterable: false,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 130,
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
    minWidth: 100,
    flex: 1,
    filterable: false,
    sortable: false,
    renderCell: () => (
      <Button
        variant="contained"
        color="primary"
        size="small"
      >
        Detail
      </Button>
    ),
  },
];

const rows = [
  {
    id: 1,
    client: "Snow",
    openingDate: "22/7/2022",
    closingDate: "22/8/2022",
    status: 2,
  },
];

export default function Dashboard() {
  return (
    <Container sx={{ my: 7, py: 5 }}>
      <Box sx={{ display: "flex", height: 550, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Container>
  );
}
