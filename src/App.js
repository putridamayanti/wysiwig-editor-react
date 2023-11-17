import './App.css';
import {Box, Container, Grid, Typography} from "@mui/material";
import Editor from "./components/Editor";
import {useState} from "react";

function App() {
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
                  <Typography>
                      {content}
                  </Typography>
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
