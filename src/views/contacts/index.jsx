import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from '../../data/mockData'

import Header from "../../components/Header/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field: "id", headerName: "ID"},
        {field: "registrarId", headerName: "Registrar ID"},
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        { field: "phone", headerName: "Phone Number", flex: 1},
        { field: "email", headerName: "Email", flex: 1},
        { field: "address", headerName: "Address", flex: 1},
        { field: "city", headerName: "City", flex: 1},
        { field: "zipCode", headerName: "Zip Code", flex: 1},
    ]

    return (
        <Box 
        sx={{
          background: `${colors.primary[700]} !important`,
          boxShadow: "0 3px 25px rgb(0, 0, 0, 0.5)",
          borderRadius: "20px",
          padding: "1.5rem",
          // width: "50vw"
        }}>
            <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
            <Box
                    
                    m="0.3rem"
                    p="0.3rem"
                    display="flex"
                    justifyContent="center"

                    borderRadius="7px"
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
                    "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`
                    }
                 }}
            >
                <DataGrid 
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Contacts