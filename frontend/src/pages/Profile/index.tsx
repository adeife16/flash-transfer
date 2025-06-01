import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Flowersbg from "../../assests/Images/Flowersbg.jpeg";
import SmallCamera from "../../assests/Images/SmallCamera.png";
import Nomanpic from "../../assests/Images/Nomanpic.png";
import Layout from "../../components/Layout";
import { useStyles } from "../../Styles";
import Footer from "../../components/AppFooter";
import AppButton from "../../components/AppButton";
import ProfileForm from "../../components/ProfileForm";
import sett from "../../assests/Images/sett.png";
import CommonNav from "../../components/CommonNav";

import wallet from "../../assests/Images/headwallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"
import "./loader.css"

import AppInputFields from "../../components/AppInputFields";
import { useState } from "react"
import { useAuth } from "../../Context/globaltContext"
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import { IncomingMessage } from "http";
import { storage } from '../../firebase';
import { styled } from "@mui/system";
import "../../font.css/index.css"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { updateProfile } from "../../Services/auth"


const Profile = () => {


  const [name, setName] = useState();
  // const [FirstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [email, setEmail] = useState()
  const [presentAddress, setpresentAddress] = useState()
  const [permenantAddress, setPermenantAddress] = useState()
  const [country, setCountry] = useState()
  const [city, setCity] = useState()
  const [phone, setPhone] = useState()
  const [postalCode, setpostalCode] = useState()
  const [dob, setDob] = useState()
  const [role, setRole] = useState()
  // console.log(FirstName, "FirstName")


  const InputContainer = styled("div")({
    marginBottom: "32px",
  });

  const { imgUrl, setImgUrl, navigate }: any = useAuth()
  const classes = useStyles();

  const [loader, setLoader] = useState(false);


  const [progresspercent, setProgresspercent] = useState(0);
  const handleUploadClick = (e: any) => {
    runLoader()
    e.preventDefault()
    // debugger
    const file = e.target.files[0]
    if (!file) return;
    // debugger
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on("state_changed",

      (snapshot) => {
        // debugger
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: any) => {
          // debugger
          setImgUrl(downloadURL)

        });
        setLoader(false)
      }
    );
  };
  const runLoader = () => {
    setLoader(true)
  }
  const handleUpdate = async () => {

    const data = {

      firstName: "jawad",
      profileImg: " vvvvvvv",
      phone: " 2423423",
      lastName: " sfsdffs",
      presentAddress: " sfsdfsfsf",
      permenantAddress: " ssfsfs",
      country: "sfsdfs",
      city: "sfsfs",
      postalCode: "sfsfs",
      dob: " sfsfs",

    }

    updateProfile(data)


  }

  return (
    <>
      <Layout>
        <div style={{ maxWidth: "100%", overflow: "hidden" }}>

          {/* <CommonNav  login2="Login" Signup2="Signup"  priceimg1={priceimg1} priceimg2={priceimg2} img3={sett} img1={wallet} img4={user} img2={notification} name="100$" /> */}

          {/* <Grid container>
            <Grid
              container
              sx={{
                backgroundImage: `url(${Flowersbg})`,
              }}
              className={classes.Profile_container_1}
            >
              <Box sx={{ backgroundImage: "url", display: { xs: 'none', sm: "flex" } }} className={classes.camera_box}>


                <input
                  accept="image/*"
                  style={{
                    opacity: "0",
                    position: "absolute",
                    zIndex: "1",
                  }}
                  id="contained-button-file"
                  // multiple
                  type="file"
                  onChange={handleUploadClick}

                />
                <img src={SmallCamera} alt={"image"} style={{ backgroundColor: "" }} />
              </Box>
              <Grid sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "center", alignItems: "center" }} item xs={12}>
                <Box >
                  <img src={SmallCamera} alt={"image"} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.Profile_container_2}>
            <Grid container className={classes.Profile_sub_container_2}>
              <Grid item xs={12} className={classes.grid_xs_12_conatiner}>


                <Box>

                  {loader ?
                    (
                      <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50"
                        >
                          <circle
                            className="path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </div>
                    )
                    : null
                  }
                  {
                    imgUrl &&
                    <img src={imgUrl} alt={"image"} width="200px" height="200px" className={classes.noman_pic_settings} />
                  }

                </Box>
                <Box className={classes.main_contianer_profile_pic}>
                  <Typography className={classes.Numan}>Numan </Typography>
                  <Box className={classes.continer_id_btn}>
                    <Typography className={classes.customer_id}>
                      Customer ID :FT121212
                    </Typography>
                    <AppButton
                      textTransform="none"
                      backgroundColor={"#5D5FEF"}
                      title={"Save"}
                      color={"#fff"}
                      maxWidth={"142px"}
                      onClick={handleUpdate}
                      className={classes.hide_noman_btn}
                    />
                  </Box>
                </Box>

              </Grid>
            </Grid>
          </Grid> */}

          <ProfileForm />
          {/* <Grid>
        <Footer />
      </Grid>
    */}

       
        </div>
      </Layout>


    </>
  );
};

export default Profile;
