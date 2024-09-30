import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../../../public/assests/image/Logo/logo.png";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import takaSign from "../../../public/assests/image/takaSign.svg";
import userProfile from "../../../public/assests/image/user/userProfile.svg";
import Image from "next/image";

const Header = () => {
  const [viewClicked, setViewClicked] = useState(false);
  const handleViewClick = () => {
    setViewClicked(!viewClicked);
  };

  return (
    <Box mb={5}>
      <Container
        maxWidth={"xl"}
        sx={{
          boxShadow: "rgba(234, 232, 244, 0.95) 0px 0px 25px 0px",
          borderRadius: 3,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid container display={"flex"} alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Box pt={0.2}>
                  <Image width={100} src={logo} alt="logo" />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box
                  sx={{
                    position: "relative",
                  }}
                  className={"placeholderColor"}
                >
                  {/* <SearchIcon
                    sx={{
                      color: "#B4B4CD",
                      position: "absolute",
                      top: "50%",
                      left: "10px",
                      transform: "translateY(-50%)",
                    }}
                  /> */}
                  <input
                    style={{
                      background: "#F2F0F9",
                      borderRadius: "5px",
                      border: "none",
                      outline: "none",
                      width: "100%",
                      height: "25px",
                      paddingLeft: "40px",
                      boxSizing: "border-box",
                      color: "#6E6996",
                      fontSize: "12px",
                      fontFamily: "Outfit",
                    }}
                    placeholder="Quick Search"
                    type="text"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Grid
              container
              spacing={2}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={1}>
                <Box
                  sx={{
                    width: { xs: "25px", sm: "30px" },
                    height: { xs: "25px", sm: "30px" },
                    backgroundColor: "#C3A0CD",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <NotificationsIcon
                    sx={{
                      color: "#fff",
                      fontSize: { xs: "18px", sm: "24px" },
                    }}
                  /> */}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    backgroundColor: "#6E0A82",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 8px",
                    alignItems: "center",
                    cursor: "pointer",
                    overflow: "hidden", // Hide overflow for smooth animation
                    transition: "all 2.5s ease-in-out", // Slower and smoother transition
                  }}
                  onClick={handleViewClick}
                >
                  {viewClicked ? (
                    <>
                      <Image
                        src={takaSign}
                        alt="taka"
                        style={{
                          order: 1,
                          transform: viewClicked
                            ? "translateX(0)"
                            : "translateX(-100%)",
                          opacity: viewClicked ? 1 : 0,
                          transition: "all 2.5s ease-in-out", // Slow and smooth transition
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Outfit",
                          fontSize: { xs: "10px", sm: "14px" },
                          order: 2,
                          transform: viewClicked
                            ? "translateX(0)"
                            : "translateX(-100%)",
                          opacity: viewClicked ? 1 : 0,
                          transition: "all 2.5s ease-in-out", // Slow and smooth transition
                        }}
                      >
                        - 925555.00
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontFamily: "Outfit",
                          fontSize: { xs: "10px", sm: "14px" },
                          order: 1,
                          transform: viewClicked
                            ? "translateX(100%)"
                            : "translateX(0)",
                          opacity: viewClicked ? 0 : 1,
                          transition: "all 2.5s ease-in-out", // Slow and smooth transition
                        }}
                      >
                        Click to View
                      </Typography>
                      <Image
                        src={takaSign}
                        alt="taka"
                        style={{
                          order: 2,
                          transform: viewClicked
                            ? "translateX(100%)"
                            : "translateX(0)",
                          opacity: viewClicked ? 0 : 1,
                          transition: "all 2.5s ease-in-out", // Slow and smooth transition
                        }}
                      />
                    </>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3.5}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Box>
                    <Image src={userProfile} alt="userProfile" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#6E0A82",
                        fontSize: { xs: "10px", sm: "11px" },
                        fontWeight: 600,
                        fontFamily: "Outfit",
                      }}
                    >
                      TM01001
                    </Typography>
                    <Typography
                      sx={{
                        color: "#6E6996",
                        fontSize: { xs: "9px", sm: "11px" },
                        fontFamily: "Outfit",
                      }}
                    >
                      Md Abdur Rakib Sarker
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
