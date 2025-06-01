import { Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../Styles";
import FaQBG from "../../assests/Images/FaQBG.png";
import Girls3pic from "../../assests/Images/Girls3pic.png";
import { Box } from "@mui/system";
import Layout from "../../components/Layout";
import "../../font.css/index.css"
import { Link } from "react-router-dom";

const FAQ = () => {
  const classes = useStyles();
  // const QuestionsAnswer = [
  //   {
  //     questions: "How can I send Money?",
  //     answers:
  //       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //   },
  //   {
  //     questions: "How much time required to transfer money?",
  //     answers:
  //       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //   },
  //   {
  //     questions: "Can I transfer money abroad?",
  //     answers:
  //       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //   },
  //   {
  //     questions: "Is there any fee duducted?",
  //     answers:
  //       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //   },
  // ];

  const QuestionsAnswer = [
    {
      questions: "How withdraw my cryptos in cash with Flash Transfer ?",
      answers:
        "You must go to our Flash-transfer.com site, choose yourself as the beneficiary when transferring money and go to a merchant partner.",
    },
    {
      questions: "Where can the Flash Transfer service be used ?",
      answers: "Flash Transfer can be used worldwide except in the following countries (US blacklist): Cuba, Iran, North Korea, Syria, Venezuela.",
    },
    {
      questions: "In which/how many countries does Flash Transfer operate ?      ",
      answers: "For the moment Flash Transfer operates in Europe, Africa and the United Arab Emirates.",
    },
    {
      questions: "How to convert your cryptocurrency to another ?",
      answers:
        "Go to our dex Flash-swap and exchange your crypto for any currently we support the Ethereum network and BNB Chain.     ",
    },

    {
      questions: "How to send the cryptocurrency so that the beneficiary receives it in cash ?",
      answers:
        "You must create an account, put crypto currency accepted on our site against fiat currency, add a beneficiary, connect your wallet and validate your transaction.",
    },
    {
      questions: "How much are the transaction fees ?",
      answers:
        "Transaction fees vary depending on the amount you send and the currency market.",
    },
  ];

  const navBlue = (text: string) => {
    return <span style={{ color: "#5D5FEF" }}>{text}</span>;
  };
  return (
    <>
      <Layout>
        {/* <Grid sx={{
          display: { lg: "flex", xs: "none" },
          paddingTop: "9px",
          backgroundColor: "#D1D5DB",
        }}>

</Grid> */}
        <Grid
          container
          sx={{ backgroundImage: `url(${FaQBG})`, height: { lg: "100%", xs: "190px" }, backgroundRepeat: "no-repeat", backgroundPosition: "100%", backgroundSize: "cover" }}

          className={classes.faq_container}
        >
          <Grid container sx={{ displlay: "flex", justifyContent: "center" }}>
            <Grid item xs={12} md={5.6}>
              <Typography textAlign={"center"} className={classes.Help_center}>
                Help Center
              </Typography>
              <Typography textAlign={"center"} className={classes.Help_center_description}>
                Home is behind, the world ahead and there are many paths to
                tread through shadows to the edge.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.FAQ_container2}>
          <Grid
            container
            sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" }, backgroundColor: "white" }}
            columnGap={2}
            rowGap={2}
            className={classes.FAQ_sub_container2}
          >
            <Grid item xs={12} md={4}>
              <Box className={classes.f_a_Q_container}>

                <Typography className={classes.f_a_Q_heading}>
                  Frequently asked questions
                </Typography>
                <Typography className={classes.f_a_Q_description}>
                  Can’t find the answer you’re looking for?
                  <br></br> Reach out to our {""}
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <span>{navBlue(" customer support ")}</span>

                  </Link>
                  team.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              {QuestionsAnswer.map((value, i) => (
                <Box
                  sx={{ marginBottom: { md: "48px", xs: "20px", sm: "48px" } }}
                  key={i}
                >
                  <Typography className={classes.questions_heading}>
                    {value.questions}
                  </Typography>
                  <Typography className={classes.describe_Answers}>
                    {value.answers}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>


        <Grid container className={classes.FAQ_container3}>
          <Grid
            container
            sx={{ backgroundColor: "" }}
          //   className={classes.FAQ_sub_container3}
          >
            <Grid item xs={12} sx={{ flexDirection: "column" }} className={classes.FAQ_sub_container3}>
              <img
                src={Girls3pic}
                alt={"image"}
                style={{ marginBottom: "24px" }}
              />
              <Typography className={classes.Still_have_question}>
                Still Have Questions?


              </Typography>
              <Typography className={classes.Still_have_question_answers}>

                If you have any other questions   <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                  }}
                >contact us</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default FAQ;
