import { Paper, Grid, Typography, Avatar } from "@mui/material";

const FriendsPaper = () => {
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
        >{`Подписано ${12} друзей`}</Typography>
        <Grid
          sx={{
            display: "flex",
            position: "relative",
            height: "40px",
          }}
        >
          <Avatar
            sx={{
              position: "absolute",
              right: "10px",
              height: "36px",
              width: "34px",
              border: "4px solid #fff",
            }}
          />
          <Avatar
            sx={{
              position: "absolute",
              right: "40px",
              height: "36px",
              width: "34px",
              border: "4px solid #fff",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FriendsPaper;
