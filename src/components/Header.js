import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "./DrawerComponent";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = [
    "Home",
    "Skills",
    "Services",
    "Portfolio",
    "Projects",
    "Contact",
  ];

  return (
    <div>
      <AppBar
        sx={{
          background: "#063970",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "1rem", paddingLeft: "10%" }}>
            Lata Amenu
          </Typography>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              {" "}
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((pages, index) => (
                  <Tab key={index} label={pages} />
                ))}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
