import {
  Typography,
  Grid,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../../Styles";
import FlashLogo from "../../../../assests/Logo/Flashlogo.png";
// import Flag from "../../assests/Logo/Flag.svg";
import insta from "../../../../assests/Images/insta.png";
import youtube from "../../../../assests/Images/youtube.png";
import tele from "../../../../assests/Images/tele.png";
import book from "../../../../assests/Images/book.png";
import arrow from "../../../../assests/Images/2arrow.png";
import git from "../../../../assests/Images/git.png";
import fb from "../../../../assests/Images/tweter.png";
import twetter from "../../../../assests/Images/tweterbtn.png";
import In from "../../../../assests/Images/in.png";
import face from "../../../../assests/Images/face.png";
import flashECO1 from "../../../../assests/Images/flash-eco-box1.png";
import flashbridge from "../../../../assests/Images/flashbridge.png";
import integrateFlashWallet from "../../../../assests/Images/integrateFlashWallet.png";
import StakingFLash from "../../../../assests/Images/StakingFLash.png";
import flashaudit from "../../../../assests/Images/flashaudit.png";
import flashlaunchpad from "../../../../assests/Images/flashlaunchpad.png";
import line3 from "../../../../assests/Images/Line3.png";

import flashappOveralIcon from "../../../../assests/Images/flasapp-hanging-icon.png";

import blockhainsecured from "../../../../assests/Images/blockhainsecured.png";
import singletransaction from "../../../../assests/Images/singletransaction.png";
import ReplaceBankAccount from "../../../../assests/Images/ReplaceBankAccount.png";
import tokenDeflationary from "../../../../assests/Images/tokenDeflationary.png";
import columnBackground from "../../../../assests/Images/columnBackground.png";

import twetterbtn from "../../../../assests/Images/tweterbtn.png";
import telebtn from "../../../../assests/Images/tele2.png";
import flashbtn from "../../../../assests/Images/flashbtn.png";

import AppButton from "../../../../components/AppButton";
// import MobileDrawer from "../MobileDrawer";

const FlashEcosystem = () => {
  const classes = useStyles();
  const Navs = [
    {
      img: twetter,
    },
    {
      img: tele,
    },
    {
      img: youtube,
    },
    {
      img: insta,
    },
    {
      img: fb,
    },
    {
      img: git,
    },
    {
      img: book,
    },
    {
      img: In,
    },
    {
      img: arrow,
    },
    {
      img: face,
    },
  ];
  return (
    <>
      <Grid>
        <Grid container fixed sx={{ color: "white", paddingTop: "100px" }}>
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",

                  fontFamily: "'Manrope' !important",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  lineHeight: "150% !important",
                  color: "#FBBF04",
                }}
              >
                Services
              </Typography>

              <Typography
                sx={{
                  mt: "8px",
                  fontFamily: "'Manrope' !important",
                  fontSize: "50px !important",
                  fontWeight: "800 !important",
                  lineHeight: "130% !important",
                  color: "#ffff",
                }}
              >
                Flash Ecosystem
              </Typography>
              <Typography
                sx={{
                  mt: "20px",
                  fontFamily: "'Manrope' !important",
                  fontSize: "16px !important",
                  fontWeight: "500 !important",
                  lineHeight: "170% !important",
                  color: "#85898F",
                }}
              >
                Discover all our services.
              </Typography>
              <Box mt="57px">
                <IconButton
                  sx={{
                    height: "62px",
                    fontSize: "20px",
                    // margin: "0px 5px 0px 5px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    borderRadius: "69px",
                    color: "#FFFF",
                    padding: "13px 20px",
                    // width: "246px",
                    border: "1px solid #FBBF04",
                    // backgroundColor: "#FBBF04",
                  }}
                >
                  <img
                    src={FlashLogo}
                    style={{
                      marginRight: "10px",
                      width: "27px",
                      height: "24px",
                    }}
                  />
                  Buy Flash
                </IconButton>
              </Box>
              {/* <Grid item md={1.5}>
              <Box
                sx={{
                  backgroundColor: "#202020",
                  width: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "30.5px",
                }}
              >
                {Navs.map((i) => {
                  return (
                    <Box sx={{ margin: "10px 0px" }}>
                      <img src={i.img} />
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item md={6.8}>
              <Box sx={{ marginTop: "40px" }}>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "16px !important",
                    fontWeight: "600 !important",
                    // lineHeight: "160px !important",
                    color: "#FBBF04",
                  }}
                >
                  Flash Technologies L.L.C-FZ
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",

                    fontFamily: "'Manrope' !important",
                    fontSize: "89.58px !important",
                    fontWeight: "800 !important",
                    // lineHeight: "120px !important",
                    color: "#ffff",
                  }}
                >
                  Flash
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",

                    fontFamily: "'Manrope' !important",
                    fontSize: "89.58px !important",
                    fontWeight: "800 !important",
                    // lineHeight: "120px !important",
                    color: "#84898F",
                  }}
                >
                  Technologies
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",
                      margin: "0px 5px",
                      fontWeight: 600,
                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#0F0F0E",
                      padding: "15px 55px",
                      // width: "246px",
                      backgroundColor: "#FBBF04",
                    }}
                  >
                    <img src={flashbtn} />
                    Buy Flash
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",

                      fontWeight: 600,

                      margin: "0px 5px",

                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#FBBF04",
                      padding: "15px 55px",
                      border: "1px solid #FBBF04",
                      // width: "246px",
                      backgroundColor: "#181818",
                    }}
                  >
                    <img src={telebtn} />
                    Telegram
                  </IconButton>
                  <IconButton
                    sx={{
                      height: "62px",
                      fontSize: "20px",

                      fontWeight: 600,

                      margin: "0px 5px",
                      lineHeight: "150%",
                      borderRadius: "69px",
                      color: "#FBBF04",
                      padding: "15px 55px",
                      border: "1px solid #FBBF04",
                      // width: "246px",
                      backgroundColor: "#181818",
                    }}
                  >
                    <img src={twetterbtn} />
                    Twitter
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3.7}>
              <Box
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "26px !important",
                    fontWeight: "500 !important",
                    lineHeight: "150% !important",
                    color: "#ffff",
                  }}
                >
                  Flash Technologies creates a money transfer ecosystem.
                </Typography>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "'Manrope' !important",
                    fontSize: "18px !important",
                    fontWeight: "400 !important",
                    lineHeight: "165% !important",
                    color: "#85898F",
                  }}
                >
                  Flash transfer is the first platform in the world that allows
                  you to buy, send or sell cryptocurrencies, via our merchant
                  network with reasonable fees. Flash Transfer enables you as
                  well to exchange cash for cryptocurrencies and vice versa.
                </Typography>
              </Box>
            </Grid> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          fixed
          sx={{
            maxWidth: "1400px",
            color: "white",
            margin: "40px auto 0 auto",
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box className={classes.flashBoxes}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "45px",
                  fontWeight: "800",
                  lineHeight: "61px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Transfer
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Exchange your cryptocurrency vs fiat or buy directly
                cryptocurrency with fiat through our approved partners. You can
                also send your cryptocurrency and the receiver withdraws it in
                fiat all over the world using a Binance account or using your
                no-custodial wallet ( Flash wallet, Metamask, Binance wallet,
                Trust wallet ...).
              </Typography>
              <Link
                className={classes.flashBoxesAnchor}
                to={"https://www.flash-transfer.com"}
              >
                www.flash-transfer.com
              </Link>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={flashECO1}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box className={classes.flashBoxes}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "45px",
                  fontWeight: "800",
                  lineHeight: "61px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Bridge
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash bridge is a dapps that allows users to swap their Flash
                from a blockchain to another. Besides, users are able to convert
                cryptocurrencies to other networks.
              </Typography>
              <Link
                className={classes.flashBoxesAnchor}
                to={"https://www.app.flash-bridge.com"}
              >
                www.app.flash-bridge.com
              </Link>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={flashbridge}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box className={classes.flashBoxes}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "45px",
                  fontWeight: "800",
                  lineHeight: "61px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Integrated Flash Wallet
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash Technologies has built a fully integrated cryptocurrency
                wallet that holders and merchants can use to buy, sell, stake,
                earn rewards and browse on internet.Flashwallet has a sepcial
                function that is unique in cryptospace. A very important feature
                that users will enjoy everywhere in the world.
              </Typography>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={integrateFlashWallet}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box className={classes.flashBoxes}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "45px",
                  fontWeight: "800",
                  lineHeight: "61px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Staking Flash
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Customers and merchants have the opportunity to earn rewards by
                using the staking protocol. Each month stakers receive a % of
                our staking pool.
              </Typography>
              <Link
                className={classes.flashBoxesAnchor}
                to={"https://www.app.flash-staking.com"}
              >
                www.app.flash-staking.com
              </Link>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={StakingFLash}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box className={classes.flashBoxes}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "45px",
                  fontWeight: "800",
                  lineHeight: "61px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Audit
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash audit will audit smart contracts (tokens, bridges,
                staking, all types of dapps) and blockchains of our
                partners/customers on all networks.
                <br />
                Each partner/customer who would like to be in our ecosystem will
                have to go through our security audit to make sure there is no
                malicious code.
              </Typography>

              <Link
                className={classes.flashBoxesAnchor}
                to={"https://www.flash-audit.com"}
              >
                www.flash-audit.com
              </Link>
              <Box
                className={classes.flashBoxesImage}
                component="img"
                sx={{
                  maxWidth: "300px",
                  display: "block",
                  margin: "40px auto",
                }}
                src={flashaudit}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box className={classes.flashBoxes}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "Manrope",
                  fontSize: "45px",
                  fontWeight: "800",
                  lineHeight: "61px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                Flash Launchpad
              </Typography>
              <Typography className={classes.flashBoxesPara}>
                Flash pad is our launchpad for upcoming IDOs and allows crypto
                projects to create their tokens (binance smartchain, eth,
                Cronos) and raise funds in pre-sales or fair launches.
              </Typography>
              <Link
                className={classes.flashBoxesAnchor}
                to={"https://www.flash-pad.com"}
              >
                www.flash-pad.com
              </Link>
              <Box
                className={classes.flashBoxesImage}
                sx={{
                  marginTop: "100px",
                }}
                component="img"
                src={flashlaunchpad}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          fixed
          sx={{
            maxWidth: "1400px",
            color: "white",
            margin: "120px auto 0px auto",
            paddingBottom: "100px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "0",
              right: "0",
              textAlign: "center",
              marginTop: "-50px",
              marginLeft: "-20px",
            }}
          >
            <img src={flashappOveralIcon} />
          </Box>
          <Grid
            item
            md={2.95}
            sx={{
              display: "flex",
              margin: "0px 2px !important",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${columnBackground})`,
                width: "300px",
                minHeight: "380px",
                margin: "0px 10px !important",
                textAlign: "center",
                backgroundSize: "contain",
              }}
            >
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={blockhainsecured}
              />
              <Box
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Typography className={classes.usps} component="h3">
                Blockchain Secured
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={2.95}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${columnBackground})`,
                width: "300px",
                minHeight: "380px",
                margin: "0px 10px !important",
                textAlign: "center",
                backgroundSize: "contain",
              }}
            >
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={singletransaction}
              />
              <Box
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Typography className={classes.usps} component="h3">
                Single transaction
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={2.95}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${columnBackground})`,
                width: "300px",
                minHeight: "380px",
                margin: "0px 10px !important",
                textAlign: "center",
                backgroundSize: "contain",
              }}
            >
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={ReplaceBankAccount}
              />
              <Box
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Typography className={classes.usps} component="h3">
                Token Deflationary
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            md={2.95}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${columnBackground})`,
                width: "300px",
                minHeight: "380px",
                margin: "0px 10px !important",
                textAlign: "center",
                backgroundSize: " contain",
              }}
            >
              <Box
                className={classes.flashBoxesImage}
                component="img"
                src={tokenDeflationary}
              />
              <Box
                className={classes.flashBoxesLine}
                component="img"
                src={line3}
              />
              <Typography className={classes.usps} component="h3">
                Replace a Bank Account
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashEcosystem;
