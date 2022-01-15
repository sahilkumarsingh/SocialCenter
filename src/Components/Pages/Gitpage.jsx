import React, { useState } from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Toolbar from "@mui/material/Toolbar";
import GiftCard from "../Cards/GitCard";
import GitSearchCard from "../Cards/GitSearchCard";

export default function Gitpage() {
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [userDetailsJson, setUserDetailsJson] = useState([]);
  const [searchUserDetails, setSearchUserDetails] = useState();
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    let x = await fetch(`https://api.github.com/users/${val}`);
    let JSON = await x.json();
    console.log(JSON);
    setSearchUserDetails(JSON);
    //setUserDetailsJson([...userDetailsJson, JSON]);
    setLoading(false);
  }
  return (
    <div>
      <Container style={{ marginLeft: "70px", backgroundColor: "#C2FFF9" }}>
        <Toolbar />
        <Grid container spacing={2}>
          {/* header */}
          <Grid container item xs={12}>
            <Grid
              item
              xs={4}
              style={{ display: "flex", justifyContent: "right" }}
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
              <form
                onSubmit={(e) => handleClick(e)}
                style={{ justifyContent: "space-between" }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  size="small"
                  value={val}
                  onChange={handleChange}
                />
                <LoadingButton
                  type="sumbit"
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
          </Grid>

          {/* header ENDS*/}
          {/* card */}
          {searchUserDetails && (
            <GitSearchCard userDetailsJson={searchUserDetails} />
          )}
          {/* {userDetailsJson && <GiftCard userDetailsJson={userDetailsJson} />} */}
          {/* card ends*/}
        </Grid>
      </Container>
    </div>
  );
}
