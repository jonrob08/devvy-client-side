import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/Header/Header";

const Team = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        { field: "id", headerName: "ID", flex: 1, headerAlign: "right", align:"right"},
        { field: "name", headerName: "Name", flex: 2, cellClassName: "name-column--cell", headerAlign: "center", align:"left" },
        { field: "age", headerName: "Age", flex: 1, type: "number", headerAlign: "center", align: "center"},
        { field: "phone", headerName: "Phone Number", flex: 2, headerAlign: "center", align: "center"},
        { field: "email", headerName: "Email", flex: 2, headerAlign: "center", align: "right"},
        { field: "access", headerName: "Access Level", flex: 2, headerAlign: "center", align: "center", renderCell: ({ row: { access } }) => {
            return (
                <Box
                    width="80%"
                    m="0.3rem"
                    p="0.3rem"
                    display="flex"
                    justifyContent="center"

                    borderRadius="7px"
                    backgroundColor={
                        access === "admin"
                        ? colors.blueAccent[900]
                        : colors.blueAccent[700]
                    }
                    sx={{ boxShadow: 3 }}
                    
                >
                    {access === "admin" && <AdminPanelSettingsOutlinedIcon textShadow="2px 2px #000000;" />}
                    {access === "manager" && <SecurityOutlinedIcon />}
                    {access === "user" && <LockOpenOutlinedIcon />}
                    <Typography color={colors.primary[100]} pl="5px">
                        {access}
                    </Typography>
                </Box>
            )
        }},
    ]

    return (
        <Box>
            <Header title="TEAM" subtitle="Managing Team Members" />
            <Box
                m="1rem"
                pr="1rem"
                height="70vh"
                width="100%"
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
                      backgroundColor: colors.primary[800],         //inner
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

                    },
                 }}
            >
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: 'access', sort: 'asc' }]
                        }
                    }}
                />
            </Box>
        </Box>
    )
}

export default Team