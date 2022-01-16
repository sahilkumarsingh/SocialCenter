import * as React from "react";
import { Container, Grid, TextField, Typography } from "@mui/material";

export default function GitSearchCard(props) {
  const { userDetailsJson } = props;
  return (
    <>
      <Grid key={userDetailsJson} container item xs={12} spacing={0}>
        {/* if the user not found.. */}
        {userDetailsJson.message === "Not Found" ? (
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom component="div">
              Not Found !
            </Typography>
          </Grid>
        ) : (
          // if user found
          <>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={2}
            >
              <a href={userDetailsJson.html_url}>
                <img
                  style={{ height: "90px", borderRadius: "50%" }}
                  alt="user_image"
                  src={userDetailsJson.avatar_url}
                ></img>
              </a>
            </Grid>
            <Grid
              style={{
                backgroundColor: "#71DFE7",
                padding: "1%",
                borderRadius: "12px",
              }}
              item
              xs={10}
            >
              <Grid item xs={12}>
                <Typography variant="h5">
                  Name: {userDetailsJson.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Location: {userDetailsJson.location}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Bio: {userDetailsJson.bio}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Followers: {userDetailsJson.followers}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  Public Repos: {userDetailsJson.public_repos}
                </Typography>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
