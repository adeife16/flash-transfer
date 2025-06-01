import {
  Grid,
  IconButton,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import CommonNav from "../../components/CommonNav";
import Layout from "../../components/Layout";

import "../../font.css/index.css"

import wallet from "../../assests/Images/waallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import sett from "../../assests/Images/sett.png";


import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import Footer from "../../components/AppFooter";
import { useStyles } from "../../Styles";
import up from "../../assests/Images/up.png";
import down from "../../assests/Images/down.png";
import send from "../../assests/Images/send.png";
import write from "../../assests/Images/write.png";

import add from "../../assests/Images/add.png";
import chart from "../../assests/Images/chart.png";
import Cimg1 from "../../assests/Images/currency1.png";
import Cimg2 from "../../assests/Images/currency2.png";
import Cimg3 from "../../assests/Images/currency3.png";
import Cimg4 from "../../assests/Images/currency4.png";
import Cimg5 from "../../assests/Images/currency5.png";
import Cimg6 from "../../assests/Images/currency6.png";
import Cimg7 from "../../assests/Images/currency7.png";
import Cimg8 from "../../assests/Images/currency8.png";
import Cimg9 from "../../assests/Images/currency9.png";
import Cimg10 from "../../assests/Images/currency10.png";
import Cimg11 from "../../assests/Images/currency11.png";
import Cimg12 from "../../assests/Images/currency12.png";
import Cimg13 from "../../assests/Images/currency13.png";

import round from "../../assests/Images/round.png";
import star from "../../assests/Images/star.png";
import { Box, margin } from "@mui/system";
import AppButton from "../../components/AppButton";
export interface Props {
  event?: any;
}
const CurrencyUpate = () => {
  const [age, setAge] = React.useState("");

  const handleChange = ({ event }: Props) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  const TableData = [
    {
      crruncy: Cimg1,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "Flash",

      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg2,

      amount: "233.66",
      updown: up,
      color: "#34A853",
      Description: "US Dollar",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg3,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "Bitcoin",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg4,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "Euro",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg5,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "Ethereum",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg6,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "british pound",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg7,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "Bnb",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg8,

      amount: "233.66",
      updown: up,
      color: "#34A853",
      Description: "japanese yen",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg9,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "canadian dollar",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg10,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "Matic",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg11,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "Swiss franc",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg12,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "AED",
      change: "-0.03%",
      chart: chart,
    },
    {
      crruncy: Cimg13,

      amount: "233.66",
      updown: down,
      color: "red",
      Description: "japanese yen",
      change: "-0.03%",
      chart: chart,
    },
  ];
  return (
    <Grid>
      <Layout>
        
      {/* <Grid>
        <CommonNav login2="Login" Signup2="Signup" priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" />
      </Grid> */}
      <Grid
        container
        sx={{

          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F7FDFF",
        }}
      >
        <Grid

          item
          md={9.8}
          sm={10}
          xs={11}
          sx={{

            transform:{lg:"scalex(0.9)",xs:"none"},
            marginTop: { lg: "90px", xs: "21px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img
              src={add}
              style={{ marginRight: "5px", width: "12px", height: "12px" }}
            />
            <Typography className={classes.Lupdate}>Add Currency</Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img
              src={round}
              style={{ marginRight: "5px", width: "24px", height: "24px" }}
            />
            <Typography className={classes.Lupdate}>
              Last update jan 20,2022
            </Typography>
          </Box>
        </Grid>

        <Grid
          md={10}
          xs={12}
          sm={10}
          sx={{
            marginTop: "33px",
            marginBottom: "72px",
            transform:{lg:"scalex(0.9)",xs:"none"},
          }}
        >
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  "& th": {
                    border: "0 !important",
                    color: "white",
                    height: { md: "100px", xs: "20px" },

                  },
                }}
              >
                <TableRow
                  sx={{
                    backgroundColor: "#000000",
                  }}
                >
                  <TableCell align="center" className={classes.tableheader}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      Favorites
                      <Box sx={{ display: { lg: "flex", xs: "none" } }}>


                        <Switch
                          // labelPlacement="end"
                          sx={{
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "#E5E7EB",
                            },
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: "#5D5FEF",
                              // '&:hover': {
                              //   backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
                            },
                          }}
                          // {...label}
                          defaultChecked
                        />
                      </Box>
                      <Box sx={{ display: { lg: "none", xs: "flex" } }}>
                        <Switch
                          // labelPlacement="end"
                          size="small"
                          sx={{

                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "#E5E7EB",
                            },
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: "#5D5FEF",
                              // width: "22px", height: "12px",
                              // '&:hover': {
                              //   backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
                            },
                          }}
                          // {...label}
                          defaultChecked
                        />
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    align="center"
                  >
                    <Box sx={{ display: { lg: "flex", xs: "none" } }} className={classes.tableheader}>


                    </Box>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    align="left"

                    className={classes.tableheader}
                  >
                    <Box sx={{ marginLeft: { lg: "0px", xs: "-30px" }, }}>

                      Amount
                    </Box>
                  </TableCell>
                  <TableCell align="center" className={classes.tableheader}>
                    <Box sx={{ marginLeft: { lg: "0px", xs: "-30px" }, }}>

                      Change(24h)
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      display: { md: "flex", xs: "none" },
                      alignItems: "center",
                      justifyContent: "center ",
                    }}
                    align="center"
                    className={classes.tableheader}
                  >
                    <Box>Chart(24h)</Box>
                  </TableCell>
                  <TableCell align="center" className={classes.tableheader}>
                    <IconButton
                      sx={{
                        backgroundColor: "#5D5FEF",
                        height: "30px",
                        borderRadius: "4px",
                        width: "32.53px",
                      }}
                    >
                      <img src={write} />
                    </IconButton>
                    {/* <AppButton title="Send" backgroundColor="#5D5FEF" /> */}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {TableData.map((i) => (
                  <TableRow
                    sx={{
                      "& tr": {
                        // backgroundColor: "red",
                        borderBottom: "none  !important",

                        // borderBottom: "0px !important",
                        // color: "white",
                        // height: "100px",
                      },
                    }}
                    style={{
                      borderBottom: "none ",
                      backgroundColor: "#FFFFFF",

                    }}
                  // sx={{  borderBottom: "none !important"  }}
                  // key={i.name}
                  // sx={{ "&:last-child td, &:last-child th": {  borderBottom: "none important", } }}
                  >
                    <TableCell
                      style={{ borderBottom: "none !important" }}
                      align="left"
                    >
                      <Box sx={{ display: { lg: "flex", xs: "none" }, }}>

                        <img src={star} />
                      </Box>
                      <Box sx={{ display: { lg: "none", xs: "flex", } }}>

                        <img src={star} width="16px" height="16px" style={{}} />
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: "none !important" }}
                      align="left"
                      className={classes.tableheader}
                    >
                      <Box
                        sx={{
                          marginLeft: { lg: "0", xs: "-100px" },
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: { lg: "flex", xs: "none" } }}>

                          <img
                            style={{
                              marginRight: "20px",
                              borderRadius: "100px",
                            }}
                            src={i.crruncy}
                            alt="decimg"
                          />
                        </Box>
                        <Box sx={{ display: { lg: "none", xs: "flex" } }}>

                          <img
                            style={{
                              width: "16px", height: "16px",
                              marginRight: "20px",
                              borderRadius: "100px",
                            }}
                            src={i.crruncy}
                            alt="decimg"
                          />
                        </Box>
                        <Typography className={classes.bank}>
                          {i.Description}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography sx={{ mr: "20px", marginLeft: { lg: "-10", xs: "-20px" }, }}>{i.amount}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Box
                        sx={{
                          marginLeft: { lg: "40px", xs: "-20px" },
                          display: "flex",
                          // ml: "40px",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ color: `${i.color}` }}>
                          {i.change}
                        </Typography>
                        <img
                          style={{
                            marginLeft: "6px",
                          }}
                          src={i.updown}
                          alt="decimg"
                        />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        display: { md: "flex", xs: "none" },
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                      align="center"
                    >
                      <img
                        src={i.chart}
                      // style={{ marginLeft: "20px" }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        sx={{
                          marginLeft: { lg: "", xs: "-30px" },

                          backgroundColor: "#5D5FEF",
                          height: { lg: "30px", xs: "30px" },
                          borderRadius: "4px",
                          width: { lg: "108px", xs: "30px" },
                        }}
                      >
                        <Box>
                          <img src={send} />
                        </Box>
                        <Typography
                          sx={{
                            display: { lg: "flex", xs: "none" },
                            marginLeft: "8px",
                            color: "white",
                            fontFamily: "Inter !important",
                            fontSize: "12px !important",
                            fontWeight: "500 !important",
                            lineHeight: "16px !important",
                          }}
                        >
                          Send
                        </Typography>
                      </IconButton>
                      {/* <AppButton title="Send" backgroundColor="#5D5FEF" /> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* <Grid>
        <Footer />
      </Grid> */}

</Layout>
    </Grid >
  );
};

export default CurrencyUpate;
