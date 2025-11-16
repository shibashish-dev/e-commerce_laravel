import React from 'react'
import { Box, Typography, IconButton, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete"; // Import delete icon

const CartItem = ({ item, updateItemQuantity, removeItem }) => {

    return (
        <>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    gap: 2,
                    py: 3,
                    borderBottom: "1px solid #E5E7EB",
                }}
            >
                {/* Product Image */}
                <Box sx={{ width: 126, flexShrink: 0 }}>
                    <img
                        src={item.image}
                        alt="Perfume"
                        style={{
                            width: "100%",
                            borderRadius: "12px",
                            objectFit: "cover",
                        }}
                    />
                </Box>

                {/* Product Details */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", textAlign: { xs: "center", sm: "left" } }}>
                    <Typography variant="h6" fontWeight={600} color="black">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="gray">
                        {item.category.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        fontWeight={500}
                        color="gray"
                        sx={{
                            transition: "color 0.3s",
                            "&:hover": { color: "indigo" },
                        }}
                    >
                        {item.price}
                    </Typography>
                </Box>

                {/* Quantity Controls */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton sx={{ border: "1px solid #E5E7EB", borderRadius: "8px" }} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                        <RemoveIcon />
                    </IconButton>

                    <TextField
                        value={item.quantity}
                        variant="outlined"
                        sx={{
                            mx: 1,
                            width: "70px",
                            "& .MuiInputBase-input": {
                                textAlign: "center",
                                fontSize: "18px",
                                fontWeight: 600,
                            },
                        }}
                    />

                    <IconButton sx={{ border: "1px solid #E5E7EB", borderRadius: "8px" }} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                        <AddIcon />
                    </IconButton>
                </Box>

                {/* Total Price */}
                <Box sx={{ minWidth: 100, textAlign: "right" }}>
                    <Typography variant="h6" fontWeight="bold" color="gray" sx={{ transition: "color 0.3s", "&:hover": { color: "indigo" } }}>
                        {item.itemTotal}
                    </Typography>
                </Box>

                {/* Remove Item Button */}
                <IconButton
                    sx={{ color: "red", ml: 2 }}
                    onClick={() => removeItem(item.id)}
                    title="Remove Item"
                >
                    <DeleteIcon />
                </IconButton>

            </Box>

        </>
    )
}

export default CartItem
