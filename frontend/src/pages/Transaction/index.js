import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css";

import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import Layout from "../../components/Layout";

import CommonNav from "../../components/CommonNav";
import Footer from "../../components/AppFooter";
import { useStyles } from "../../Styles";
import Type from "../../assests/Logo/type.png";
import Search from "../../assests/Logo/search.png";
import Calender from "../../assests/Logo/calander.png";
import decimg from "../../assests/Images/descimage.png";
import right from "../../assests/Images/right.png";
import wrong from "../../assests/Images/wrong.png";
import dot from "../../assests/Images/more.png";

import { Box, margin } from "@mui/system";
// export interface AppProps {
//   event?: any;
//   disableUnderline?: any;

// }
const Transaction = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  const TableData = [
    {
      Decimg: decimg,
      money: "Send Payment ",

      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: right,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
    {
      Decimg: decimg,
      money: "Send Payment ",

      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: wrong,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
    {
      Decimg: decimg,
      money: "Send Payment ",

      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: right,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
    {
      Decimg: decimg,
      money: "Send Payment ",

      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: right,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
    {
      Decimg: decimg,
      money: "Send Payment ",
      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: right,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
    {
      Decimg: decimg,
      money: "Send Payment ",

      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: wrong,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
    {
      Decimg: decimg,
      money: "Send Payment ",
      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: right,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
    {
      Decimg: decimg,
      money: "Send Payment ",
      Datedata: { Date: "04", month: "AUG" },
      Description: "HDFC Bank",
      Status: right,
      AmountDetails: {
        currency: "BUSD ",
        amount: "4.20",
        // more: dot,
        time: "1:00 PM",
      },
    },
  ];
  return (
    <Grid>
        <Layout>
      <Grid>
          
        {/* <CommonNav
          login2="Login"
          Signup2="Signup"
          priceimg1={priceimg1}
          priceimg2={priceimg2}
          img3={sett}
          img1={wallet}
          img4={user}
          img2={notification}
          name="100$"
        /> */}
      </Grid>

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
          md={10}
          sm={10}
          xs={11}
          sx={{
            transform:{lg:"scale(0.9)",xs:"none"},

            marginTop: { lg: "90px", xs: "30px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "48px" },
              fontsize: "Inter !important",
              fontWeight: { xs: "700", md: "800" },
              // fontSize: "48px",
              lineHeight: { xs: "32px", md: "60px" },
            }}
          >
            My Transactions
          </Typography>
          {/* <Box>
            <AppButton
            textTransform="none"
              title={"Start New Transfer"}
              color={"#fff"}
              width="224px"
              // padding={"10px 32px 10px 36px"}
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"28px"}
              borderRadius="6px"
              backgroundColor="#5D5FEF"
              height="48px"
              // endIcon={<ArrowForwardIcon />}
              // margin={"10px 10px 0px 0px"}
            />
          </Box> */}
        </Grid>
        <Grid
          xs={11}
          sx={{
            transform:{lg:"scalex(0.9)",xs:"none"},

            marginBottom: { lg: "30px", xs: "0px" },
            marginTop: "20px",
            backgroundColor: "#fff",
            display: { lg: "none", xs: "flex" },
            alignItems: "center",
            flexDirection: "row",
            padding: "10px 20px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter !important",
              fontWeight: "500 !important",
              fontSize: "12px !important",
              lineHeight: "15px !important",
              color: "#6A6A6A !important",
              textTransform: "uppercase",
            }}
          >
            find transaction
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter !important",
              fontWeight: "500 !important",
              fontSize: "12px !important",
              lineHeight: "15px !important",
              color: "#6A6A6A !important",
            }}
          >
            DATE:
          </Typography>
        </Grid>
        <Grid
          //  container
          md={10}
          sm={10}
          xs={11}
          sx={{

            transform:{lg:"scale(0.9)",xs:"none"},

            marginTop: "20px",
            backgroundColor: "#fff",
            display: { lg: "flex", xs: "none" },
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
          }}
        >
          <Grid item md={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                padding: "10px 80px",
                alignItems: "center",
              }}
            >
              {/* <Box sx={{
                display: "none",}}>

              <img src={Search} alt="logo" style={{ marginRight: "  5px " }} />
              </Box> */}
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    width: "118px",
                    fontSize: "12px ",
                    color: "#6A6A6A",
                  },
                }}
                placeholder="FIND TRANSACTION "
              />
              <Button
                sx={{
                  fontsize: "Inter !important",
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "black",
                  lineHeight: "15px",
                  textTransform: "uppercase",
                }}
              >
                find transaction
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <FormControl
              sx={{
                // m: 1,
                // minWidth: 70,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={Calender} alt="logo" />
              <Typography className={classes.inputTitle}>Date</Typography>
              <Select
                sx={{
                  width: "120px",
                  margin: "0px 10px",
                  fontFamily: "Inter !important",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                variant="standard"
                disableUnderline
                value={age}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">August 2018</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                // m: 1,
                // minWidth: 70,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={Type} alt="logo" />
              <Typography className={classes.inputTitle}>Type</Typography>
              <Select
                sx={{
                  width: "60px",
                  margin: "0px 10px",
                  fontFamily: "Inter !important",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
                variant="standard"
                disableUnderline
                value={age}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          md={10}
          xs={11}
          sm={10}
          sx={{
            transform:{lg:"scalex(0.9)",xs:"none"},
           display: { lg: "flex", xs: "none"} ,
            marginBottom: { lg: "330px", xs: "20px" },
          }}
        >
          <TableContainer>
            <Table >
              <TableHead sx={{ "& th": { border: "0 !important" } }}>
                <TableRow sx={{ backgroundColor: "#F0F0F0", color: "black" }}>
                  <TableCell align="center" className={classes.tableheader}>
                    Date
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    align="left"
                    className={classes.tableheader}
                  >
                    Description
                  </TableCell>
                  <TableCell align="right" className={classes.tableheader}>
                    Status
                  </TableCell>
                  <TableCell align="center" className={classes.tableheader}>
                    Amount
                  </TableCell>
                </TableRow>
              </TableHead>
             
              <TableBody>
               
                {TableData.map((i) => (
                  <TableRow
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderBottom: "none !important",
                    }}
                    // sx={{ "& tr": { border: "0 !important" } }}
                    // key={i.name}
                    // sx={{ "&:last-child td, &:last-child th": {  borderBottom: "none important", } }}
                  >
                    <TableCell
                      style={{ borderBottom: "none !important" }}
                      align="left"
                    >
                      <Box
                        sx={{
                          border: "none",
                          display: { lg: "flex", xs: "none" },
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Typography className={classes.Date}>
                          {i.Datedata.Date}
                        </Typography>
                        <Typography className={classes.month}>
                          {i.Datedata.month}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{ borderBottom: "none !important" }}
                      // sx={{ padding: "0px 10px 0px 0px" }}
                      align="left"
                      className={classes.tableheader}
                      // component="th"
                      // scope="row"
                    >
                      <TableRow sx={{ display: "flex", flexDirection: "row" }}>
                        <Box>
                          <img
                            style={{
                              // marginLeft: "20px",
                              borderRadius: "100px",
                            }}
                            src={i.Decimg}
                            alt="decimg"
                          />
                        </Box>
                        <Box ml={3}>
                          <Typography className={classes.bank}>
                            {i.Description}
                          </Typography>
                          <Typography className={classes.money}>
                            {i.money}
                          </Typography>
                        </Box>
                      </TableRow>
                    </TableCell>
                    <TableCell align="right">
                      <Box>
                        <img src={i.Status} />
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <TableRow
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Typography m={0.6} className={classes.month}>
                            {i.AmountDetails.currency}
                          </Typography>
                          <Typography className={classes.Date}>
                            {i.AmountDetails.amount}
                          </Typography>
                          <Box>
                            <img
                              src={i.AmountDetails.more}
                              style={{ marginLeft: "20px" }}
                            />
                          </Box>
                        </Box>
                        <Box>
                          <Typography className={classes.money}>
                            {i.AmountDetails.time}
                          </Typography>
                        </Box>
                      </TableRow>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
          <Grid container sx={{justifyContent:"center",alignItems:"center", display: { lg: "none", xs: "flex" } }}>
            <Grid item xs={11}>
              <TableBody>
                <Box
                  style={{ height: "32px", marginTop: "32px !important" }}
                ></Box>
                {TableData.map((i) => (
                  <TableRow
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderBottom: "none !important",
                    }}
                    // sx={{ "& tr": { border: "0 !important" } }}
                    // key={i.name}
                    // sx={{ "&:last-child td, &:last-child th": {  borderBottom: "none important", } }}
                  >
                    <TableCell
                      style={{ borderBottom: "none !important" }}
                      align="left"
                    >
                      <Box
                        sx={{
                          border: "none",
                          display: { lg: "flex", xs: "none" },
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Typography className={classes.Date}>
                          {i.Datedata.Date}
                        </Typography>
                        <Typography className={classes.month}>
                          {i.Datedata.month}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{
                      
                        borderBottom: "none !important",
                      }}
                      // sx={{ padding: "0px 10px 0px 0px" }}
                      align="left"
                      className={classes.tableheader}
                      // component="th"
                      // scope="row"
                    >
                      <TableRow sx={{ display: "flex", flexDirection: "row" }}>
                        <Box>
                          <img
                            style={{marginTop:"-0px",  marginLeft: "-20px",
                              // marginLeft: "20px",
                              borderRadius: "100px",
                              height:"24px",
                              width:"24px",
                            }}
                            src={i.Decimg}
                            alt="decimg"
                          />
                        </Box>
                        <Box ml={3}   marginLeft= "10px">
                          <Typography className={classes.bank}>
                            {i.Description}
                          </Typography>
                          <Typography className={classes.money}>
                            {i.money}
                          </Typography>
                        </Box>
                      </TableRow>
                    </TableCell>
                    <TableCell align="right">
                      <Box >
                        <img src={i.Status} width="12.8px"
                        style={{marginTop:"-23px", marginLeft: "40px"}}
                        height="12.8px"/>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <TableRow
                        sx={{
                          marginLeft: "-20px",
                          marginRight: "-20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Typography m={0.6} className={classes.month}>
                            {i.AmountDetails.currency}
                          </Typography>
                          <Typography sx={{marginTop:"3px"}} className={classes.Date}>
                            {i.AmountDetails.amount}
                          </Typography>
                          <Box>
                            <img
                              src={i.AmountDetails.more}
                              style={{ marginLeft: "20px" }}
                            />
                          </Box>
                        </Box>
                        <Box>
                          <Typography className={classes.money}>
                            {i.AmountDetails.time}
                          </Typography>
                        </Box>
                      </TableRow>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Grid>
          </Grid>
      </Grid>

      {/* <Grid>
        <Footer />
      </Grid> */}

      </Layout>
    </Grid>
  );
};

export default Transaction;
