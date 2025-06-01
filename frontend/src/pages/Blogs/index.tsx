import { Avatar, IconButton, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../Styles";
import WalletCashbg from "../../assests/Images/WalletCashbg.png";
import CashCount from "../../assests/Images/CashCount.png";
import CashCount1 from "../../assests/Images/Cashcount2.png";
import CashCount2 from "../../assests/Images/Cashcount3.png";
import "../../font.css/index.css"

import WalletCards from "../../assests/Images/WalletCards.png";
import HandMobile from "../../assests/Images/HandMobile.png";
import AndreaseImg from "../../assests/Logo/AndreaseImg.svg";
import AndreaseImg1 from "../../assests/Images/AndreaseImg2.png";
import AndreaseImg2 from "../../assests/Images/AndreaseImg3.png";
import Avatar1 from "../../assests/Images/Avatar2.png";
import Avatar2 from "../../assests/Images/Avatar3.png";

import { Box } from "@mui/system";
import AppButton from "../../components/AppButton";

import { CardsTypethree, CardsTypetwo } from "../../components/AppCards";
import Layout from "../../components/Layout";
import { ReactElement } from "react";

const Blogs = () => {
  const classes = useStyles();
  const BlogsCardsObject = [
    {
      border: "1px solid #5D5FEF",
      date: "March 14th, 2019",
      heading: "User our Flash Transfer to send, buy",
      description:
        "Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners.",
      btnText: "Read Full",
    },
    {
      border: "1px solid #5D5FEF",
      date: "March 14th, 2019",
      heading: "User our Flash Transfer to send, buy",
      description:
        "Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners.",
      btnText: "Read Full",
    },
    {
      border: "1px solid #5D5FEF",
      // color: "#fff",
      // bgcolor: "#FCBF07",
      date: "March 14th, 2019",
      heading: "User our Flash Transfer to send, buy",
      description:
        "Exchange your  cryptocurrency vs cash or buy cryptocurrency with cash form our approved partners.",
      btnText: "Read Full",
    },
  ];
  const BlogsJournalObject = [
    {
      image: CashCount,
      openTiming: "Banking    -    12 HOURS AGO",
      heading: "User our Flash Transfer to send, buy",
      avatar: AndreaseImg,
      name: "Andreas Petersen",
      author: "Author at Panoply Store",
    },
    {
      image: CashCount1,
      openTiming: "Banking    -    12 HOURS AGO",
      heading: "User our Flash Transfer to send, buy",
      avatar: AndreaseImg1,
      name: "Emily Jørgensen",
      author: "Author at Panoply Store",
    },
    {
      image: CashCount2,
      openTiming: "Banking    -    12 HOURS AGO",
      heading: "User our Flash Transfer to send, buy",
      avatar: AndreaseImg2,
      name: "Filippa Hansen",
      author: "Author at Panoply Store",
    },
  ];

  return (
    <>
      <Layout>
        {/* <Box sx={{ pt: "9px", display: { lg: "flex", xs: "none" }, backgroundColor: "#D1D5DB" }}>
        </Box> */}

        <Grid container className={classes.Blog_container_1}>
          <Grid container columnSpacing={{ md: 7, lg: 13 }} sx={{transform:{lg:"scale(0.9)",xs:"scale(none)"}}} rowSpacing={3}>
            <Grid item xs={12} md={6} >
              <Box sx={{ height: "100%" }}>
                <img
                  src={WalletCashbg}
                  alt={"image"}
                  width="100%"
                  height={"100%"}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              flexDirection={"column"}
              className={classes.Blog_subcontainer_1}
            >
              <Box sx={{
                padding: { lg: "0px 0px 0px 20px", xl: "0px 0px 0p  0x 40px" }
              }}>


                <Box className={classes.btn_date_box}>
                  <Box sx={{ maxWidth: "120px" }}>
                    <AppButton
                      textTransform="none"
                      title={"Banking"}
                      color="#fff"
                      backgroundColor={"#5D5FEF"}
                      borderRadius={"5px"}
                      fontSize="14px"
                      fontWeight={"500"}
                      lineHeight="16px"
                      padding={"12px 24px"}
                    />
                  </Box>
                  <Typography className={classes.date_text}>
                    March 14th, 2019
                  </Typography>
                </Box>
                <Typography className={classes.Bank_heading}>
                  User our Flash Transfer to send, buy or sell your crypto vs cash
                  money in the world.
                </Typography>
                <Typography className={classes.Bank_heading_description}>
                  Exchange your cryptocurrency vs cash or buy cryptocurrency with
                  cash form our approved partners. You can also send your
                  cryptocurrency vs fiat worldwide using a Binance account or
                  using your no-custodial wallet ( Flash wallet, Metamask, Binance
                  wallet, Trust wallet ...)
                </Typography>

                <Box sx={{ maxWidth: "120px" }}>
                  <AppButton
                    textTransform={"none"}
                    title={"Read more"}
                    color="#fff"
                    backgroundColor={"#FCBF07"}
                    boxShadow={"0px 10px 20px rgba(0, 0, 0, 0.2)"}
                    borderRadius={"5px"}
                    fontSize="14px"
                    fontWeight={"500"}
                    lineHeight="16px"
                    padding={"12px 0px"}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.Blog_container_2}>
          <Grid container sx={{transform:{lg:"scale(0.9)",xs:"scale(none)"}, display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} md={5}>
              <Typography className={classes.ourBlogs}>Our Blog</Typography>
              <Typography className={classes.ourBlogs_description}>
                Home is behind, the world ahead and there are many paths to
                tread through shadows to the edge.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {/* cards  */}
              <CardsTypetwo BlogsCardsObject={BlogsCardsObject} />
              {/* cards end  */}
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.Blog_container_2}>
          <Grid container sx={{transform:{lg:"scale(0.9)",xs:"scale(none)"}}}>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <Typography className={classes.ourBlogs}>Blog Journal</Typography>
              <Typography className={classes.ourBlogs_description}>
                Home is behind, the world ahead and there are many paths to
                tread through shadows to the edge.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {/* cards  */}
              <CardsTypethree BlogsJournalObject={BlogsJournalObject} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.Blog_container_2}>
          <Grid container sx={{transform:{lg:"scale(0.9)",xs:"scale(none)"}}}>
            <Grid item xs={12}>
              <Typography className={classes.Latest_belogs}>
                Latest Blog Posts
              </Typography>
              <Typography className={classes.Latest_belogs_description}>
                Home is behind, the world ahead and there are many<br></br> paths to
                tread through shadows to the edge.
              </Typography>
            </Grid>
            <Grid item xs={12} >
              {/* nested Grid start */}
              <Grid
                container
                columnSpacing={{ md: 12 }}
                sx={{ marginBottom: { xs: "20px", md: "48px" } }}
                rowGap={{ xs: 3, sm: 0 }}
              >
                <Grid item md={6}>
                  <Box sx={{ height: "100%" }}>
                    <img
                      src={WalletCards}
                      alt="image"
                      width="100%"
                      height={"100%"}
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sx={{ display: "flex", justifyContent: "end", padding: "20px 0px 0px 0px" }}>
                  <Grid item md={10.5} >
                    <Box sx={{ marginBottom: "15px" }}>
                      <AppButton
                        textTransform={"none"}
                        title={"button"}
                        backgroundColor="#5D5FEF"
                        maxWidth={"110px"}
                        color="#fff"
                      />
                    </Box>

                    <Typography className={classes.buy_sell_crypto}>
                      User our Flash Transfer to send, buy or sell your crypto vs cash money in the world.
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Avatar
                        src={Avatar1}
                        className={classes.latest_blog_avatar_settings}
                      />
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography className={classes.Andreas_Petersen}>
                          Anna Møller
                        </Typography>
                        <Typography className={classes.blogs_writer}>
                          Author at Panoply Store
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                columnSpacing={{ md: 12 }}
                sx={{ marginBottom: { xs: "20px", md: "48px" } }}
              >
                <Grid item md={6}>
                  <Box sx={{ height: "100%" }}>
                    <img
                      src={HandMobile}
                      alt="image"
                      width="100%"
                      height={"100%"}
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sx={{ display: "flex", justifyContent: "end", padding: "20px 0px 0px 0px", }}>
                  <Grid item md={10.5} >

                    <Box sx={{ marginBottom: "15px" }}>
                      <AppButton
                        textTransform={"none"}
                        title={"button"}
                        backgroundColor="#5D5FEF"
                        maxWidth={"110px"}
                        color="#fff"
                      />
                    </Box>

                    <Typography className={classes.buy_sell_crypto}>
                      User our Flash Transfer to send, buy or sell your crypto vs cash money in the world.
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Avatar
                        src={Avatar2}
                        className={classes.latest_blog_avatar_settings}
                      />
                      <Box sx={{ marginLeft: "20px" }}>
                        <Typography className={classes.Andreas_Petersen}>
                          Anna Møller
                        </Typography>
                        <Typography className={classes.blogs_writer}>
                          Author at Panoply Store
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Layout>
    </>
  );
};

export default Blogs;
