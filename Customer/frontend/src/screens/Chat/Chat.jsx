import React, { useState, useEffect } from "react";
import './chatbox.css';
import Header from "../../components/header";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText,
  Divider, Typography, Paper, Grid, TextareaAutosize, Button
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Footer from "../../components/Footer";



const useStyles = makeStyles((theme) => ({
  root: {
    margin: '17vh 10vh 0vh 10vh',
    display: 'flex',
    height: '80vh',
    overflow: 'hidden',
  },
  sidebar: {
    backgroundColor: theme.palette.background.paper,
    width: 240,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  container: {
    flex: 1,
    padding: theme.spacing(3),
  },
  chatContainer: {
    height: '500px', /* or any desired height */
    display: "flex",
    flexDirection: 'column',
    overflow: 'hidden',
  },
  
  messageContainer: {
    flex: '1',
    overflowY: 'scroll',
    padding: '10px',
  },
  
  messageInputContainer: {
    height: '80px', /* or any desired height */
    padding: '1px',
  }

}));


function Chat() {



  const [messageText, setMessageText] = useState('');
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const classes = useStyles();

  const [selectedChat, setSelectedChat] = React.useState(null);
  const [messages, setMessages] = useState([]);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };


  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("userData"));
    if (!res) {
    }
    else {
      console.log(res);
      setUser(res);
      setCurrentUser(res.user._id);
    }
  }, []);


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

  return (
    <>
      <Header />


      <div className={classes.root}>
        <Paper className={classes.sidebar}>
          <List>
            <ListItem button onClick={() => handleChatClick('Admin')}>
              <ListItemText primary="Admin" />
            </ListItem>
            <Divider />
          </List>
        </Paper>
        <Paper className={classes.container}>
          {selectedChat ? (
            <>

<div class="chat-container">
              <div className="messages-container">
                <div className="messages-scrollable">
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedChat}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    mi at mi lobortis, a lacinia lorem lacinia.
                  </Typography>
                  <Divider />
                  <Typography variant="subtitle1" gutterBottom>
                    {user.user.name}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Duis sit amet nisl dapibus, suscipit nibh et, suscipit justo. Ut
                    auctor euismod metus, eget dapibus velit efficitur eu.
                  </Typography>
                  <Divider />
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedChat}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Pellentesque faucibus augue vel enim venenatis, id convallis velit
                    elementum. Nulla nec ultrices mauris, a convallis mauris.
                  </Typography>
                  <Divider />
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedChat}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Pellentesque faucibus augue vel enim venenatis, id convallis velit
                    elementum. Nulla nec ultrices mauris, a convallis mauris.
                  </Typography>
                  <Divider />
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedChat}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Pellentesque faucibus augue vel enim venenatis, id convallis velit
                    elementum. Nulla nec ultrices mauris, a convallis mauris.
                  </Typography>
                  <Divider />
                  <Typography variant="subtitle1" gutterBottom>
                    {selectedChat}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Pellentesque faucibus augue vel enim venenatis, id convallis velit
                    elementum. Nulla nec ultrices mauris, a convallis mauris.
                  </Typography>
                  <Divider />
                </div>
              </div>

              <div className={classes.messageInputContainer}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={10}>
                    <TextareaAutosize
                      rowsMin={3}
                      placeholder="Type your message"
                      fullWidth
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                      <Send />
                    </Button>
                  </Grid>
                </Grid>
              </div>
              </div>
            </>
          ) : (
            <Typography variant="h6" gutterBottom>
              Please select a chat
            </Typography>
          )}
        </Paper>
      </div>

      <Footer />

    </>
  )

}

export default Chat;