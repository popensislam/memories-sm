import React, { FormEvent, Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Button,
    Dialog,
    ListItemText,
    ListItem,
    List,
    Divider,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Slide,
    Avatar,
    Box,
    TextField,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'

import { useStyles } from './styles'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />
})

interface FullDialogProps {
    openDialog: boolean
    handleCloseDialog: any
    onSendComment: Function
    messages: [{}] | null
    postId: string
}

const FullDialog: React.FC<FullDialogProps> = ({ openDialog, handleCloseDialog, onSendComment, messages, postId }) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [message, setMessage] = useState('')

    const handleLink = (username: string): void => {
        navigate(`/${username}`)
    }

    const handleSubmutComment = (e: FormEvent) => {
        e.preventDefault()
        onSendComment(message)
        setMessage('')
    }

    return (
        <div>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
                className={classes.dialogColumn}
            >
                <div style={{ overflow: 'hidden' }}>
                    <AppBar sx={{ position: 'relative', background: '#4A76A8' }}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleCloseDialog} aria-label="close">
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
                    <List sx={{ overflow: 'scroll', height: 'calc(100% - 75px)' }}>
                        {messages?.map((message: any, i: number) => (
                            <Fragment key={i}>
                                <ListItem button>
                                    <Avatar
                                        onClick={() => handleLink(message?.username)}
                                        sx={{ marginRight: '10px' }}
                                        src={message?.userImg}
                                    />
                                    <ListItemText
                                        primary={message?.username}
                                        secondary={message?.message}
                                        className={classes.listItemText}
                                    />
                                </ListItem>
                                <Divider />
                            </Fragment>
                        ))}
                    </List>
                </div>
                <Box component="form" onSubmit={handleSubmutComment}>
                    <TextField
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write down your comment"
                        required
                        sx={{ width: '100%' }}
                    />
                </Box>
            </Dialog>
        </div>
    )
}

export default FullDialog
