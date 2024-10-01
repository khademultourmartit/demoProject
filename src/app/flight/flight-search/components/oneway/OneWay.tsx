import { Box, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CloseIcon from "@mui/icons-material/Close";

function OneWay() {
  return (
    <>
      {/* from  */}
      <Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Grid
                container
                spacing={1}
                sx={{
                  border: "1px solid #D9D5EC",
                  borderRadius: "3px",
                }}
              >
                <Grid item xs={12} sm={6}>
                  <Box mb={1}>
                    <Typography
                      sx={{
                        color: "#9493BD",
                        fontSize: "12px",
                      }}
                      mb={1}
                    >
                      <FlightTakeoffIcon
                        sx={{
                          fontSize: "15px",
                          marginRight: "10px",
                        }}
                      />
                      From
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            background: "#F2F0F9",
                            color: "#A56EB4",

                            padding: "8px 5px",
                          }}
                        >
                          DAC
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#2D233C",
                            fontWeight: 500,
                            fontFamily: "Outfit",
                          }}
                        >
                          Dhaka, Bangladesh
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#6E6996",
                            fontFamily: "Outfit",
                          }}
                        >
                          Hazrat Shahjalal Intl Airport
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box mb={1}>
                    <Typography
                      sx={{
                        color: "#9493BD",
                        fontSize: "12px",
                      }}
                      mb={1}
                    >
                      <FlightTakeoffIcon
                        sx={{
                          fontSize: "15px",
                          marginRight: "10px",
                        }}
                      />
                      To
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            background: "#F2F0F9",
                            color: "#A56EB4",

                            padding: "8px 5px",
                          }}
                        >
                          BKK
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#2D233C",
                            fontWeight: 500,
                            fontFamily: "Outfit",
                          }}
                        >
                          Bangkok, Thailand
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#6E6996",
                            fontFamily: "Outfit",
                          }}
                        >
                          Suvarnabhumi Intl Airport
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default OneWay;
