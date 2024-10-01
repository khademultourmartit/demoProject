import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../../../public/assests/image/Logo/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import takaSign from "../../../public/assests/image/takaSign.svg";
import userProfile from "../../../public/assests/image/user/userProfile.svg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
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
            py={1.2}
          >
            <Image width={80} src={logo} alt="logo" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={10.3}>
          <Box
            sx={{
              boxShadow: "rgba(234, 232, 244, 0.95) 0px 0px 25px 0px",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
            }}
            py={0.9}
            px={1.1}
          >
            <Grid container spacing={2} display={"flex"} alignItems={"center"}>
              <Grid item xs={12} sm={6} md={2.5}>
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
                      height: "22px",
                      paddingLeft: "25px",
                      boxSizing: "border-box",
                      color: "#6E6996",
                      fontSize: "10px",
                      fontFamily: "Outfit",
                    }}
                    placeholder="Quick Search"
                    type="text"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <button
                      style={{
                        backgroundColor: "#F2F0F9",
                        color: "#6E6996",
                        fontSize: "9px",
                        border: "none",
                        height: "18px",
                        padding: "0px 8px",
                        borderRadius: "2px",
                        fontFamily: "Outfit",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      Reservation
                      <ErrorOutlineIcon
                        sx={{
                          fontSize: "12px",
                          marginLeft: "4px",
                        }}
                      />
                    </button>
                  </Box>
                  <Box>
                    <button
                      style={{
                        backgroundColor: "#F2F0F9",
                        color: "#6E6996",
                        fontSize: "9px",
                        border: "none",
                        height: "18px",
                        padding: "0px 8px",
                        borderRadius: "2px",
                        fontFamily: "Outfit",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      Accounts
                      <ErrorOutlineIcon
                        sx={{
                          fontSize: "12px",
                          marginLeft: "4px",
                        }}
                      />
                    </button>
                  </Box>
                  <Box>
                    <button
                      style={{
                        backgroundColor: "#F2F0F9",
                        color: "#6E6996",
                        fontSize: "9px",
                        border: "none",
                        height: "18px",
                        padding: "0px 8px",
                        borderRadius: "2px",
                        fontFamily: "Outfit",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      KAM
                      <ErrorOutlineIcon
                        sx={{
                          fontSize: "12px",
                          marginLeft: "4px",
                        }}
                      />
                    </button>
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={6.5}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Box>
                    <button
                      style={{
                        backgroundColor: "#B4B4CD",
                        color: "#FFFFFF",
                        fontSize: "10px",
                        border: "none",
                        height: "22px",
                        padding: "0px 8px",
                        borderRadius: "2px",
                        fontFamily: "Outfit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        width: "90px",
                      }}
                    >
                      Cash{" "}
                      <span
                        style={{
                          backgroundColor: "#CBC7DF",
                          marginLeft: "5px",
                          width: "15px",
                          height: "15px",
                          fontSize: "10px",
                          borderRadius: "50px",
                        }}
                      >
                        {" "}
                        &#2547;{" "}
                      </span>
                    </button>
                  </Box>
                  <Box>
                    <button
                      style={{
                        backgroundColor: "#B4B4CD",
                        color: "#FFFFFF",
                        fontSize: "10px",
                        border: "none",
                        height: "22px",
                        padding: "0px 8px",
                        borderRadius: "2px",
                        fontFamily: "Outfit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        width: "90px",
                      }}
                    >
                      Credit{" "}
                      <span
                        style={{
                          backgroundColor: "#CBC7DF",
                          marginLeft: "5px",
                          width: "15px",
                          height: "15px",
                          fontSize: "10px",
                          borderRadius: "50px",
                        }}
                      >
                        {" "}
                        &#2547;{" "}
                      </span>
                    </button>
                  </Box>
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
