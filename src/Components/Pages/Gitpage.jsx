import React, { useState } from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Toolbar from "@mui/material/Toolbar";
import GiftCard from "../Cards/GitCard";

export default function Gitpage() {
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDetailsJson, setUserDetailsJson] = useState([]);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  async function handleClick() {
    setLoading(true);
    let x = await fetch(`https://api.github.com/users/${val}`);
    let JSON = await x.json();
    console.log(JSON);
    // let arr = []
    // arr.push(JSON)
    setUserDetailsJson([...userDetailsJson, JSON]);
    setLoading(false);
  }
  return (
    <div>
      <Container style={{ marginLeft: "70px", backgroundColor: "#C2FFF9" }}>
        <Toolbar />
        <Grid container spacing={2}>
          {/* header */}
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <h1 style={{ color: "#FFC900", WebkitTextStroke: "1px black" }}>
              Hello
            </h1>
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <form style={{ justifyContent: "space-between" }}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={val}
                onChange={handleChange}
              />
              <LoadingButton
                onClick={handleClick}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#FFC900",
                  color: "black",
                }}
              >
                Show
              </LoadingButton>
            </form>
          </Grid>
          {/* header ENDS*/}
          {/* card */}
          {userDetailsJson && <GiftCard userDetailsJson={userDetailsJson} />}
          {/* card ends*/}
        </Grid>
      </Container>
    </div>
  );
}
