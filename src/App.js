import Feed from "./components /Feed";
import Rightbar from "./components /Rightbar";
import Sidebar from "./components /Sidebar";
import Navbar from "./components /Navbar";
import { Box, Stack,  } from "@mui/material";
import AddPostIcon from "./components /AddPostIcon";

function App() {
  


  return (
    <Box className="App">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPostIcon />
    </Box>
  );
}

export default App;
