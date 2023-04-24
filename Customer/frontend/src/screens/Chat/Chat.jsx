import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import axios from "axios";
import {
  Drawer,
  TextField,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';
// import Footer from "../../components/Footer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  chatArea: {
    flex: 1,
    height: '100vh',
    overflowY: 'auto',
    backgroundColor :'#ffffff',
    padding: theme.spacing(2),
  },
  messageBubble: {
    display: 'inline-block',
    padding: theme.spacing(1),
    borderRadius: '10px',
    marginBottom: theme.spacing(1),
  },
  sentBubble: {
    backgroundColor: theme.palette.primary.light,
    marginLeft: 'auto',
  },
  receivedBubble: {
    backgroundColor: theme.palette.grey[300],
    marginRight: 'auto',
  },
  messageDate: {
    fontSize: '0.8rem',
    color: theme.palette.text.secondary,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1,
   backgroundColor:'white',
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
    // '& .MuiOutlinedInput-root': {
    //   borderColor: 'white',
    // },
    // '& .MuiOutlinedInput-input': {
    //   color: 'white',
    // },
    // '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //   borderColor: 'white',
    // },
  },
  sendButton: {
    marginLeft: theme.spacing(1),
    color:'red',
    backgroundColor:'red'
  },
  
}));


function Chat(){

  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [user, setUser] = useState('');


  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("userData"));
    if (!res) {
    }
    else{
    console.log(res);
    setUser(res);
    }
  }, []);

   // replace with the ID of the currently logged-in user
   const currentUser = '(user._id).toISOString'

  useEffect(() => {
    axios.get('http://localhost:5000/chat/')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      sender: currentUser,
      message: messageText,
      createdAt: new Date().toISOString()
    };

    axios.post('http://localhost:5000/chat/', newMessage)
      .then(response => {
        setMessages([...messages, response.data]);
        setMessageText('');
      })
      .catch(error => {
        console.log(error);
      });
  };

    return(
        <>
        
          

        <div className={classes.root}>
      
      <div className={classes.chatArea}>
        <List>
          {messages.map(message => (
            <ListItem key={message._id}>
              <ListItemAvatar>
                <Avatar>{message.sender.slice(0, 1)}</Avatar>
              </ListItemAvatar>
              <div
                className={`${classes.messageBubble} ${message.sender === currentUser ? classes.sentBubble : classes.receivedBubble}`}
              >
                <ListItemText primary={message.message} />
                <div className={classes.messageDate}>{new Date(message.createdAt).toLocaleString()}</div>
              </div>
            </ListItem>
          ))}
        </List>
        {user.user._id}
        {user.user.name}
        <Box className={classes.inputContainer}>
      <TextField
        className={classes.textField}
        variant="outlined"
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
        placeholder="Type your message"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton className={classes.sendButton} onClick={handleSubmit}>
                <Send style={{ color: 'white' }} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
            </div>
            </div>
       
        
        
        {/* <Footer/> */}

        </>
    )

}

export default Chat;