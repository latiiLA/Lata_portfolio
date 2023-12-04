import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@material-ui/icons/Home";

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const PAGES = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Projects",
    "Contact",
  ];

  return (
    <div>
      <Drawer
        anchor="right"
        width="25%"
        sx={{ marginLeft: "auto" }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        // PaperProps={{
        //   sx: {
        //     backgroundColor: "primary",
        //     color: "white",
        //   },
        // }}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box>
        <IconButton
          sx={{
            color: "white",
            width: "100%",
          }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default DrawerComponent;
