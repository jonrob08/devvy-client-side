import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from '../../data/mockData'

import Header from "../../components/Header/Header";

const Team = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: "id", headerName: "ID"},
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "phone", headerName: "Phone Number", flex: 1},
        { field: "email", headerName: "Email", flex: 1},
        { field: "cost", headerName: "Cost", flex: 1, renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )
    },
        { field: "date", headerName: "Date", flex: 1},
    ]

    return (
        <Box
        sx={{
          background: `${colors.primary[700]} !important`,
          boxShadow: "0 3px 25px rgb(0, 0, 0, 0.5)",
          borderRadius: "20px",
          padding: "1.5rem",
        }}>
            <Header title="Invoices" subtitle="List of Invoice Balances" />
            <Box
                m="1rem"
                pr="1rem"
                height="75vh"

                sx={{ 
                    "& .MuiDataGrid-root": {
                      marginRight: "1rem",
                      border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                    },
                    "& .name-column--cell": {
                      color: colors.primary[100],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.grey[800],
                      borderBottom: "none",
                      borderRadius:"10px 10px 0 0"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[800],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.grey[800],
                      borderRadius: "0 0 10px 10px",
                    },
                    "& .MuiTablePagination-selectLabel": {
                      paddingTop: "1rem",
                      justifyContent:"center !important",
                      alignContent: "center !important",
                  },
                  "& .MuiTablePagination-displayedRows": {
                      paddingTop: "1rem",
                      justifyContent:"center !important",
                      alignContent: "center !important",
                  },
                    "& .MuiCheckbox-root": {
                      color: `${colors.blueAccent[200]} !important`,
                      paddingTop: "1rem",
                      justifyContent:"center !important",
                      alignContent: "center !important",
                    },

                 }}
            >
                <DataGrid 
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team