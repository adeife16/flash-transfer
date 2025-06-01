import { Avatar, IconButton, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../Styles";
import Brandimage from "../../assests/Logo/Brandicon.svg";
import AppButton from "../AppButton";
import "../../index.css"

export interface AppProps {
  cardsData?: any;
  BlogsCardsObject?: any;
  backgroundColor?: any;
  boxShadow?: any;
  item?: any;
  i?: any;
  BlogsJournalObject?: any;
}


const AppCards = ({
  cardsData,
  BlogsCardsObject,
  backgroundColor,
  boxShadow,
  BlogsJournalObject,
}: AppProps) => {
  return (
    <>
      {cardsData && (
        <CardsTypeOne
          cardsData={cardsData}
          backgroundColor={backgroundColor}
          boxShadow={boxShadow}
        />
      )}
      {BlogsCardsObject && <CardsTypetwo BlogsCardsObject={BlogsCardsObject} />}
      {BlogsJournalObject && (
        <CardsTypethree BlogsJournalObject={BlogsJournalObject} />
      )}
    </>
  );
};

const CardsTypeOne = ({ cardsData, backgroundColor, boxShadow }: AppProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        // columnGap={4}
        // rowGap={5}
        sx={{
          display: "flex",
          justifyContent: { sm: "center" },
          columnGap: { sm: "20px", lg: "32px" },
          rowGap: "44px",
        }}
      >
        {cardsData.map((item: any) => (
          <Grid
            item
            xs={12}
            sm={3.5}
            md={3.6}
            lg={3.7}
            sx={{
              display: "flex !important",
              flexDirection: "column !important",
              padding: "0px 24px 32px 24px!important",
              background: "#FFFFFF !important",
              borderRadius: "8px !important",
            }}
            // className={classes.cards_container}
            key={Math.random()}
            style={{ backgroundColor: backgroundColor, boxShadow: boxShadow }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", backGroundColor: "red", marginTop: "-20px" }}>
              {" "}
              <img
                src={item.pic}
                style={{ width: 48, height: 48 }}
                alt={item.pic}
              />
            </Box>
            <Typography
              sx={{
                fontsize: "Inter !important", fontWeight: "500 !important",
                fontSize: "18px !important",
                lineHeight: "28px !important",
                textAlign: "center !important",
                mb: "20px",
              }}
            // className={classes.cards2_title}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontsize: "Inter !important", fontWeight: "400 !important",
                fontSize: "16px !important",
                lineHeight: "24px !important",
                textAlign: "center !important",
                color: "#6A6A6A"

              }}
            // className={classes.cards2_description}
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const CardsTypetwo = ({ BlogsCardsObject }: AppProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid container columnSpacing={3} rowGap={3}>
        {BlogsCardsObject.map((item: any) => (
          <Grid item xs={12} md={4} >
            <Box className={classes.Belogs_cards_box}>
              <Typography className={classes.cards_date}>
                {item.date}
              </Typography>
              <Typography className={classes.cards_Blogs_heading}>
                {item.heading}
              </Typography>
              <Typography className={classes.cards_Blogs_heading_description}>
                {item.description}
              </Typography>
              <IconButton
                sx={{
                  '&:hover': {
                    backgroundColor: '#FCBF07',
                    border: "none",
                    color: "white",
                    padding: "13.1px 35.47px",
                  },
                  color: "#5D5FEF",
                  padding: "12px 35.47px",
                  border: "1px solid #5D5FEF",
                  maxWidth: "130px",
                  borderRadius: "5px",
                  fontFamily: 'Roboto',
                  fontWeight: " 500",
                  fontSize: " 14px",
                  lineHeight: " 16px",
                  // backgroundColor: "#FCBF07",
                }}
              > {item.btnText}</IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const CardsTypethree = ({ BlogsJournalObject }: AppProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid container columnSpacing={3} rowGap={3}>
        {BlogsJournalObject.map((item: any) => (
          <Grid item xs={12} md={4} >
            <Box
            // className={classes.blog_general_cards_Box}
            >
              <Box className={classes.image_box}>
                <img src={item.image} alt={"image"} width={"100%"} />
              </Box>
              <Typography className={classes.time_12hrs_open}>
                {/* {value.openTiming} */}
                Banking <span style={{ padding: "0px 10px" }}>-</span> 12 HOURS
                AGO
              </Typography>
              <Typography className={classes.send_buy_text}>
                {item.heading}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <img src={item.avatar} height={"40px"} width="43px" />
                {/* <Avatar src={item.avatar} heigh={"40px"} width="43px" /> */}
                <Box sx={{ marginLeft: "21px" }}>
                  <Typography className={classes.Andreas_Petersen}>
                    {item.name}
                  </Typography>
                  <Typography className={classes.blogs_writer}>
                    {item.author}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AppCards;
export { CardsTypetwo, CardsTypethree };