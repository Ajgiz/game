import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import "../styles/login.scss";
import { ButtonBackMenu } from "./ButtonBackMenu";

export const Login = () => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [succesfuly, setSuccesfuly] = React.useState("");

  const handleSubmit = async () => {
    if (!name) {
      setError("Input field is empty.");
      return;
    }
    if (name.length < 4) {
      setError("Min length is 5 symbols");
      return;
    }
    try {
      const user = await axios.post("http://localhost:3001/", { name: name });
      setSuccesfuly(
        "User find. Now your results games will save.If you want change user, again input data here."
      );
      localStorage.setItem("user", user.data.username);
      setError("");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div className="login">
      <div className="login__back">
        <ButtonBackMenu />
      </div>

      <div className="login__body">
        <h2>{succesfuly}</h2>
        <h2 className="login__title">Input your name.</h2>
        <TextField
          error={!!error}
          helperText={error}
          onChange={(e) => setName(e.target.value)}
          value={name}
          label="Name"
          variant="outlined"
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ margin: "40px 0px 0px" }}
        >
          Connect
        </Button>
      </div>
    </div>
  );
};
