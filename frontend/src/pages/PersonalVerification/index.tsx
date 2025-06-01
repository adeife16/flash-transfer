import { Grid, Typography } from "@mui/material";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import GreenTick from "../../assests/Logo/GreenTick.svg";
import VerifiedLogo from "../../assests/Logo/VerifiedLogo.svg";
import WarningLogo from "../../assests/Logo/WarningLogo.svg";
import "../../font.css/index.css"

import { Box } from "@mui/system";

import { styled } from "@mui/system";
import AppButton from "../../components/AppButton";

const VerificationBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
});

const PersonalVerification = () => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Grid container className={classes.Personal_Verification_container}>
          <Grid container sx={{transform:{lg:"scale(0.9)",xs:"scale(none)"}}} rowGap={{ xs: 2, sm: 0 }} columnSpacing={7}>
            <Grid item xs={12}>
              <Typography className={classes.Personal_Verification}>
                Personal Verification
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className={classes.basic_text}>Basic</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className={classes.Personal_info}>
                  Personal Information
                </Typography>
                <img src={GreenTick} alt={"image"} />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className={classes.basic_text}>Intermediate</Typography>
              <VerificationBox>
                <Typography className={classes.Personal_info}>
                  All Basic Requirements
                </Typography>
                <img src={GreenTick} alt={"image"} />
              </VerificationBox>
              <VerificationBox>
                <Typography className={classes.Personal_info}>
                  Government ID
                </Typography>
                <img src={GreenTick} alt={"image"} />
              </VerificationBox>
              <VerificationBox>
                <Typography className={classes.Personal_info}>
                  Facial Verification
                </Typography>
                <img src={GreenTick} alt={"image"} />
              </VerificationBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className={classes.basic_text}>Advanced</Typography>
              <VerificationBox>
                <Typography className={classes.Personal_info}>
                  All intermediate Requirements
                </Typography>
                <img src={WarningLogo} alt={"image"} />
              </VerificationBox>
              <VerificationBox>
                <Typography className={classes.Personal_info}>
                  Proof if Address
                </Typography>
                <img src={WarningLogo} alt={"image"} />
              </VerificationBox>
              <VerificationBox>
                <Typography className={classes.Personal_info}>
                  Review time
                </Typography>
                <img src={WarningLogo} alt={"image"} />
              </VerificationBox>
            </Grid>
            <Grid item xs={12} md={4} className={classes.verified_btn_container}>
              <AppButton
                title={"Verified"}
                backgroundColor={"rgba(52, 168, 83, 0.1)"}
                color={"#34A853"}
                padding={"9px 0px"}
                textTransform="none"
                startIcon={<img src={VerifiedLogo} alt={"image"} />}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.verified_btn_container}>
              <AppButton
                title={"Verified"}
                textTransform="none"
                backgroundColor={"rgba(52, 168, 83, 0.1)"}
                color={"#34A853"}
                padding={"9px 0px"}
                startIcon={<img src={VerifiedLogo} alt={"image"} />}
              />
            </Grid>
            <Grid item xs={12} md={4} className={classes.verified_btn_container}>
              <AppButton
                title={"Verified Now"}
                textTransform="none"
                backgroundColor={"#FCBF07"}
                color={"#fff"}
                padding={"9px 0px"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default PersonalVerification;
