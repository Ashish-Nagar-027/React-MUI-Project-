import Feed from "./components /Feed";
import Rightbar from "./components /Rightbar";
import Sidebar from "./components /Sidebar";
import Navbar from "./components /Navbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import AddPostIcon from "./components /AddPostIcon";
import { useState } from "react";

function App() {
  
   const [theme, setTheme] = useState('light')
  const mainTheme = createTheme({
    palette: {
      mode: theme
    },
  });

   
  return (
    <ThemeProvider theme={mainTheme}>
    <Box className="App" bgcolor={'background.default'} color={'text.primary'}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar theme={theme} setTheme={setTheme} />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPostIcon />
    </Box>
    </ThemeProvider>
  );
}

export default App;
