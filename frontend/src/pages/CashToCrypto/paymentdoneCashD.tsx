import { Box, Grid } from "@mui/material";
import Layout from "../../components/Layout2";
import MiniHeader from "../../components/MiniHeader";
import Tabh from "../../components/TabhCard";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/blueright2.png";
import "./paymentdoneCashD.css";
import success from "../../assests/Images/sucess.png";
import carve from "../../assests/Images/carve.png";
import print from "../../assests/Images/print.png";
import track from "../../assests/Images/track.png";
import cellSvg from "../../assests/Images/Cell.svg";

export default function PaymentdoneCashD() {
  return (
    <div style={{ backgroundColor: "#cbdcf7" }}>
      <Layout>
        <Box sx={{ transform: { lg: "scale(0.9)", xs: "scale(none)" } }}>
          <MiniHeader />
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              backgroundColor: "#F7FDFF",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid  #D1D5DB",
              borderBottom: "1px solid  #D1D5DB",
            }}
          >
            <Grid
              item
              md={10.2}
              xs={12}
              sx={{
                marginBottom: { lg: "-4px", xs: "0px" },
                transform: { lg: "scale(0.9)", xs: "scale(none)" },
                borderRight: "1px solid  #D1D5DB",
                borderLeft: "1px solid  #D1D5DB",
                display: "flex",
                flexDirection: { md: "row", sm: "row", xs: "column" },
              }}
            >
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Reciver’s info"
                  // des="Vitae sed mi luctus laoreet."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Payment Method"
                  // des="Cursus semper viverra."
                />
              </Grid>
              <Grid md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                <Tabh
                  img={carve}
                  imgright={right}
                  color="black"
                  text="Review & Confirm"
                  // des="Penatibus eu quis ante."
                />
              </Grid>
              <Grid
                md={3}
                sx={{
                  borderBottom: "3px solid  #4F46E5",
                  display: { md: "flex", xs: "flex" },
                }}
              >
                <Tabh
                  img={carve}
                  imgright={right2}
                  text="reCeipt"
                  color="#4F46E5"
                  // des="Penatibus eu quis ante."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="layoutSide">
          <div className="firstblock">
            <h3 className="received_text">Received</h3>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                className="successImg"
                src={success}
                style={{ marginBottom: "10px" }}
              />
              <h3 className="almostDone_text">You Are Almost Done</h3>
            </div>
            <div>
              <h3 className="first_description">
                Here is the summary of your order. Please follow the
                instructions displayed.
              </h3>
            </div>
          </div>

          <div className="secondblock">
            <div>
              <div className="printblock">
                <img src={print} width={35} height={35} />
              </div>
              <h3 className="instruction_text">
                Instructions for making payment
              </h3>
              <div className="circleblock">
                <div className="circleSign">1</div>
                <h3 className="circle_description">
                  Login To Your Bank's Website
                </h3>
              </div>
              <div className="circleblock">
                <div className="circleSign">2</div>
                <h3 className="circle_description">
                  Transfer The Total Amount To "Flash Technologies"
                  (Beneficiary):
                </h3>
              </div>

              <div className="property_list">
                <div className="instruction_block">
                  <h3 className="itemproperty_text">Beneficiary</h3>
                  <h3 className="itemvalue_text">Flash Transfer</h3>
                </div>
                <div className="instruction_block">
                  <h3 className="itemproperty_text">Address</h3>
                  <h3 className="itemvalue_text">
                    Schuberting 11,A 1010 vienna,austria
                  </h3>
                </div>
                <div className="instruction_block">
                  <h3 className="itemproperty_text">Name of the bank</h3>
                  <h3 className="itemvalue_text">203,90 EUR</h3>
                </div>
                <div className="instruction_block">
                  <h3 className="itemproperty_text">Bic/swift</h3>
                  <h3 className="itemvalue_text">Wuibatwn</h3>
                </div>
                <div className="instruction_block">
                  <h3 className="itemproperty_text">Were Going</h3>
                  <h3 className="itemvalue_text">At651988001000000018</h3>
                </div>
                <div className="instruction_block">
                  <h3 className="itemproperty_text">
                    Payment Reference(required)
                  </h3>
                  <h3 className="itemvalue_text">EB9740837,numan ,USA</h3>
                </div>
              </div>
              <div className="circleblock">
                <div className="circleSign">3</div>
                <h3 className="circle_description">
                  Your money will be availble once we have recived the total
                  amount of 203.90 EUR
                </h3>
              </div>
              <h3 className="track_md">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </h3>
              <div className="trackblock">
                <img
                  className="track_img"
                  src={track}
                  style={{ marginRight: "20px" }}
                />
                <h3 className="track_text">
                  Tracking number (FTN): 771 824 9542{" "}
                </h3>
              </div>

              <h3 className="track_description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </h3>
            </div>
          </div>

          <div className="thirdblock">
            <div>
              <img width={30} height={30} src={print} />
            </div>
          </div>
        </div>
        <div className="footer">
          <img
            src={cellSvg}
            className="footerImg"
            style={{ marginRight: "14px" }}
          />
          <h3 className="footer_text">
            Don`t miss out on the benefits of the my wu SM problem ! you can
            earn point on future transactions. register todat!
          </h3>
        </div>
      </Layout>
    </div>
  );
}
