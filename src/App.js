import './App.css';
import {Box, Container, Grid, Typography} from "@mui/material";
import Editor from "./components/Editor";
import {useEffect, useRef, useState} from "react";
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import ReactPlayer from 'react-player';

function App(props) {
    const [content, setContent] = useState('');

  return (
      <Container>
          <Box height={100}/>
          <Typography variant="h3">Wysiwig</Typography>
          <Box height={80}/>
          <Grid container spacing={4}>
              <Grid item lg={6}>
                    <Editor onChange={setContent} value={content}/>
              </Grid>
              <Grid item lg={6}>
                 <Box sx={{
                     'img': {
                         width: '100%'
                     }
                 }}>
                     <div dangerouslySetInnerHTML={{ __html: content }}/>
                 </Box>
              </Grid>
          </Grid>
          <Typography variant="h4">Source Code</Typography>
          <Typography>
              {content}
          </Typography>
      </Container>
  );
}

export default App;
