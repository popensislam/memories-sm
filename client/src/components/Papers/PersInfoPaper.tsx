import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";
import { FC } from "react";

// icons
import coord from "../../assets/icons/coord.svg";
import phone from "../../assets/icons/phone.svg";
import planet from "../../assets/icons/planet.svg";
import sticks from "../../assets/icons/sticks.svg";
import { useStyles } from "./style";

import { IUser } from "../../store/interfaces";

const PersInfoPaper: FC<{currentUser: IUser | null}> = ({ currentUser }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperWrapper} elevation={3}>
      <Grid container direction="column">
        <Typography className={classes.profileTItle} sx={{ pl: "16px" }}>
          {currentUser?.first_name + " " + currentUser?.last_name}
        </Typography>
        <Typography className={classes.activities} sx={{ pl: "16px" }}>
          {currentUser?.status}
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
            <ListItemText>{currentUser?.interestedIn}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <img src={phone} alt="info sticks" />
            </ListItemIcon>
            <ListItemText>{currentUser?.phone}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon sx={{ minWidth: "36px" }}>
              <img src={coord} alt="info sticks" />
            </ListItemIcon>
            <ListItemText>{currentUser?.country + " - " + currentUser?.city}</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Paper>
  );
};

export default PersInfoPaper;
