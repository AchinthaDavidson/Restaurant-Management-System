
// import React, { useState, useEffect } from "react";
// import './chatbox.css';
// import Header from "../../components/header";
// import axios from "axios";
// import {
//   Grid,
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   TextField,
//   Button,
//   Divider,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Paper,
// } from "@mui/material";
// import styled from 'styled-components';
// // import { Send } from '@material-ui/icons';
// import Footer from "../../components/Footer";

{/*import React, { useState, useEffect } from "react";
import './chatbox.css';
import Header from "../../components/header";
import axios from "axios";
import {
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
import styled from 'styled-components';
// import { Send } from '@material-ui/icons';
import Footer from "../../components/Footer";
>>>>>>> d8509b720cb8b859feb416324126df67412fc8a9

// const MessageWrapper = styled(Box)(({ isSentByCurrentUser }) => ({
//   display: 'flex',
//   flexDirection: isSentByCurrentUser ? 'row-reverse' : 'row',
//   alignItems: 'flex-end',
//   marginBottom: "16px",
// }));

// const MessageBubble = styled(Box)(({ isSentByCurrentUser }) => ({
//   maxWidth: '80%',
//   padding: "8px",
//   marginRight: isSentByCurrentUser ? "10px" : "0",
//   borderRadius: isSentByCurrentUser ? '20px 20px 0 20px' : '20px 20px 20px 0',
//   backgroundColor: isSentByCurrentUser ? '#0084ff' : '#f0f0f0',
//   color: isSentByCurrentUser ? '#fff' : '#333',
//   alignSelf: isSentByCurrentUser ? 'flex-end' : 'flex-start',
//   wordWrap: 'break-word',
//   boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
// }));

// const MessageHeader = styled(Box)(() => ({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: "5px",
// }));

// const MessageSender = styled(Typography)(() => ({
//   fontSize: '0.8rem',
//   fontWeight: 'bold',
//   marginRight: "8px",
// }));

// const MessageTime = styled(Typography)(() => ({
//   fontSize: '0.7rem',
//   color: '#666',
// }));



// function Chat() {




//   const [message, setmessage] = useState('');

//   const currentUser = JSON.parse(localStorage.getItem("userData"));

//   const rec = "644df7666512eabcfd11aa19"




//   const [messages, setMessages] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:5000/chat/')
//       .then(res => {
//         setMessages(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newMessage = {
//       sender: currentUser.user._id,
//       message: message,
//       reply: rec,
//       createdAt: new Date()
//     };



//     axios.post('http://localhost:5000/chat/', newMessage)
//       .then(() => {
//         window.location.reload(false);
//         setmessage('')
//       }).catch(error => {
//         console.log(error);
//       });
//   };


//   return (
//     <>
//       <Header />


//       <Box sx={{
//         flexGrow: 1,
//         margin: "127px 30px 0 30px",
//         backgroundColor: "#0000",
//         padding: "20px",
//         color: "#ffff",
//         borderRadius: "20px",
//       }}>


//         <Grid container spacing={2}>
//           <Grid item xs={4}>
//             <Box sx={{ height: "70vh"}}>
//               <List>

//                 <Paper variant="outlined" square elevation={0} sx={{backgroundColor: "#d10b0b", marginRight: "10px" }}>
//                   <ListItem  >
//                     <ListItemText primary="Chat with Admin" sx={{ color: "#ffff"}} />
//                   </ListItem>
//                 </Paper>

//               </List>
//             </Box>
//           </Grid>
//           <Grid item xs={8}>
//             <Box sx={{ height: "calc(70vh - 64px)", overflowY: "scroll" }}>


//               <div >
//                 {messages.filter(
//                   (m) =>
//                     (m.sender === currentUser.user._id && m.reply === rec) ||
//                     (m.reply === currentUser.user._id && m.sender === rec)
//                 ).map((message) => (
//                   <MessageWrapper
//                     key={message._id}
//                     isSentByCurrentUser={message.sender === currentUser.user._id}
//                   >
//                     <MessageBubble
//                       isSentByCurrentUser={message.sender === currentUser.user._id}
//                     >
//                       <MessageHeader>
//                         <MessageSender>{message.sender}</MessageSender>
//                         <MessageTime>
//                           {new Date(message.createdAt).toLocaleString()}
//                         </MessageTime>
//                       </MessageHeader>
//                       {message.message}
//                     </MessageBubble>
//                   </MessageWrapper>
//                 ))}
//               </div>


//             </Box>
//             <Box sx={{ display: "flex", mt: 2 }}>
//               <TextField
//                 fullWidth
//                 // placeholder={user.user._id}
//                 variant="outlined"
//                 label="Type your message here"
//                 value={message}
//                 onChange={(e) => setmessage(e.target.value)}
//                 sx={{ mr: 2, backgroundColor: "#8a8a8a" }}
//               />
//               <Button variant="contained" onClick={handleSubmit}>
//                 Send
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>



//       </Box>

//       <Footer />



//     </>
//   )

// }

// export default Chat;*/}
