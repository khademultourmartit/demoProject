import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../../../public/assests/image/Logo/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import takaSign from "../../../public/assests/image/takaSign.svg";
import userProfile from "../../../public/assests/image/user/userProfile.svg";
import Image from "next/image";

const Header = () => {
  const [viewClicked, setViewClicked] = useState(false);
  const handleViewClick = () => {
    setViewClicked(!viewClicked);
  };

  return (
    <Box mb={5} mt={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={1.7}>
          <Box
            sx={{
              boxShadow: "rgba(234, 232, 244, 0.95) 0px 0px 25px 0px",
              backgroundColor: "#FFFFFF",
              textAlign: "center",
              cursor: "pointer",
            }}
            py={1.3}
          >
            <Image width={80} src={logo} alt="logo" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={10.3}>
          <Box
            sx={{
              boxShadow: "rgba(234, 232, 244, 0.95) 0px 0px 25px 0px",
              backgroundColor: "#FFFFFF",
              textAlign: "center",
              cursor: "pointer",
            }}
            py={1}
            px={1.5}
          >
            <Grid container spacing={2} display={"flex"} alignItems="center">
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                  className={"placeholderColor"}
                >
                  <SearchIcon
                    sx={{
                      color: "#B4B4CD",
                      position: "absolute",
                      top: "50%",
                      left: "7px",
                      transform: "translateY(-50%)",
                      fontSize: 15,
                    }}
                  />
                  <input
                    style={{
                      background: "#F2F0F9",
                      borderRadius: "3px",
                      border: "none",
                      outline: "none",
                      width: "100%",
                      height: "23px",
                      paddingLeft: "25px",
                      boxSizing: "border-box",
                      color: "#6E6996",
                      fontSize: "11px",
                      fontFamily: "Outfit",
                    }}
                    placeholder="Quick Search"
                    type="text"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
