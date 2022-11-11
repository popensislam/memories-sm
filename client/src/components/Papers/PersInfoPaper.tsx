import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography
} from "@mui/material";
import { FC } from "react";

// icons
import coord from "../../assets/icons/coord.svg";
import phone from "../../assets/icons/phone.svg";
import planet from "../../assets/icons/planet.svg";
import sticks from "../../assets/icons/sticks.svg";
import { useStyles } from "./style";

const PersInfoPaper = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.paperWrapper} elevation={3}>
      <Grid container direction="column">
        <Typography className={classes.profileTItle} sx={{ pl: "16px" }}>
          User name
        </Typography>
        <Typography className={classes.activities} sx={{ pl: "16px" }}>
          His activities
        </Typography>
        <Divider />
        <Typography className={classes.aboutMe} sx={{ pl: "16px" }}>
          About me
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <img src={sticks} alt="info sticks" />
            </ListItemIcon>
            <ListItemText>Tips, Tricks</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <img src={planet} alt="info sticks" />
            </ListItemIcon>
            <ListItemText>Planet, Tricks</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <img src={phone} alt="info sticks" />
            </ListItemIcon>
            <ListItemText>Phone, Tricks</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <img src={coord} alt="info sticks" />
            </ListItemIcon>
            <ListItemText>Coordinate, Tricks</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Paper>
  );
};

export default PersInfoPaper;
