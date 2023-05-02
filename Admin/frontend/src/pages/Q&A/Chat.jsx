import React, { useState, useEffect } from 'react';
import Niv from '../../components/Niv';
import Notification from "../../components/Notification";
import axios from 'axios';
import {
  Avatar,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { HiReply } from "react-icons/hi";
import styled from 'styled-components';

const MessageWrapper = styled(Box)(({ isSentByCurrentUser }) => ({
  display: 'flex',
  flexDirection: isSentByCurrentUser ? 'row-reverse' : 'row',
  alignItems: 'flex-end',
  marginBottom: "16px",
}));

const MessageBubble = styled(Box)(({ isSentByCurrentUser }) => ({
  maxWidth: '80%',
  padding: "8px",
  marginRight: isSentByCurrentUser ? "10px" : "0",
  borderRadius: isSentByCurrentUser ? '20px 20px 0 20px' : '20px 20px 20px 0',
  backgroundColor: isSentByCurrentUser ? '#0084ff' : '#f0f0f0',
  color: isSentByCurrentUser ? '#fff' : '#333',
  alignSelf: isSentByCurrentUser ? 'flex-end' : 'flex-start',
  wordWrap: 'break-word',
  boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
}));

const MessageHeader = styled(Box)(({ }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: "5px",
}));

const MessageSender = styled(Typography)(({ }) => ({
  fontSize: '0.8rem',
  fontWeight: 'bold',
  marginRight: "8px",
}));

const MessageTime = styled(Typography)(({ }) => ({
  fontSize: '0.7rem',
  color: '#666',
}));



const Chat = () => {

  const [message, setmessage] = useState('');
  const [selectedChat, setSelectedChat] = React.useState(null);
  const [receiverId, setReceiverId] = useState(null);
  const currentUser = '644df7666512eabcfd11aa19'

  const handleSelectChat = (sender) => {
    setSelectedChat(sender);
    setReceiverId(sender)
  };

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8070/chat/')
      .then(res => {
        setMessages(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {

      message: message,
      sender: currentUser,
      reply: receiverId,
      createdAt: new Date()
    };



    axios.post('http://localhost:8070/chat/', newMessage)
      .then(() => {
        window.location.reload(false);
        setmessage('')
      }).catch(error => {
        console.log(error);
      });
  };

  const uniqueSenders = Array.from(new Set(messages
    .filter((m) => m.sender !== currentUser) // exclude "Admin"
    .map((m) => m.sender)
  ));





  return (
    <div>
      <Niv name='Customer Support' />
      <Notification />
      <div className='data'>

        <Box sx={{
          flexGrow: 1,
          margin: "10px 30px 0 10px",
          backgroundColor: "#ffffff",
          padding: "20px",
          color: "#ffff",
          borderRadius: "20px",
        }}>


          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ height: "70vh", overflowY: "scroll" }}>
                <List>
                  {uniqueSenders.map((sender) => (
                    <Paper variant="outlined"
                      square elevation={0}
                      sx={{
                        backgroundColor: "#2f0048",
                        margin: "10px",
                        borderRadius: "10px"
                      }}
                      onClick={() => handleSelectChat(sender)}>
                      <ListItem key={sender} >
                        <Avatar
                          alt={sender}
                          src="/static/images/avatar/1.jpg"
                          sx={{ width: 40, height: 40, marginRight: "10px" }}
                        />
                        <ListItemText primary={sender} sx={{ color: "#ffff" }} />
                      </ListItem>
                    </Paper>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ height: "calc(70vh - 64px)", overflowY: "scroll" }}>
                {selectedChat && (

                  <div >
                    {messages.filter((m) => m.sender === selectedChat || m.reply === selectedChat)
                      .map((messages) => (
                        <>
                         
                          <MessageWrapper
                            key={messages._id}
                            isSentByCurrentUser={messages.sender === currentUser}
                          >
                            <MessageBubble
                              isSentByCurrentUser={messages.sender === currentUser}
                            >
                              <MessageHeader>
                                <MessageSender>{messages.sender}</MessageSender>
                                <MessageTime>
                                  {new Date(messages.createdAt).toLocaleString()}
                                </MessageTime>
                              </MessageHeader>
                              {messages.message}
                            </MessageBubble>
                            <HiReply />
                          </MessageWrapper>

                        </>
                      ))}
                  </div>

                )}
              </Box>
              <Box sx={{ display: "flex", mt: 2, }}>
                <TextField
                  fullWidth
                  // placeholder={user.user._id}
                  variant="outlined"
                  label="Type your message here"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  sx={{ mr: 2, }}
                />
                <Button variant="contained"
                  onClick={handleSubmit}
                  sx={{ backgroundColor: "#2f0048" }}
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>



        </Box>




      </div>
    </div>
  );
};

export default Chat;