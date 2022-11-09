import { AppBar, Avatar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";

import memories from "../../assets/memories.png";

const NavBar = () => {
  const classes = useStyles();

  const user = null
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.memoriesTitle}
          variant="h2"
          align="center"
          component={Link}
          to="/"
        >
          Memories
        </Typography>
        <img
          className={classes.memoriesLogo}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user !== null ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt()}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
            <Button variant='contained' className={classes.logout} color='secondary'>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>Sign in</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
