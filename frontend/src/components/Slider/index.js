import { Grid, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import stars from "../../assests/Images/Stars.png";
import card1 from "../../assests/Images/cardimg1.png";
import card2 from "../../assests/Images/cardimg2.png";
import card3 from "../../assests/Images/cardimg3.png";
import left from "../../assests/Images/btnleft.png";
import right from "../../assests/Images/btnright.png";
import "./index.css";
import AppButton from "../AppButton";

function Index() {
  return (
    <Grid
      container
      columnSpacing={3}
      rowSpacing={{ lg: 0, xs: 2 }}
      sx={{
        padding: { lg: "16px 0px 56px 0px", xs: "20px" },
        display: "flex",
        justifyContent: "center",
        transform: { lg: "scale(0.9)", xs: "scale(none)" },
        flexDirection: "row",
      }}
    >
      <Grid item md={3.3} xs={12}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            border: "1px solid #D1DBE3",
            flexDirection: "column",
            padding: "0px 32.67px 25.8px 32.67px",
          }}
        >
          {/* <!-- TrustBox widget - Micro Review Count --> */}
          {/* <div
            class="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="5419b6a8b0d04a076446a9ad"
            data-businessunit-id="6346d2497067e5e5f2b1c5d6"
            data-style-height="20px"
            data-style-width="100%"
            data-theme="light"
            data-min-review-count="0"
            data-style-alignment="center"
          >
            <a
              href="https://uk.trustpilot.com/review/flash-technologies.org"
              target="_blank"
              rel="noopener"
            >
              Trustpilot
            </a>
          </div> */}
          {/* <!-- End TrustBox widget -->         */}
          <Typography
            className="textellipsis"
            sx={{
              mt: "27px",
              textAlign: "center",
              fontFamily: "Inter !important",
              fontSize: "16px !important",
              color: "#6B7280",

              fontWeight: "400 !important",
              lineHeight: "24px !important",
            }}
          >
            I discovered this beautiful project years ago and for me it's a real
            nugget. One of their services including Flash Transfer and Flash
            Wallet which allows you to become your own banker in a decentralized
            way are innovations that will change the world of crypto. The team
            is serious and the #FLASHFAMILY community is fully supportive. We
            will hear about Flash Technology for sure!
          </Typography>
          <Box mt="27px">
            <img src={card1} style={{
              width:"40px",height:"40px",borderRadius:"100px"
            }}/>
          </Box>
          <Box mt="10px">
            <img src={stars} />
          </Box>
          <Typography
            sx={{
              mt: "10px",
              fontFamily: "'Roboto' !important",
              fontSize: "14px !important",
              fontWeight: "700 !important",

              letterSpacing: "-0.318182px",
              lineHeight: "14px !important",
            }}
          >
            Ceduzak{" "}
          </Typography>
          <Typography
            sx={{
              mt: "3px",
              fontFamily: "Inter !important",
              fontSize: "12px !important",
              fontWeight: "300 !important",
              lineHeight: "14px !important",
              letterSpacing: "-0.272727px",
              color: "#6B7280",
            }}
          >
            {/* Author at Panoply Store */}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3.3} xs={12} sx={{}}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            border: "1px solid #D1DBE3",
            flexDirection: "column",
            padding: "0px 32.67px 25.8px 32.67px",
          }}
        >
          <Typography
            className="textellipsis"
            sx={{
              mt: "27px",
              textAlign: "center",
              fontFamily: "Inter !important",
              fontSize: "16px !important",
              fontWeight: "400 !important",
              lineHeight: "24px !important",
              color: "#6B7280",
            }}
          >
            Very promising company Very promising and innovative company in the
            field of money transfer, very serious team, a complete ecosystem a
            very good project to follow.
          </Typography>
          <Box mt="27px">
            <img src={card2} style={{
              width:"40px",height:"40px",borderRadius:"100px"
            }}/>
          </Box>
          <Box mt="10px">
            <img src={stars} />
          </Box>
          <Typography
          
            sx={{
              mt: "10px",
              fontFamily: "'Roboto' !important",
              fontSize: "14px !important",
              fontWeight: "700 !important",

              letterSpacing: "-0.318182px",
              lineHeight: "14px !important",
            }}
          >
            Jest lo
          </Typography>
          <Typography

            sx={{
              mt: "3px",
              fontFamily: "Inter !important",
              fontSize: "12px !important",
              fontWeight: "300 !important",
              lineHeight: "14px !important",
              letterSpacing: "-0.272727px",
              color: "#6B7280",
            }}
          >
            {/* Author at Panoply Store */}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3.3} xs={12} sx={{}}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            border: "1px solid #D1DBE3",
            flexDirection: "column",
            padding: "0px 32.67px 25.8px 32.67px",
          }}
        >
          <Typography
            className="textellipsis"
            sx={{
              mt: "27px",
              textAlign: "center",
              fontFamily: "Inter !important",
              fontSize: "16px !important",
              fontWeight: "400 !important",
              lineHeight: "24px !important",
              color: "#6B7280",
            }}
          >
            Very serious company, wanting to offer a quality and functional
            product thanks in particular to flash transfer, a means of payment
            from fiat to crypto.
          </Typography>
          <Box mt="27px">
            <img src={card3} style={{
              width:"40px",height:"40px",borderRadius:"100px"
            }}/>
          </Box>
          <Box mt="10px">
            <img src={stars} />
          </Box>
          <Typography
            sx={{
              mt: "10px",
              fontFamily: "'Roboto' !important",
              fontSize: "14px !important",
              fontWeight: "700 !important",

              letterSpacing: "-0.318182px",
              lineHeight: "14px !important",
            }}
          >
            Mr Morgan Schwoehrer
          </Typography>
          <Typography
            sx={{
              mt: "3px",
              fontFamily: "Inter !important",
              fontSize: "12px !important",
              fontWeight: "300 !important",
              lineHeight: "14px !important",
              letterSpacing: "-0.272727px",
              color: "#6B7280",
            }}
          >
            {/* Author at Panoply Store */}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box
          sx={{
            marginTop: "49px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              textTransform: "none",
              maxWidth: "39.61px",
              width: "39.61px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              borderRadius: "100px",
              height: "40px",
              margin: "0px 29.71px 0px 0px",
            }}
          >
            <img src={left} />
          </IconButton>
          <IconButton
            sx={{
              textTransform: "none",
              maxWidth: "39.61px",
              width: "39.61px",
              backgroundColor: "black",
              // padding:"9px 17px"
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1) ",
              borderRadius: "100px",
              height: "40px",
              // margin: "0px 29.71px 0px 10px",
            }}
          >
            <img src={right} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;
