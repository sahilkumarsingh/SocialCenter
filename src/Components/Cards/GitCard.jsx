import * as React from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";

export default function GiftCard(props) {
  return (
    <>
      {props.userDetailsJson.map((user, index) => (
        <Grid container item xs={12}>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={2}
          >
            <img
              style={{ height: "100px", borderRadius: "50%" }}
              alt="user_image"
              src={user.avatar_url}
            ></img>
          </Grid>
          <Grid
            style={{
              backgroundColor: "#71DFE7",
              padding: "1%",
              borderRadius: "12px",
            }}
            item
            xs={6}
          >
            <Grid item xs={12}>
              <Typography variant="h5">Name: {user.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Location: {user.location}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Bio: {user.bio}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Followers: {user.followers}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
