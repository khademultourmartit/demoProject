"use client";

import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";
import { TabContext, TabPanel } from "@mui/lab";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

import {
  Button,
  ClickAwayListener,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import OneWay from "../oneway/OneWay";

interface FlightSearchBoxProps {
  type: string;
  setType: (value: string) => void;
  data2: any;
  value: string;
  setValue: (value: string) => void;
  fromSearchText: string;
  setFromSearchText: (value: string) => void;
  toSearchText: string;
  setToSearchText: (value: string) => void;
  from: string;
  setFrom: (value: string) => void;
  to: string;
  setTo: (value: string) => void;
  faddress: string;
  setfaddress: (value: string) => void;
  toAddress: string;
  setToAddress: (value: string) => void;
  fromSendData: any;
  setFromSendData: (data: any) => void;
  toSendData: any;
  setToSendData: (data: any) => void;
  adultCount: number;
  setAdultCount: (value: number) => void;
  childCount: number;
  setChildCount: (value: number) => void;
  infant: number;
  setInfant: (value: number) => void;
  result: any;
  setResult: (data: any) => void;
  className: string;
  setClassName: (value: string) => void;
  setChangeState: (value: boolean) => void;
  changeState: boolean;
  changeFrom: string;
  setChangeFrom: (value: string) => void;
  searchData: any;
  setSearchData: (data: any) => void;
  multiSearchData: any;
  setMultiSearchData: (data: any) => void;
  isLoaded: boolean;
  setClick: (value: boolean) => void;
  click: boolean;
  isModified: boolean;
  setIsModified: (value: boolean) => void;
}

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto #003566",
    outlineOffset: 2,
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "var(--gray)",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "radial-gradient(var(--primary-color),var(--primary-color) 50%,transparent 28%)",
    content: '""',
  },
});

const FlightSearchBox: React.FC<FlightSearchBoxProps> = ({
  type,
  setType,
  data2,
  value,
  setValue,
  fromSearchText,
  setFromSearchText,
  toSearchText,
  setToSearchText,
  from,
  setFrom,
  to,
  setTo,
  faddress,
  setfaddress,
  toAddress,
  setToAddress,
  fromSendData,
  setFromSendData,
  toSendData,
  setToSendData,
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  infant,
  setInfant,
  result,
  setResult,
  className,
  setClassName,
  setChangeState,
  changeState,
  changeFrom,
  setChangeFrom,
  searchData,
  setSearchData,
  multiSearchData,
  setMultiSearchData,
  isLoaded,
  setClick,
  click,
  isModified,
  setIsModified,
}) => {
  const handleClassName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassName(event.target.value);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);
  const [openClass, setOpenClass] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setResult(adultCount + childCount + infant);
  };

  const handleClickAway = () => {
    setOpen(false);
    setResult(adultCount + childCount + infant);
  };

  const flightClasses = [
    "Economy",
    " PremiumEconomy",
    "Business",
    "PremiumBusiness",
    "First",
    "PremiumFirst",
  ];

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          margin: "0 auto",
          borderRadius: "15px",
          boxShadow: "rgba(234, 232, 244, 0.95) 0px 0px 25px 0px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <TabContext value={value}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Box
                sx={{
                  paddingLeft: "30px",
                  bgcolor: "transparent",
                  color: "var(--mateBlack)",
                  width: "100%",
                  height: "fit-content",
                  display: "flex",
                  justifyContent: "flex-start",
                  "& button.Mui-selected": {
                    color: "var(--secondary-color)",
                  },
                }}
              >
                <RadioGroup
                  row
                  value={value}
                  onChange={handleChange}
                  sx={{
                    "&.Mui-checked": {
                      color: "var(--primary-color)",
                    },
                    ".MuiFormControlLabel-root": {
                      marginRight: "2px",
                    },
                    "& .MuiFormControlLabel-label": {
                      color: "var(--light-gray)",
                      fontWeight: "400",
                      fontSize: {
                        lg: "15px",
                        md: "12px",
                        sm: "10px",
                        xs: "9px",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        value === "oneway" ? "#A56EB4" : "#F2F0F9",
                      px: {
                        xs: "4px",
                        sm: "7px",
                        md: "10px",
                        lg: "10px",
                      },
                      mr: "3px",
                      borderRadius: "6px",
                    }}
                  >
                    <FormControlLabel
                      value="oneway"
                      disabled={click ? true : false}
                      control={
                        <Radio
                          sx={{
                            color: "#6E6996",
                            "&.Mui-checked": {
                              color: "#fff",
                              fontWeight: "400",
                            },
                          }}
                        />
                      }
                      sx={{
                        ".MuiFormControlLabel-label": {
                          color: value === "oneway" ? "#fff" : "#6E6996",
                        },
                      }}
                      label="One Way"
                    />
                  </Box>

                  <Box
                    sx={{
                      bgcolor: value === "return" ? "#A56EB4" : "#F2F0F9",
                      px: {
                        xs: "4px",
                        sm: "7px",
                        md: "10px",
                        lg: "10px",
                      },
                      mr: "3px",
                      borderRadius: "6px",
                    }}
                  >
                    <FormControlLabel
                      value="return"
                      disabled={click ? true : false}
                      control={
                        <Radio
                          sx={{
                            color: "#6E6996",
                            "&.Mui-checked": {
                              color: "#fff",
                              fontWeight: "400",
                            },
                          }}
                        />
                      }
                      sx={{
                        ".MuiFormControlLabel-label": {
                          color: value === "return" ? "#fff" : "#6E6996",
                        },
                      }}
                      label="Return"
                    />
                  </Box>

                  <Box
                    sx={{
                      bgcolor: value === "multicity" ? "#A56EB4" : "#F2F0F9",
                      px: {
                        xs: "4px",
                        sm: "7px",
                        md: "10px",
                        lg: "10px",
                      },
                      mr: "3px",
                      borderRadius: "6px",
                    }}
                  >
                    <FormControlLabel
                      value="multicity"
                      disabled={click ? true : false}
                      control={
                        <Radio
                          sx={{
                            color: "#6E6996",
                            "&.Mui-checked": {
                              color: "#fff",
                              fontWeight: "400",
                            },
                          }}
                        />
                      }
                      sx={{
                        ".MuiFormControlLabel-label": {
                          color: value === "multicity" ? "#fff" : "#6E6996",
                        },
                      }}
                      label="Multi City"
                    />
                  </Box>
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>

          <TabPanel value="oneway" style={{ padding: "" }}>
            <OneWay />
          </TabPanel>

          <TabPanel value="return" style={{ padding: "10px 20px 0px 20px" }}>
            Return
          </TabPanel>

          <TabPanel value="multicity" style={{ padding: "0px 20px 0px 20px" }}>
            Multicity
          </TabPanel>
        </TabContext>
      </Box>
    </ClickAwayListener>
  );
};

export default FlightSearchBox;
