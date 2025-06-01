import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../Styles";
import FTheader from "./Component/header";
import { Box } from "@mui/system";
import Banner from "./Component/banner";
import FlashEcosystem from "./Component/FlashEcosystem";
import FlashList from "./Component/Flashlist";
import ListingPartners from "./Component/Listing&Partners";
import FlashTransfer from "./Component/FlashTransfer";
import Roadmap from "./Component/Roadmap";
import Footer from "./Component/Footer";
import InvestFuture from "./Component/InvestFuture";
import NFTutility from "./Component/Nftutility";
import CoreTeams from "./Component/CoreTeam";
// import CoreTeams from "./Component/CoreTeam";

const FlashToken = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Grid>
            <Grid sx={{ backgroundColor: "#181818" }}>
              <FTheader />
            </Grid>
            <Grid sx={{ backgroundColor: "#181818" }}>
              <Banner />
            </Grid>
            <Grid sx={{ backgroundColor: "#181818" }}>
              <FlashEcosystem />
            </Grid>

            <Grid sx={{ backgroundColor: "#181818" }}>
              <FlashList />
            </Grid>

            <Grid sx={{ backgroundColor: "black" }}>
              <ListingPartners />
            </Grid>
            <Grid sx={{ backgroundColor: "black" }}>
              <FlashTransfer />
            </Grid>
            <Grid sx={{ backgroundColor: "#181818" }}>
              <Roadmap />
            </Grid>
            <Grid sx={{ backgroundColor: "black" }}>
              <InvestFuture />
            </Grid>
            <Grid sx={{ backgroundColor: "black" }}>
              <NFTutility />
            </Grid>
            <Grid sx={{ backgroundColor: "#181818" }}>
              <CoreTeams />
            </Grid>
            <Grid sx={{ backgroundColor: "#181818" }}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FlashToken;
