import React from "react";
import "../styles/menu.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="menu__body">
        <Button
          variant="contained"
          onClick={() => navigate(`game`)}
          size="large"
        >
          Play
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate(`settings`)}
          size="large"
          color="success"
        >
          Settings
        </Button>
        <Button
          onClick={() => navigate(`login`)}
          color="warning"
          variant="contained"
          size="large"
        >
          Login
        </Button>
        {localStorage.getItem("user") && (
          <Button
            onClick={() => navigate(`records`)}
            color="warning"
            variant="contained"
            size="large"
          >
            My records
          </Button>
        )}
      </div>
    </div>
  );
};
