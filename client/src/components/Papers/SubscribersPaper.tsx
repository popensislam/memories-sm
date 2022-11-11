import { Paper, Grid, Typography, List, ListItem, Avatar, ListItemText } from "@mui/material";

const SubscribersPaper = () => {
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
          Подписчики <span style={{ color: "#939393" }}>{123}</span>
        </Typography>
        <List sx={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
          <ListItem sx={{ display: "flex", flexDirection: "column", width: '25%' }}>
            <Avatar />
            <ListItemText>Text</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Paper>
  );
};

export default SubscribersPaper;
