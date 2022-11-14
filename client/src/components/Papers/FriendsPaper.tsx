import { Paper, Grid, Typography, Avatar } from "@mui/material";
import { FC } from "react";
import { IUser } from "../../store/interfaces";

const FriendsPaper: FC<{ currentUser: IUser | null }> = ({ currentUser }) => {
  return (
    <Paper elevation={3} sx={{ width: "100%" }}>
      <Grid
        sx={{
          p: "6px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#000000",
          }}
        >{`Подписано ${currentUser?.friends?.length} друзей`}</Typography>
        <Grid
          sx={{
            display: "flex",
            position: "relative",
            height: "40px",
          }}
        >
          {currentUser?.friends?.slice(0, 2).map((friend: any) => (
            <Avatar
              key={friend?.id}
              src={friend?.image}
              sx={{
                position: "absolute",
                right: "10px",
                height: "36px",
                width: "34px",
                border: "4px solid #fff",
              }}
            />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FriendsPaper;
