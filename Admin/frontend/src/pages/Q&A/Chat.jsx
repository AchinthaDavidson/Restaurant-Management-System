import React, { useState, useEffect } from 'react';
import Niv from '../../components/Niv';
import Notification from "../../components/Notification";
import { makeStyles } from '@material-ui/core/styles';
import {
  List, ListItem, ListItemText,
  Divider, Typography, Paper, Grid, TextareaAutosize, Button
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '90vh',
    overflow: 'hidden',
  },
  sidebar: {
    backgroundColor: theme.palette.background.paper,
    overflowY: 'scroll',
    width: 240,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  container: {
    flex: 1,
    padding: theme.spacing(3),
    overflow: 'auto',
  },
}));


const Chat = () => {

  const classes = useStyles();

  const [selectedChat, setSelectedChat] = React.useState(null);
  const [messages, setMessages] = useState([]);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  useEffect(() => {
    axios.get('http://localhost:8070/chat/admin')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);





  return (
    <div>
      <Niv name='Customer Support' />
      <Notification/>
      <div className='data'>

        <div className={classes.root}>
          <Paper className={classes.sidebar}>
            <List>
              <ListItem button onClick={() => handleChatClick('Chat 1')}>
                <ListItemText primary="Chat 1" />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => handleChatClick('Chat 2')}>
                <ListItemText primary="Chat 2" />
              </ListItem>
              <Divider />
              <ListItem button onClick={() => handleChatClick('Chat 3')}>
                <ListItemText primary="Chat 3" />
              </ListItem>
              <Divider />

            </List>
          </Paper>
          <Paper className={classes.container}>
            {/* Add chat messages container */}
            {selectedChat ? (
              <>
                <Typography variant="h6" gutterBottom>
                  {selectedChat} Messages
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  Sender 1
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                  mi at mi lobortis, a lacinia lorem lacinia.
                </Typography>
                <Divider />
                <Typography variant="subtitle1" gutterBottom>
                  Sender 2
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Duis sit amet nisl dapibus, suscipit nibh et, suscipit justo. Ut
                  auctor euismod metus, eget dapibus velit efficitur eu.
                </Typography>
                <Divider />
                <Typography variant="subtitle1" gutterBottom>
                  Sender 1
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Pellentesque faucibus augue vel enim venenatis, id convallis velit
                  elementum. Nulla nec ultrices mauris, a convallis mauris.
                </Typography>
                <Divider />

                <Grid item xs={12} md={4}>
                  <TextareaAutosize rowsMin={3} placeholder="Type your message" fullWidth />
                  <Button variant="contained" color="primary" fullWidth>
                    Send
                  </Button>
                </Grid>

              </>


            ) : (
              <Typography variant="h6" gutterBottom>
                Please select a chat
              </Typography>
            )}


          </Paper>
        </div>





      </div>
    </div>
  );
};

export default Chat;