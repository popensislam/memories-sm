import React, { FC } from "react";
import { Paper, Grid, Typography, List, ListItem, Avatar, ListItemText } from "@mui/material";
import { IUser } from "../../store/interfaces";

const SubscribersPaper: FC<{ currentUser: IUser | null }> = ({ currentUser }) => {
  return (
    <Paper elevation={3} sx={{ width: "100%" }}>
      <Grid
        sx={{
          p: "6px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#000000",
          }}
        >
          Подписчики <span style={{ color: "#939393" }}>{currentUser?.subscribers?.length}</span>
        </Typography>
        <List sx={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
          {currentUser?.subscribers?.slice(0, 8).map((friend: any) => (
            <ListItem sx={{ display: "flex", flexDirection: "column", width: "25%" }}>
              <Avatar src={friend?.image} />
              <ListItemText>{friend?.username}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Paper>
  );
};

export default SubscribersPaper;
