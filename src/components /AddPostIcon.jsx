import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Stack } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { IconButton } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const AddPostIcon = () => {
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{ position: "fixed", bottom: 15, right: 15 }}
        onClick={(e) => setOpenModal(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={OpenModal}
        onClose={(e) => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ padding: "20px" }}
          width={400}
          height={280}
          borderRadius={5}
          bgcolor="white"
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            fontWeight={200}
            component="h2"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Create Post
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              marginTop: "10px",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <Typography id="modal-modal-title" variant="h6" component="span">
                Ashish Nagar
              </Typography>
            </Box>
            <TextField
              id="standard-multiline-static"
              multiline
              rows={2}
              placeholder="what's on your mind ?"
              variant="standard"
              width="80%"
            />

            <Stack direction="row">
              <IconButton>
                <AddPhotoAlternateIcon />
              </IconButton>
              <IconButton>
                <EmojiEmotionsIcon />
              </IconButton>
              <IconButton>
                <VideoCallIcon />
              </IconButton>
              <IconButton>
                <PersonAddAlt1Icon />
              </IconButton>
            </Stack>
          </Box>
          <Button variant="contained"  sx={{display:'flex' , margin:'auto', marginTop:'1rem', width:'100%',}}>Post</Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddPostIcon;
