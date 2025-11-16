import React from "react";
import { Snackbar, Alert, Box } from "@mui/material";

const Toast = ({ open, onClose, message, severity = "info", duration = 2000 , display}) => {
    return (
        <>
            <Box sx={{ width: 500, display:display }}>
                <Snackbar
                    open={open}
                    autoHideDuration={duration}
                    onClose={onClose}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    variant="outlined"
                >
                    <Alert
                        onClose={onClose}
                        severity={severity}
                        sx={{
                            width: "100%",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            padding: "16px",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            </Box>
        </>
    );
};

export default Toast;
