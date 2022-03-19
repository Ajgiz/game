import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export const ButtonBackMenu = () => {
  const navigate = useNavigate();
  return (
    <Button size="small" onClick={() => navigate("/")} variant="contained">
      <ArrowBackOutlinedIcon sx={{ padding: "0px 5px 0px 0px" }} /> Back to menu
    </Button>
  );
};
