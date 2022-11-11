import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

// icons
import home from "../../assets/icons/homeIcon.svg";
import messages from "../../assets/icons/messages.svg";
import friends from "../../assets/icons/friends.svg";
import news from "../../assets/icons/news.svg";
import musics from "../../assets/icons/musics.svg";

import { useStyles } from "./style";

export const sideBarDatas = [
  { title: "Profile", icon: home, link: "/" },
  { title: "News", icon: news, link: "/news", notification: 1 },
  { title: "Messages", icon: messages, link: "/messages", notification: 1 },
  { title: "Friends", icon: friends, link: "/friends", notification: 1 },
  { title: "Musics", icon: musics, link: "/musics" },
];

const SideBar = () => {
  const classes = useStyles();

  return (
    <Toolbar sx={{ alignItems: "flex-start" }}>
      <List>
        {sideBarDatas.map((item) => (
          <ListItem
            key={item.title}
            sx={{
              "& .active": {
                textDecoration: "none",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemButton component={NavLink} to={item.link} sx={{ position: "relative" }}>
              <ListItemIcon>
                <img width="18px" height="16px" src={item.icon} alt="home icon" />
              </ListItemIcon>
              <ListItemText className={classes.listText}>{item.title}</ListItemText>
              <div className={classes.notif} style={{ opacity: item.notification ? "1" : "0" }}>
                {item.notification}
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Toolbar>
  );
};

export default SideBar;
