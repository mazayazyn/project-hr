import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';

const columns = [
  { field: 'namaKandidat', headerName: 'Nama Kandidat', width: 150 },
  { field: 'yearExperience', headerName: 'Years of Experience', width: 150, type: 'number' },
  { field: 'currentSalary', headerName: 'Current Salary', width: 150, type: 'number' },
  { field: 'jobLevel', headerName: 'Job Level', width: 150 },
  { field: 'jobPosition', headerName: 'Job Position', width: 150 },
  { field: 'industry', headerName: 'Industry', width: 150 },
  {field: 'actions',
    headerName: 'Actions',
    width: 350,
    filterable: false,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={(params) => {
            console.log(params.value.namaKandidat);
          }}
        >
          Detail
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={(params) => {
            console.log(params.value.namaKandidat);
          }}
        >
          Shortlist
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={(params) => {
            console.log(params.value.namaKandidat);
          }}
        >
          Unsuitable
        </Button>
      </strong>
    ),
  }
];


export default function ListKandidat() {
  const [listKandidat, setListKandidat] = useState([]);
  const [refreshList, setRefreshList] = useState([1])

  useEffect(async () => {
    await fetch("/api/kandidat/list").then(res => res.json()).then((res) => setListKandidat(res.result))
    console.log(listKandidat)
  }, [refreshList]);


  const handleRefreshList = (e) => {
    if (refreshList === 1) {
      setRefreshList(2)
    } else {
      setRefreshList(1)
    }
  }

  // const mapListKandidat = (e) => {
  //   console.log(listKandidat.map((kandidat) =>))
  // }

  return (
    <>
    <br/>
      <Container>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            handleRefreshList();
          }}
        >
          Refresh List Kandidat
        </Button>
      </Container>
      <br/>
      <Container>
        <div style={{ height: 300, width: 1260 }}>
          <DataGrid 
          rows={listKandidat} 
          columns={columns} 
          components={{
            Toolbar: GridToolbar,
          }}
          />
        </div>
      </Container>
    </>
  );
}