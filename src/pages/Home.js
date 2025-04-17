import React from "react";
import StudentList from "../components/StudentList";
import Box from "@mui/material/Box";

const Home = () => {
    return (
        <Box sx={{ margin: 3 }}>
            <StudentList />
        </Box>
    );
};

export default Home;
