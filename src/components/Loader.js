import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent black
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999, // stays on top
            }}
        >
            <CircularProgress size={80} />
        </Box>
    );
};

export default Loader;
