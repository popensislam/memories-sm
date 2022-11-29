import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Avatar, TextField } from "@mui/material";
import { useStyles } from "./styles";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface FullDialogProps {
  openDialog: boolean;
  handleCloseDialog: any;
  onSendComment: Function;
  messages: [{}] | null;
  postId: string,
}

const FullDialog: React.FC<FullDialogProps> = ({
  openDialog,
  handleCloseDialog,
  onSendComment,
  messages,
  postId,
}) => {
  const classes = useStyles();

  const [message, setMessage] = useState("");
  return (
    <div>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        className={classes.dialogColumn}
      >
        <div>
          <AppBar sx={{ position: "relative", background: "#4A76A8" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseDialog}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Comments
              </Typography>
              <Button autoFocus color="inherit" onClick={() => onSendComment(message)}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            {messages?.map((message: any) => (
              <>
                <ListItem button>
                  <Avatar sx={{ marginRight: "10px" }} src={message?.userImg} />
                  <ListItemText
                    primary={message?.username}
                    secondary={message?.message}
                    className={classes.listItemText}
                  />
                </ListItem>
                <Divider />
              </>
            ))}
            {/* <ListItem button>
              <Avatar sx={{ marginRight: "10px" }} />
              <ListItemText primary="Isaisa" secondary="Titania" className={classes.listItemText} />
            </ListItem>
            <Divider /> */}
            {/* <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem> */}
          </List>
        </div>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="EDSDKCMSLDCMSLK"
        />
      </Dialog>
    </div>
  );
};

export default FullDialog;
