import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({

  //   footer css
  Footer_main_container: {
    backgroundColor: "black",
    padding: "0px 112px",

    marginBottom: "-25px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px",
    },
  },
  Stay_Up_to_Date: {
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontFamily: "Inter !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    display: "flex !important",
    alignItems: "center !important",
    letterspacing: "-0.014em !important",
    color: "#FFFFFF !important",
    marginBottom: "6px !important",
  },
  subscribe_description: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    [theme.breakpoints.down("sm")]: {
      fontStyle: "normal !important",
      fontFamily: "Inter !important",

      fontWeight: "400 !important",
      fontSize: "15px !important",
      lineHeight: "24px !important",
    },
  },
  container_Text: {
    marginBottom: "52px !important",
    marginTop: "78px !important",
    [theme.breakpoints.down("lg")]: {
      marginTop: "20px !important",
      marginBottom: "20px !important",
    },
  },
  container_Text2: {
    marginBottom: "52px !important",
    marginTop: "78px !important",
    // display: "flex",
    // alignItems: "center",
  },
  footer_h5_heading: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FFFFFF",
    marginBottom: "12px !important",
  },
  footer_nav_item: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    padding: "0px 0px 8px 0px",
    cursor: "pointer",
  },
  footer_nav_link: {
    marginTop: "56px !important",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  },
  Copyright: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FFFFFF !important",
    marginTop: "32px !important",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontWeight: "400 !important",
      marginBottom: "20px !important",
      fontSize: "14px !important",
      lineHeight: "20px !important",
    },
  },
  //   end footer css

  EmptyContainer: {
    background: "#ECECEC !important",
    height: "56px !important",
  },
  logIn_main_Container: {
    padding: "0px 112px 0px 0px !important",
    background: "#ECECEC !important",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 42px 0px 0px !important",
    },


  },
  logIn_sub_Container: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },

  Email_heading: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontFamily: "Inter !important",

    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: " #374151 !important",
    margin: "0px 0px 4px 0px !important",
  },
  Forgot_password: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#5D5FEF !important",
    cursor: "pointer",
  },
  Checkbox_container: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    maxWidth: "465px !important",
    margin: "0xp 0px 24px 0px !important",
  },
  Forgot_password_container: {
    display: "flex !important",
    justifyContent: "flex-end !important",
    maxWidth: "450px !important",
    margin: "4px 0px 24px 0px !important",
  },
  Account_Q: {
    textAlign: "center",
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    letterSpacing: "0.02em !important",
    color: "#000 !important",
    margin: "25px 0px 31px 0px !important",
    cursor: "pointer",
  },
  Register: {
    marginLeft: "10px",
    color: "#FCBF07",
    fontFamily: "Inter !important",

    fontSize: "20px !important",
    fontWeight: "500 !important",
    lineHeight: "30px !important",
    letterSpacing: "2% !important",
  },
  input_box_1: {
    border: "1px solid #D1D5DB !important",
    borderRadius: "6px !important",
    padding: "0px 0px 0px 15px !important",
    display: "flex !important",
    maxWidth: "450px !important",
  },
  input_box_2: {
    border: "1px solid #D1D5DB !important",
    borderRadius: "6px !important",
    padding: "0px 0px 0px 15px !important",
    display: "flex !important",
    maxWidth: "450px !important",
  },
  login_md_6: {
    padding: "0px 8px 0px 93px !important",
    background: "white !important",
    [theme.breakpoints.down("md")]: {
      padding: "0px 47px !important",
    },
    // [theme.breakpoints.down("sm")]: {
    //   padding: "0px 0px !important",
    // },
  },
  Form_div: {
    [theme.breakpoints.down("md")]: {
      padding: "0px 24px !important",
    },
  },
  sign_image_container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  sub_input_box_container: {
    padding: "0px !important",
    display: "flex",
    alignItems: "center",
  },
  sign_in_divider: {

    '&.MuiDivider-root': {
      "&::before, &::after": {
        borderColor: "black",
      },
      // '&::before': {
      //   borderTop: "thin solid black",
      // },
      // ":after": {
      //   borderTop: "thin solid #ffffff"
      // },
    },
    borderColor: "red",

    paddingTop: "10",
    paddingBottom: "10",
    // color:'white',
    // maxWidth: "450px !important",
    margin: "0px 0px 38px 0px !important",
  },
  Apple_logo: {
    height: "32px !important",
    width: "32px !important",
    marginRight: "10px",
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
    },
  },
  Apple_logoAd: {
    height: "32px !important",
    width: "32px !important",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
    },
  },
  google_logo: {
    height: "32px !important",
    background: "white !important",
    borderRadius: "50px !important",
    padding: "4px 4px !important",
  },
  Wallet_logo: {
    height: "32px !important",
    background: "black !important",
    borderRadius: "50px !important",
    padding: "4px 4px !important",
  },
  //   end signIn css

  // login css

  Get_started: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    fontFamily: "Inter !important",
    color: "#8D8D8D !important",
    margin: "0px 0px 24px 0px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",

    }
  },
  passowrd_instruction: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "18px !important",
    color: "#6B7280 !important",
    maxWidth: "450px",
    marginBottom: "24px !important",
  },
  Email_input_box: {
    border: "1px solid #D1D5DB !important",
    borderRadius: "6px !important",
    padding: "0px 0px 0px 15px !important",
    display: "flex !important",
    maxWidth: "435px !important",
    marginBottom: "32px !important",
  },
  checkBox_description: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#111827 !important",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "400px"
    }

  },
  Image_up_Text: {
    padding: "364px 86px 237px 82px",
    width: "100%",
    height: "914px",
    opacity: "0.7",
    backgroundColor: "#000000",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "58px !important",
    lineHeight: "72px !important",
    letterSpacing: "-0.025em !important",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      padding: "20px 20px 20px 20px",
      lineHeight: "32px !important",
      height: "164px",

    }
  },
  logIn_main_Container2: {
    padding: "0px 90px 0px 0px !important",
    background: "#ECECEC !important",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 42px 0px 0px !important",
    },

    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 0px 0px !important",
    },
  },
  login_md_6_2: {
    padding: "0px 0px 0px 43px !important",
    background: "white !important",
    [theme.breakpoints.down("md")]: {
      padding: "0px 47px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  Create_account_h1: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "38px !important",
    lineHeight: "60px !important",
    color: "#000000 !important",
    // fontFamily: "sans-serif !important",
    margin: "0px 0px 8px 0px  !important",
    [theme.breakpoints.down("sm")]: {
      // textAlign: "center !important",
      lineHeight: "32px !important",
      fontSize: "24px !important",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "26px !important",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px !important",
    },
  },

  // main appbar css

  main_nav_container: {
    height: "88px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    [theme.breakpoints.down("sm")]: {
      height: "52px",

    },
  },
  sub_nav_container: {
    display: "flex",
    margin: "0px -180px",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  nav_Item_box: {
    // padding: "0px 100px 0px 0px ",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("xl")]: {
      padding: "0px 60px 0px 0px ",

    },
    [theme.breakpoints.down("lg")]: {
      padding: "0px 60px 0px 0px ",

    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  nav_items: {
    color: "#FFFFFF",
    margin: "0px 0px 0px 15px !important",
    [theme.breakpoints.down("xl")]: {
      margin: "0px 0px 0px 20px !important",

    },

    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "24px !important",
    [theme.breakpoints.down("lg")]: {
      margin: "0px 0px 0px 35px !important",
    },
  },
  login_button_Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  login_btn: {
    color: "#FFFFFF",
    fontFamily: "Inter !important",
    fontWeight: "500  !important",
    fontSize: "16px  !important",
    lineHeight: "24px  !important",
    marginRight: "32px !important",
  },
  // ham_burger: {
  //   color: "white",
  // },
  // end main appbar css
  FlashLogo_container: {
    display: "flex",
    alignItems: "center"
  },

  // PersonalDetails css start

  details_h1_container: {
    backgroundColor: "#F7FDFF",
    padding: "0px 0px 0px 112px !important",
    margin: "106px 0px 0px 0px !important",

    [theme.breakpoints.down("sm")]: {
      display: "none",
      padding: "10px 45px !important",
    },
  },
  // D_cont:{
  //   display:"flex",
  //   [theme.breakpoints.down("sm")]: {
  //     display:"none",
  //   }

  // },
  My_Detail: {

    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "60px !important",
    lineHeight: "72px !important",
    letterSpacing: "-0.025em !important",
    color: "#242731 !important",
    marginBottom: "4px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "58px !important",

    },
  },
  registration: {
    fontFamily: "Inter !important",

    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontsize: "18px !important",
    lineHeight: "28px !important",
    color: "#FCBF07 !important",
  },
  account_pics_box: {
    backgroundColor: "#F7FDFF",
    display: "flex",
    justifyContent: "center",
    padding: "0px 112px 206px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  Create_Account: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#242731 !important",
    margin: "0px 0px 16px 0px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  Account_Description: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#575F6E !important",
    margin: "0px 0px 36px 0px !important",

  },
  Agree_With: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
  },
  Terms_use: {
    fontFamily: "Inter !important",

    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FCBF07 !important",
  },
  F_name: {
    fontFamily: "Inter !important",

    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "4px !important",
  },
  Gender: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "600 !important",
    fontSize: "24px !important",
    lineHeight: "20px !important",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "500 !important",
      fontSize: "18px !important",
      lineHeight: "28px !important",
    },
  },
  DoB: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    margin: "29px 0px 4px 0px !important",
  },
  // PersonalDetails css end

  // TrackMyOrder css start
  p2_container_1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "66px 0px 187px 0px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px 10px 10px !important",
      // backgroundPosition:"43% !important"
    },
  },
  track_transfer: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontFamily: "Inter !important",

    fontSize: "48px !important",
    lineHeight: "60px !important",
    // textAlign: "center  !important",
    color: "#fff",
    marginBottom: "14px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px !important",
      lineHeight: "24px !important",
      letterSpacing: " -0.025em !important",
      marginBottom: "10px !important",
    },
  },
  track_transfer_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",

    fontSize: "16px !important",
    lineHeight: "24px !important",
    // textAlign: "center !important",
    color: "#fff",
    marginBottom: "70px !important",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: " -0.025em !important",
      fontSize: "15px !important",
      marginBottom: "20px !important",
    },
  },
  btn_tracking: {
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",

      fontSize: "12px !important",
      lineHeight: "24px !important",
    },
    [theme.breakpoints.down(361)]: {
      padding: "6px 4px !important",
    },
  },

  tracking_number_container: {
    borderRadius: "6px",
    background: "#FFFFFF !important",
    opacity: "0.9 !important",
    padding: "24px 24px 0px 24px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 24px 0px 24px !important",

    },
  },
  tracking_number: {
    fontFamily: "Inter !important",

    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151",
    marginBottom: "16px !important",
  },
  warning_digits: {
    fontFamily: "Inter !important",

    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#C5221F",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px !important",
    },
  },
  continue_container: {
    display: "flex",
    justifyContent: "flex-end",
    // marginBottom:"24px"
  },
  button_conditional_container: {
    backgroundColor: "#000 !important",
    padding: "16px 16px !important",
    display: "flex",
    marginBottom: "4px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "8px 8px !important",
      marginBottom: "20px !important",
    },
  },
  btn_icon_H: {
    [theme.breakpoints.down("sm")]: {
      height: "25px !important",
    },
  },
  control_btn: {
    [theme.breakpoints.down("sm")]: {
      padding: "9px !important",
      fontStyle: "normal !important",
      fontWeight: "500 !important",
      fontSize: "14px !important",
      fontFamily: "Inter !important",

      lineHeight: "20px !important",
    },
  },
  visit_office: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontFamily: "Inter !important",

    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#2E2B26 !important",
    textAlign: "center",
    marginBottom: "16px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      lineHeight: "29px !important",
    },
  },
  visit_office_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",

    fontSize: "18px !important",
    lineHeight: "26px !important",
    color: "#848484 !important",
    textAlign: "center",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
      lineHeight: "24px !important",
      marginBottom: "16px !important",
    },
  },
  hide_br: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  p2_container_2: {
    padding: "54px 113px !important",
    backgroundColor: "#ECECEC !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  // office_cards_container: {
  //   padding: "48px 48px !important",
  //   backgroundColor: "#fff !important",
  //   borderRadius: "24px !important",
  //   boxShadow: "0px 4px 25px rgba(93, 95, 239, 0.1) !important",
  // },
  country_name: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "600 !important",
    fontSize: "24px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    TextAlign: "center !important",
    // marginBottom: "56px !important",
    marginLeft: "12px !important",
    padding: "10px 0px !important",
  },
  city_icon_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "24px !important",
    boxShadow: "4px 4px 50px rgba(93, 95, 239, 0.1) !important",
    marginBottom: "24px !important",
  },
  Email_text: {
    fontFamily: "Inter !important",

    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    TextAlign: "center !important",
    marginLeft: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    }
  },
  email_icon_Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px !important",
  },
  numbers_icon_Box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // FAQ CSS START
  Help_center: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    TextAlign: "center !important",
    marginBottom: "14px !important",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },

  Help_center_description: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    TextAlign: "center !important",
    marginBottom: "14px !important",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "15px !important",
      lineHeight: "24px !important",
      // marginBottom: "10px !important",
    },
  },
  faq_container: {
    padding: "66px 151px 202px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0px 0px 0px !important",
    },
  },
  FAQ_container2: {
    padding: "0px 39px !important",
    background: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
      background: "#fff",
    },
  },
  f_a_Q_heading: {

    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "30px !important",
    fontFamily: "Inter !important",
    lineHeight: "36px !important",
    marginBottom: "15px !important",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontFamily: "Inter !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  f_a_Q_description: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
  },
  questions_heading: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontFamily: "Inter !important",

    fontSize: "18px !important",
    lineHeight: "24px !important",
    color: "#000 !important",
    marginBottom: "8px !important",
  },
  describe_Answers: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
  },
  f_a_Q_container: {
    padding: "0px 0px 0px 53px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  FAQ_sub_container2: {
    padding: "80px 0px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  Still_have_question: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    TextAlign: "center",
    color: "#000000",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  FAQ_container3: {
    padding: "56px 149px !important",
    backgroundColor: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 20px !important",
    },
  },
  FAQ_sub_container3: {
    // padding: "80px 0px !important",
    display: "flex",
    FlexDirection: "column !important",
    justifyContent: "center",
    alignItems: "center",
  },
  Still_have_question_answers: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    textAlign: "center",
    color: "#6A6A6A",
  },

  // Refer friend css start
  refer_a_friend: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000",
    marginBottom: "19px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  refer_remove_br: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  refer_a_friend_description: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    marginBottom: "30px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
  },
  refer_friend_container1: {

    padding: "56px 140px 88px 140px !important",
    backgroundColor: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
      backgroundColor: "#fff",
      FlexDirection: "column !important",
    },
  },
  refer_friend_subcontainer1: {

    [theme.breakpoints.down("sm")]: {
      // display: "flex",
      display: "flex",
      justifyContent: "center"

      // justifyContent:"center",

      // flexDirection: "column-reverse !important",
    },
  },
  refer_btn_text_button_Box: {
    display: "flex",
    FlexDirection: "column !important",
    justifyContent: "flex-end",
    padding: "0px 0px 29px 0px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  refer_friend_container2: {
    padding: "56px 60px 56px 40px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-60px",
      marginBottom: "-60px",
      padding: "20px 0px !important",
    },
  },
  friend_form_box: {
    padding: "32px 32px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    },
  },
  Referral_Program: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#242731 !important",
    marginBottom: "16px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "15px !important",
    },
  },
  Referral_Program_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: " !imp#575F6Eortant",
    marginBottom: "32px !important",
  },
  friend_inputs: {
    marginBottom: "24px !important",
  },
  friend_inputs_Email: {
    marginBottom: "36px !important",
  },
  checkbox_text: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#575F6 !important",
  },
  input_label_name: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: " #374151 !important",
  },
  code_heading: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "black !important",
    marginBottom: "20px !important",
  },
  code_heading_description: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: " #6A6A6A !important",
  },

  // Blogs css start
  Blog_container_1: {
    padding: "56px 112px !important",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px !important",
    },
  },
  Bank_heading: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: " #000 !important",
    marginBottom: "15px !important",
  },
  Bank_heading_description: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: " #6A6A6A !important",
    marginBottom: "24px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
  },

  date_text: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: " #000 !important",
    marginLeft: "33px !important",
    alignSelf: "center",
  },
  btn_date_box: {
    display: "flex",
    marginBottom: "40px !important",
  },
  Blog_subcontainer_1: {
    display: "flex",
    FlexDirection: "column !important",
    justifyContent: "center",
  },
  ourBlogs: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: " #000 !important",
    textAlign: "center",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  ourBlogs_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: " #6A6A6A !important",
    textAlign: "center",
    width: "550px",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0px -20px !important",
      marginBottom: "15px !important",
      fontSize: "15px !important",

    },
  },
  Belogs_cards_box: {
    padding: "30px 32px !important",
    backgroundColor: "#fff",

    borderRadius: "5px",
    border: "1px solid #D1D5DB",
    '&:hover': {
      border: "none",

      boxShadow: " 0px 20px 40px rgba(0, 0, 0, 0.2)",
    },
  },
  Blog_container_2: {
    backgroundColor: "#F7FDFF",
    padding: "56px 112px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px !important",
    },
  },
  cards_date: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#5D5FEF !important",
    marginBottom: "14px !important",
  },
  cards_Blogs_heading: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "5px !important",
  },
  cards_Blogs_heading_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    marginBottom: "80px !important",
  },
  image_box: {
    marginBottom: "30px !important",
  },
  time_12hrs_open: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    marginBottom: "14px !important",
  },
  send_buy_text: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "45px !important",
  },
  Andreas_Petersen: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "14px !important",
    lineHeight: "16px !important",
    color: "#6A6A6A !important",
    marginBottom: "3px !important",
    letterSpacing: " -0.318182px !important",
  },
  blogs_writer: {
    fontFamily: "Inter !important",
    fontWeight: "300 !important",
    fontSize: "12px !important",
    lineHeight: "14px !important",
    color: "#6A6A6A !important",
    letterSpacing: " -0.272727px !important",
  },
  Latest_belogs: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  Latest_belogs_description: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",
      marginBottom: "20px !important",
    },
  },
  buy_sell_crypto: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "500 !important",
      fontSize: "18px !important",
      lineHeight: "28px !important",
    },
  },
  latest_blog_avatar_settings: {
    height: "40px",
    width: "43px",
  },

  // Find location css start

  retail_store: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#fff !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  retail_store_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#fff !important",
    textAlign: "center",
  },
  Find_location_container1: {

    // padding: "63px 113px 264px 113px !important",
    [theme.breakpoints.down("sm")]: {
      // padding: "50px 20px !important",
      height: "190px",
      marginTop: "0px !important",
    },
  },
  Find_location_subcontainer1: {},
  Find_location_container2: {
    padding: "52px 118px 56px 106px !important",
    height: "383px",
    backgroundColor: "#F7FDFF !important",
    [theme.breakpoints.down("sm")]: {
      height: "190px",
      padding: "0px 10px 10px !important",
    },
  },
  Find_location_container3: {
    padding: "52px 118px 56px 106px !important",
    backgroundColor: "#F7FDFF !important",
    [theme.breakpoints.down("sm")]: {
      padding: "290px 0px 20px 0px !important",
    },
  },
  Find_location_h2: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "20px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "10px !important",
    },
  },
  France_h1: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "60px !important",
    lineHeight: "72px !important",
    letterSpacing: -"0.025em important",
    color: "#5D5FEF !important",
    marginBottom: "56px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "500 !important",
      fontSize: "18px !important",
      lineHeight: "28px !important",
      marginBottom: "10px !important",
    },
  },
  Find_here: {
    marginBottom: "4px !important",
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    [theme.breakpoints.down("sm")]: {

      marginTop: "20px !important",
    },
  },
  Location_text: {
    fontFamily: "Inter !important",
    fontWeight: "600 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
  },
  Location_text_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    marginBottom: "25px !important",
  },
  container2_md_6: {
    // backgroundColor: "#fff",
  },
  address_main_box: {
    display: "flex",
  },
  address_test_Box: {
    marginLeft: "15px !important",
  },
  Agent_name: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    marginLeft: "15px !important",

  },
  icon_name_container: {
    display: "flex",
  },
  Agent_full_name: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
  },
  section_container: {
    display: "flex",
    justifyContent: "space-between",
  },
  sub_container2_md_6: {
    padding: "15px 15px !important",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 10px !important",
      padding: "15px 10px !important",

    },
  },
  agent_padding: {
    padding: "0px 0px 0px 55px !important",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.9)",
      padding: "0px 0px 0px 30px !important",
    },
  },
  location_btn_container: {
    display: "flex",
    // justifyContent: "space-around",
    padding: "0px 0px 0px 55px !important",

  },
  location_btn: {
    marginLeft: "20px !important",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px !important",
    },
  },
  hide_break_agent: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
  },

  // Profile css start
  camera_box1: {
    height: "48px",
    width: "30px",

    position: "absolute",
    top: "82%",
    left: "87%",
    [theme.breakpoints.down("sm")]: {
      position: "none !important",
      top: "0",
      left: "0",
    }
  },
  camera_box: {
    height: "48px",
    width: "48px",

    position: "absolute",
    top: "81%",
    left: "90%",
    [theme.breakpoints.down("sm")]: {
      position: "none !important",
      top: "0",
      left: "0",
    }
  },
  Profile_container_1: {
    height: "383px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      position: "none !important",
      height: "113px",
      // padding: "36px 189px 27px 190px !important"
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  },
  Profile_container_2: {
    padding: "0px 112px !important",
    background: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {

      display: "flex", justifyContent: "center",
      padding: "0px 70px !important",

      // padding: "0px 112px 0px 110px !important",
    }
  },
  Numan: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
      fontWeight: "700 !important",
      fontSize: "14px !important",
      lineHeight: "32px !important",
    }
  },
  customer_id: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "12px !important",
      lineHeight: "24px !important",
    }
  },
  Profile_sub_container_2: {
    marginTop: "-69px",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-8px",




    }
  },
  hide_noman_btn: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important"
    }
  },
  grid_xs_12_conatiner: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {

      display: "flex",

      alignItems: "center",
      flexDirection: "row",
      paddingBottom: "10px"
    }
  },
  main_contianer_profile_pic: {
    width: "100% !important",
    padding: "112px 0px 0px 0px !important",
    marginLeft: "20px !important",
    [theme.breakpoints.down("sm")]: {

      padding: "0px 0px 0px 0px !important",
    }
  },
  continer_id_btn: {
    display: "flex",
    justifyContent: "space-between",
  },
  Profile_container_3: {
    padding: "50px 112px 148px !important",
    background: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    }
  },
  noman_pic_settings: {
    [theme.breakpoints.down("sm")]: {
      width: "60px !important",
      height: "60px !important",

    }
  },
  sub_Profile_container_3: {
    padding: "56px 103px 0px 103px !important",
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",

    }
  },
  p_F_name: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "12px !important",

  },

  // FindLocationProcess2 css start

  find_location_process_2_container: {
    padding: "85px 112px 56px 112px !important",

    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.9)",
      padding: "20px 0px !important"
    }

  },
  find_location_h1: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "14.33px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      marginBottom: "20px !important",

    }
  },
  find_location_h1_description: {
    width: "550px",
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#9DAFBD !important",
    marginBottom: "37px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      width: "100%",
      fontSize: "15px !important",
      lineHeight: "24px !important",
      marginBottom: "20px !important",

    }
  },
  error_name: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#9DAFBD !important",
    [theme.breakpoints.down("sm")]: {

      fontFamily: "Inter !important",
      fontSize: "12px !important",
      lineHeight: "20px !important",
    }
  },
  error_container: {
    background: "#FFE1E1 !important",
    padding: "15px 0px !important",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px !important",
    }
  },
  warning_icon: {
    verticalAlign: "bottom",
    color: "#FF0000",
    marginRight: "9px !important",
  },
  find_location_process_3_container: {
    padding: "0px 112px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px !important"
    }
  },
  send_FRom: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "4px !important",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px !important"
    }
  },
  Current_Location: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#5D5FEF !important",
    marginBottom: "41px !important",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontWeight: "400 !important",
      fontSize: "12px !important",
      lineHeight: "24px !important",

    }
  },
  try_to_do: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "60px !important",
    lineHeight: "72px !important",
    color: "#374151 !important",
    marginBottom: "32px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",

      lineHeight: "32px !important",
    }
  },
  pick_up_money: {
    marginLeft: "20px !important",
  },
  find_location_process_4_container: {
    padding: "56px 112px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px !important"
    }
  },
  Visit_us: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "15px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",

      fontWeight: "800 !important",
      fontSize: "24px !important",
      lineHeight: "29px !important",
    }
  },
  Visit_us_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    width: "45%",
    color: "#9DAFBD !important",
    marginBottom: "65px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.9)",


      marginBottom: "20px !important",
      fontSize: "15px !important",

      width: "100%",

    }
  },
  social_media_images: {
    marginLeft: "10px !important",
  },
  find_location_process_5_container: {
    // height:"1000px",
    widht: "100%",
    backgroundRepeat: "no-repeat",
    padding: "200px 450px",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: "200px 20px",
    }
  },
  Matthews_Street: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#026FC2 !important",
    marginBottom: "8px !important",
    textAlign: "center",
  },
  location_btn_map_box: {
    padding: "32px 83px 25px ",
    background: "#fff",
    borderRadius: "24px",
    [theme.breakpoints.down("sm")]: {
      padding: "32px 59px ",
    }
  },

  // page not found css start
  error_404: {
    fontFamily: "Inter !important",
    fontWeight: "600 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#5D5FEF !important",
    marginBottom: "8px !important",
    textAlign: "center",
  },
  Page_not_found: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#111827 !important",
    marginBottom: "8px !important",
    textAlign: "center",
  },
  sorray_message: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6B7280 !important",
    marginBottom: "24px !important",
    textAlign: "center",
  },
  go_back_home: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#5D5FEF !important",
    marginBottom: "154px !important",
    textAlign: "center",
  },
  contact_support: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#6B7280 !important",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  page_not_found_container: {
    padding: "154px 128px 48px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },

  // registration page for merchant
  merchatnt_container_1: {
    padding: "42px 112px 56px !important",
    background: "#F9FAFB",
    [theme.breakpoints.down("sm")]: {

      padding: "20px 0px !important",
      background: "#fff",
    }
  },
  registration_text: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.9)",
      fontWeight: "700 !important",
      fontSize: "23px !important",
      lineHeight: "32px !important",
    }
  },
  merchatnt_container_2: {
    padding: "0px 112px 56px !important",
    background: "#F9FAFB",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px !important",
      background: "#fff",

    }

  },
  form_grid: {
    padding: "24px 24px !important",
    backgroundColor: "#fff",
    borderRadius: "6px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
      background: "#fff",
    }
  },
  send_identity: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
  },
  Upload_documnets: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#374151 !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "12px !important",
      lineHeight: "32px !important",
    }
  },
  images_format: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
    lineHeight: "16px !important",
    color: "#6B7280 !important",
    textAlign: "center",
  },
  Upoad_text: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#6B7280 !important",
    marginBottom: "5px  !important",
    textAlign: "center",
  },
  upload_file_contianer: {
    padding: "150px 408px !important",
    marginBottom: "50px !important",
    border: "3px dashed #6B7280",
    borderRadius: "6px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0px !important",
    }
  },
  btn_submit_form_box: {
    display: "flex",
    justifyContent: "flex-end",
  },
  upload_icon_box: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "12px !important",
  },

  // contact us form css start

  contact_us_text: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "12px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      lineHeight: "29px !important",
    }
  },
  contact_us_text_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "18px !important",
    lineHeight: "24px !important",
    color: "#6B7280 !important",
    marginBottom: "32px  !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
      lineHeight: "24px !important",
    }
  },
  address_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6B7280 !important",
    marginBottom: "24px  !important",
  },
  contact_us_container_1: {
    padding: "76px 78px !important",
    background: "#F7FDFF !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px !important",
      background: "#F7FDFF !important",
    }
  },
  contact_form_container: {
    padding: "50px 50px !important",

    backgroundColor: "#F9FAFB !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
      background: "#F7FDFF !important",
    }
  },
  contact_form2: {
    padding: "40px 0px !important",
    backgroundColor: "#fff !important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",

      backgroundColor: "#F7FDFF !important",

    }
  },

  // Notification css start
  setting_text: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "27px  !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    }

  },
  Manage_my_card: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    marginBottom: "29px  !important",
    display: "flex",
  },
  cards_icon: {
    marginRight: "9px !important",
  },
  Notification_icon_text: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    display: "flex",
  },
  sms_text: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
    display: "flex",
  },
  sms_text_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#98A9BC !important",
    display: "flex",
    marginBottom: "16px !important",
  },
  chat_icon: {
    marginRight: "22px",
  },
  notification_main_container: {

    backgroundColor: "#F7FDFF",
    padding: "55px 117px 148px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px",

    }
  },

  // Ok page Personal verification css start
  Personal_Verification: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "56px !important",

  },
  basic_text: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#000 !important",
    marginBottom: "10px !important",
  },
  Personal_info: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
  },
  Personal_Verification_container: {
    backgroundColor: "#F7FDFF",

    padding: "42px 193px 151px 108px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  verified_btn_container: {
    marginTop: "114px !important",
  },

  // App info css start

  appinfo_container12: {
    // padding: "66px 100px 261px 140px !important",
    backgroundRepeat: "no repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px !important",
    },
  },
  appinfo_container123: {
    transform: "scale(0.9)",
    padding: "66px 0px 104px 55px !important",
    backgroundRepeat: "no repeat",

    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-20px",
      padding: "0px 0px  20px 0px!important",
    },
  },
  appinfo_container1: {
    padding: "66px 100px 104px 140px !important",
    backgroundRepeat: "no repeat",

    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px !important",
    },
  },
  fast_transfer: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#fff !important",
    marginBottom: "15px !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  fast_transfer_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    width: "45%",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#fff !important",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "15px !important",
      width: "100%",
      lineHeight: "24px !important",
    },
  },
  SendMoney: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "32px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      marginBottom: "10px !important",

      lineHeight: "32px !important",
    },
  },
  SendMoney_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: "#000 !important",
  },
  btn_playstore: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",
      marginBottom: "20px",
      height: "60px",
    },
  },
  SamsungGalaxyS8Small_s: {
    width: "213px",
    // height:"357px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",

    },
  },
  SamsungGalaxyS8Big_b: {
    width: "326.87px",

    // height:"624.88px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",

    },
    // width:"224px"
  },
  Our_Process: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#FCBF07 !important",
    marginBottom: "12px !important",
  },
  how_to_send_money: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#fff !important",
    marginBottom: "12px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  how_to_send_money_description: {
    fontFamily: "Inter !important",
    paddingRight: "50px",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#fff !important",
    marginBottom: "12px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "400 !important",
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
  },
  appinfo_container3: {

    // padding: "66px 130px 56px 130px !important",
    backgroundColor: "#000",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-70px",
      padding: "0px 0px 0px 10px !important",
    },
  },
  app_info_cards: {
    justifyContent: "space-between",
    // alignItems: "center", 
    displlay: "flex",
    //  padding: "0px 10px !important",
    flxDirection: "row", display: "flex",
    // transform: "scale(0.8)",
    padding: "40px 20px !important",
    backgroundColor: " #192431",
    borderRadius: "16px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-10px"
    },
  },
  Download_text: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#fff !important",
    marginBottom: "3px !important",
  },
  Download_text_descrip: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "14px !important",
    lineHeight: "24px !important",
    color: "#fff !important",
  },

  // settings page css
  setting_text_h1: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    }
  },
  My_Cards_h2: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: "#343C6A !important",
    marginLeft: "-23px",
  },
  Manage_my_card_2: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    // color: "#000 !important",
    marginBottom: "15px !important",
  },
  Manage_my_card_wallet_icon: {
    verticalAlign: "middle",
  },
  settings_container_1: {
    padding: "55px 112px 32px 112px !important",
    backgroundColor: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  settings_container_2: {
    padding: "0px 117px 32px 73px !important",
    backgroundColor: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px !important",
    }
  },
  settings_my_cards: {
    padding: "20px 0px 20px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 20px 0px",

      // backgroundColor: "#F7FDFF !important",
    }
  },
  settings_my_cards23: {
    padding: "20px 110px 20px 10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px -20px 0px -20px ",
      padding: "20px 90px 20px 10px",

      // backgroundColor: "#F7FDFF !important",
    }
  },
  settings_my_cards2: {
    marginBottom: "300px",
    padding: "20px 0px 20px 0px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 20px 0px",
      marginBottom: "-20px",

      // backgroundColor: "#F7FDFF !important",
    }
  },
  settings_cards_main_box: {
    padding: "30px 34px 27px !important",
    borderRadius: "16px !important",
    backgroundColor: "#fff",
  },
  Visa_text: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "11px !important",
    lineHeight: "13px !important",
    color: "#718EBF !important",
  },
  visa_chip_container: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "44px !important",
  },
  CARD_HOLDER: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "10px !important",
    lineHeight: "12px !important",
    color: "#718EBF !important",
    marginBottom: "3px !important",
  },
  Eddy_Cusuma: {
    fontFamily: "Inter !important",
    fontWeight: "600 !important",
    fontSize: "13px !important",
    lineHeight: "16px !important",
    color: "#343C6A !important",
  },
  number_settings: {
    fontFamily: "Inter !important",
    fontWeight: "600 !important",
    fontSize: "15px !important",
    lineHeight: "18px !important",
    color: "#343C6A !important",
    // marginBottom: "3px !important",
  },
  status_checking_Container: {
    display: "flex",
    justifyContent: "space-between",
  },

  // patment method css start
  Choose_Card: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000 !important",
    marginBottom: "8px !important",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "700 !important",
      fontFamily: "Inter !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
    },
  },
  Choose_Card_description: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#9DAFBD !important",
    marginBottom: "31px !important",
  },
  paymentmethod_container_1: {
    padding: "56px 115px 385px 112px",
    backgroundColor: "#F7FDFF",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px !important",
    }
  },
  paymethod_btn: {
    marginLeft: "8px !important",
  },

  // addNew Page css start
  add_new_f_name: {
    fontFamily: "Inter !important",

    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#374151 !important",
    marginBottom: "4px !important",
  },
  // addNewTwo Page css start------
  lableinput: {
    margin: "0px 0px",
    borderRight: "none",
    borderLeft: "none",
    backgroundColor: "#fff",
    padding: "10px 15px 10px 15px",
    borderTop: "1px  solid #E5E7EB ",
    borderBottom: "1px  solid #E5E7EB ",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0px",
      borderRight: "1px  solid #E5E7EB",
      borderLeft: "1px  solid #E5E7EB",
      backgroundColor: "white",


    }
  },


  // new css of log in page
  login_page_main_container: {
    padding: "42px 104px 209px 0px",
    backgroundColor: "#F7FDFF",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 0px 0px 0px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 0px 0px",
    },
  },
  SignIn_heading: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000000 !important",
    margin: "0px 0px 48px 0px  !important",
    // [theme.breakpoints.down("sm")]: {
    //   textAlign: "center !important",
    // },
  },
  SignIn_heading2: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000000 !important",
    margin: "0px 0px 48px 0px  !important",
    [theme.breakpoints.down("sm")]: {
      // textAlign: "center !important",
      fontSize: "41px !important",

    },
  },
  grid_form_container: {
    padding: "0px 8px 0px 93px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("lg")]: {
      padding: "0px 8px 0px 30px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
    },
  },
  remember_meText: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",

    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#111827 !important",
  },

  // new sign upp css start
  sign_up_main_container: {
    padding: "42px 108px 100px 0px",
    backgroundColor: "#F7FDFF",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px",
    }
  },
  grid_container_md_7: {

    // padding: "364px 86px 237px 82px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // position:"relative",
    backgroundPosition: "100%",
    height: "914px",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
      // padding: "50px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px",
      height: "164px",
      backgroundPosition: "0% 35%"
    },
  },
  sign_up_grid_5_box: {
    padding: "0px 3px 0px 94px",
    backgroundColor: "#fff",
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px",
    }
  },
  // -----------------------About-Page css started here

  About_container: {
    backgroundColor: "#F7FDFF",
  },


  Top_title: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px !important",
      fontFamily: "Inter !important",
      fontSize: "20px !important",
      lineHeight: "24px !important",
    },
    marginTop: "40px !important",
    fontFamily: "Inter !important",
    fontSize: "60px !important",
    fontWeight: "800 !important",
    lineHeight: "72px !important",
    letterSpacing: "-0.025em !important",
    color: "#2E2B26",
  },
  Wonder_Txt: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "-40px",

    },
  },

  Wonder_Title: {
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "700 !important",
    lineHeight: "24px !important",
  },

  Wonder_sub: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6B7280",
  },
  card_container: {
    padding: "33px 24px 51px 24px",
    borderRadius: "24px",
    backgroundColor: "#fff",

  },
  Feature_title: {
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "700 !important",
    lineHeight: "24px !important",
  },
  feature_sub: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6B7280",
  },
  man_tms: {
    fontSize: "48px !important",
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
    textAlign: "center",
    paddingBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      lineHeight: "29px !important",
      paddingBottom: "16px",
    },
    // color: "#fff !important",
  },
  team_Des: {
    // paddingTop: "16px",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    width: "450px",
    lineHeight: "26px !important",
    textAlign: "center",
    color: "#848484",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px !important",
      lineHeight: "24px !important",
      textAlign: "center",

      width: "100%",
    },
  },
  teamcard_Cont: {
    boxShadow: "4px 4px 25px rgba(57, 47, 220, 0.16) ",
    borderRadius: "24px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 0px !important",

      backgroundColor: "#fff",
    },
    height: "359px !important",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  Cont_name: {
    fontSize: "24px !important",
    fontWeight: "600 !important",
    lineHeight: "28px !important",
    fontFamily: "Inter !important",

    textAlign: "center",
    color: "#000000",
  },
  Emaail: {
    fontSize: "18px !important",
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    textAlign: "center",
    color: "#6A6A6A",
  },
  visit_Card: {
    padding: "56px 48px !important",
    backgroundColor: "#FFFF",
    boxShadow: "0px 4px 25px rgba(93, 95, 239, 0.1) !important",
    borderRadius: "24px !important",
  },
  visit_card_container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "end",
    // padding: "10px !important",

    // [theme.breakpoints.down("sm")]: {
    //   margin: "0px 10px !important",
    // },
  },
  contry_N: {
    backgroundColor: "#FFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "296px",
    // padding: "-3px 0px",
    borderRadius: "24px",
    boxShadow: "4px 4px 50px rgba(93, 95, 239, 0.1)",
  },
  //------------------------ History css
  inputTitle: {
    padding: "5px",
    marginTop: "3px !important",
    fontFamily: "Inter !important",

    fontSize: "12px !important",
    fontWeight: "500 !important",
    lineHeight: "15px !important",
    color: "#6A6A6A",
    textTransform: "uppercase",
  },
  tableheader: {
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontSize: "12px !important",
      lineHeight: "14.06px !important",
    },
    fontFamily: "Inter !important",

    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#6A6A6A",
  },

  Date: {
    fontFamily: "Inter !important",

    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontSize: "18px !important",
      lineHeight: "28px !important",
    },
  },
  month: {
    fontFamily: "Inter !important",

    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6A6A6A",
  },
  bank: {
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontSize: "12px !important",
      lineHeight: "14.06px !important",
    },
  },
  money: {
    fontFamily: "Inter !important",

    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#98A9BC",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontSize: "10px !important",
      lineHeight: "24px !important",
    },
  },
  //------------- Privacy Policy css

  titlecontainer: {
    display: "flex",
    justifyContent: "center",

  },
  privacyhead: {
    marginTop: "66px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px !important",
      fontFamily: "Inter !important",

      lineHeight: "32px !important",
    },
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
    textAlign: "center",
    color: "#FFFFFF",
  },
  privacysub: {
    marginTop: "66px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 0px",

      fontSize: "15px !important",
    },
    padding: "0px 400px",
    fontFamily: "Inter !important",

    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    textAlign: "center",
    color: "#fff",
  },
  francehead: {
    marginTop: "66px",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    fontFamily: "Inter !important",
    lineHeight: "32px !important",
    padding: "10px 0px",
  },

  francepara: {
    fontFamily: "Inter !important",
    padding: "10px 0px",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6A6A6A",
  },
  paragraphs: {
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "28px !important",
    color: "#6A6A6A",
  },
  Related: {
    marginTop: "66px",
    fontSize: "24px !important",
    fontFamily: "Inter !important",

    fontWeight: "700 !important",
    lineHeight: "32px !important",
    padding: "10px 0px",
    borderBottom: "1px solid #000",
  },
  relatedLink: {
    color: "#5D5FEF",
    textDecoration: "none",
    fontFamily: "Inter !important",
    padding: "10px 0px 10px 0px",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "28px !important",
  },

  //------------------Privacy Policy css end

  //---------------------- CurrencyUpdate css start
  Lupdate: {
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "400 !important",
    lineHeight: "21.09px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
      lineHeight: "14.06px !important",
    },
  },

  //---------------------- CurrencyUpdate css end
  //---------------------- paymentdone css start
  tracks: {
    marginRight: "37px !important",
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
  },
  Prices: {
    margin: "7px 0px 7px 0px !important",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
  },
  transaction: {
    margin: "7px 0px 7px 0px !important",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#6A6A6A",
  },
  transaction_Link: {
    margin: "7px 0px 7px 0px !important",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    fontWeight: "500 !important",
    lineHeight: "28px !important",
    color: "#5D5FEF",
  },
  Review: {
    [theme.breakpoints.down("sm")]: {

      fontSize: "24px !important",
      fontWeight: "700 !important",
      lineHeight: "32px !important",
    },
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
  },
  map_txt: {
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontSize: "16px !important",
      fontWeight: "700 !important",
      lineHeight: "19.36px !important",
    },
    fontFamily: "Inter !important",
    fontSize: "48px !important",
    fontWeight: "800 !important",
    lineHeight: "60px !important",
  },
  Receiver: {
    fontFamily: "Inter !important",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontSize: "16px !important",
      fontWeight: "700 !important",
      lineHeight: "32px !important",
    },
  },
  Review_para: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#9DAFBD",
  },


  sender: {
    fontFamily: "Inter !important",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important",
  },
  sender_para: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#6A6A6A",
  },

  country_txt: {
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
  },
  country_para: {
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
    color: "#6B7280",
  },

  //---------------------- reviews css end
  //---------------------- addnew css start

  qa: {
    fontFamily: "Inter !important",
    fontSize: "24px !important",
    fontWeight: "700 !important",
    lineHeight: "32px !important"


  },
  //---------------------- addnew css end
  //---------------------- Bpayment css start

  insts_Txt: {
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
    color: "#6A6A6A",
  },
  tknumber: {
    fontFamily: "Inter !important",
    fontSize: "24px !important",
    fontWeight: "400 !important",
    lineHeight: "60px !important",

    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
      fontWeight: "700 !important",
      lineHeight: "19px !important",
    },
  },
  note: {
    fontFamily: "Inter !important",
    fontSize: "16px !important",
    fontWeight: "400 !important",
    lineHeight: "24px !important",
    color: "#9DAFBD",
  },
  //---------------------- Bpayment css end

  overlapIcon: {
    position: 'absolute',
    bottom: '-80px',
    left: '20%',
  },
  usps: {
    fontFamily: "Inter !important",
    fontSize: '24px !important',
    fontWeight: '400 !important',
    lineHeight: '35px !important',
    letterSpacing: '0em !important'

  },
  flashBoxesLine: {
    margin: '0 auto',
    marginTop: '100px',
    marginBottom: '10px',
    display: 'block'

  },
  flashBoxes: {
    background: '#181818',
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    padding: '30px',
    borderRadius: '30px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: '15px'
  },
  flashBoxesPara: {
    fontFamily: "Inter !important",
    fontWeight: '400 !important',
    fontSize: '20px !important',
    opacity: '0.7'



  },
  flashBoxesAnchor: {
    color: '#FBBF04 !important',
    fontFamily: "Inter !important",

    fontWeight: '400 !important',

    fontSize: '20px !important',
    textDecoration: 'none !important'

  },
  flashBoxesImage: {
    maxWidth: '100%',
    marginTop: '20px'

  },
  // Home page css

  Main_container: {
    padding: "0px 112px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px !important",
    },
  },
  Section_1_grid_1: {
    [theme.breakpoints.down("md")]: {
      padding: "50px 265px 50px 50px !important",

    },
    [theme.breakpoints.down("sm")]: {
      padding: "50px 17px 0px 17px !important",
      background: "#F7FDFF",
      opacity: "0.8",
    },
  },

  Section_1_grid_2: {
    // padding:"106px 0px 192px 0px !important",s
    [theme.breakpoints.down("md")]: {
      padding: "50px 265px 50px 50px !important",
      // background: "#F7FDFF",
      // opacity: "0.8",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 17px 20px 17px !important",
      background: "#F7FDFF",
      // opacity: "0.8",
    },
  },
  Flash_Transfer_Content: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontFamily: "Inter !important",

    fontSize: "60px !important",
    lineHeight: "72px !important",
    letterSpacing: "-0.025em !important",
    color: "#000 !important",
    marginBottom: "20px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px !important",
      fontFamily: "Inter !important",
      lineHeight: "36px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Inter !important",
      fontSize: "24px !important",
      lineHeight: "32px !important",
      // width:"93% !important"
    },
  },
  text_yellow: {
    color: "#FCBF07",
  },
  useflash_para: {
    fontStyle: "normal !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: " #6A6A6A !important",
    marginBottom: "20px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
      lineHeight: "18px !important",
      fontWeight: "500 !important",
      fontFamily: "Inter !important",
      color: "#000 !important",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      fontFamily: "Inter !important",
      fontSize: "18px !important",
      lineHeight: "28px !important",
    },
  },
  useflash_para2: {
    fontStyle: "normal !important",
    fontWeight: "700 !important",
    fontFamily: "Inter !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: "black !important",
    marginBottom: "50px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
      lineHeight: "18px !important",
      fontWeight: "500 !important",
      fontFamily: "Inter !important",

      color: "#000 !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px !important",
      color: "black !important",
      fontWeight: "600 !important",
      fontFamily: "Inter !important",
      lineHeight: "28px !important",
    },
  },
  sec_1_btn_1: {
    fontSize: "18px !important",
    fontFamily: "Inter !important",
    lineHeight: "28px !important",
    fontWeight: "500 !important",


    [theme.breakpoints.down("md")]: {
      fontSize: "12px !important",
      fontWeight: "500 !important",

      fontFamily: "Inter !important",
      lineHeight: "28px !important",


    },
  },
  Binance_Main_container: {
    background: "#FFFFFF !important",
    opacity: "0.95 !important",
    borderRadius: "16px !important",
    padding: "15px 18px !important",
    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.05) !important",
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px !important",
    },
    [theme.breakpoints.down("sm")]: {
      // margin: "0px -10px",
      padding: "20px 20px !important",
    },

  },
  orTxt: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontFamily: "Inter !important",
    fontSize: "20px !important",
    lineHeight: "6px !important",
    margin: "6px 0px 8px 0px!important",
    display: "flex",
    justifyContent: "center",
    letterSpacing: "-2.5%",
  },
  BinanceBox: {
    border: "1px solid #6A6A6A !important",
    borderRadius: "16px !important",
    padding: "10px 0px !important",
    opacity: "0.95",
    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.05) !important",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "10px !important",
    width: "100%",
    // maxWidth: "489px !important",
  },
  Connected_Wallet_text: {
    fontFamily: "Inter !important",

    fontWeight: "500 !important",
    fontSize: "17px !important",
    lineHeight: "28px !important",
  },
  Amount: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontFamily: "Inter !important",
    fontSize: "15px !important",
    lineHeight: "28px !important",
    marginBottom: "-5px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px !important",
    },
  },
  value: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "800 !important",
    fontSize: "23px !important",
    lineHeight: "48px !important",
  },
  BinanceBox2: {
    border: "1px solid #6A6A6A !important",
    borderRadius: "14px !important",
    padding: "10px 15px 15px 10px!important",
    opacity: "0.95",
    boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.05) !important",
    backgroundColor: "#FFFFFF",
    marginBottom: "10px !important",
    display: "flex",
    justifyContent: "space-between",
    // [theme.breakpoints.down("sm")]: {
    //   padding: "15px 10px !important",
    // },

  },
  logo_dropdown_Box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px !important",
    border: "1px solid #FCDDEC",
    padding: "30px 0px !important",
    width: "100%",
    marginTop: "15px",
    height: "50px !important ",
    maxWidth: "166px",
  },
  logo_dropdown_Box2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px !important",
    // border: "1px solid black",
    padding: "30px 0px !important",
    width: "100%",
    marginTop: "8px",
    height: "50px !important ",
    maxWidth: "215px",
  },
  logo_dropdown_Box3: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px !important",
    border: "1px solid black",
    padding: "30px 0px !important",
    width: "100%",
    marginTop: "8px",
    height: "50px !important ",
    maxWidth: "186px",
  },
  busd_1: {
    fontFamily: "Inter !important",

    fontWeight: "500 !important ",
    fontSize: "18px !important ",
    lineHeight: "28px !important ",
    marginLeft: "16px !important",
  },
  target_Busd: {
    color: "#F9AA4B !important",
    fontWeight: "500 !important ",
    fontFamily: "Inter !important",
    fontSize: "18px !important ",
    lineHeight: "28px !important ",
  },
  selectitem: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontFamily: "Inter !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
  },

  Fee: {
    fontFamily: "Inter !important",
    fontWeight: "500 !important",
    fontSize: "17px !important",
    lineHeight: "27px !important",
    color: "#6A6A6A !important",
  },
  same_text: {
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontFamily: "Inter !important",

    fontSize: "17px !important",
    lineHeight: "27px !important",
  },
  Fee2: {
    fontFamily: "Inter !important",

    fontWeight: "500 !important",
    fontSize: "17px !important",
    lineHeight: "27px !important",
    color: "#5D5FEF !important",
  },
  sub_container: {
    // margin: "20px 0px 47px 0px !important",
  },
  text_card_box: {
    padding: "0px 97px 46px",
    background: "#FCBF07 !important",
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px !important",
    },
  },
  trusted_partners: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontFamily: "Inter !important",

    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#FFFFFF !important",
    textAlign: "center",
    marginBottom: "8px !important",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Inter !important",

      fontSize: "24px !important",
      lineHeight: "29px !important",
    },
  },
  trusted_Partners_Description: {
    fontStyle: "normal  !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",

    fontSize: "20px !important",
    lineHeight: "28px !important",
    // textAlign: "center !important",
    color: "#FFFFFF !important",
    marginBottom: "30px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
      fontFamily: "Inter !important",
      transform: "scale(0.9)",
      lineHeight: "24px !important",
    },
  },
  setting_Cards_Cont: {
    columnGap: "20px !important",
    rowGap: "25px !important",

    justifyContent: "center !important",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 50px 0px !important",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center !important",

      padding: "0px 0px 20px 0px !important",
    },
    padding: "0px 0px 66px 0px !important",
  },
  trusted_P_Images: {
    // width: "100%",
    width: "186px",
    height: "90.82px",
    borderRadius: "8px !important",

    [theme.breakpoints.down("lg")]: {
      height: "88px !important",
    },
    [theme.breakpoints.down("sm")]: {
      height: "98px !important",
    },
  },
  m_Container3: {
    padding: "60px 220px 25px 160px !important",
    [theme.breakpoints.down("xl")]: {
      padding: "60px 140px 25px 90px !important",
      // padding: "60px 60px 25px 60px !important",

    },
    [theme.breakpoints.down("sm")]: {

      padding: "0px 0px 0px 0px !important",
    },
  },
  m_Container4: {
    // padding: "60px 112px 100px !important",
    // [theme.breakpoints.down("lg")]: {
    // padding: "60px 112px 100px !important",
    // 
    marginTop: "-10px",
    marginBottom: "-10px",

    padding: "60px 60px 25px 60px !important",
    // },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",

      marginBottom: "0px",
      padding: "0px 0px 0px 0px !important",
    },
  },
  // sub_Container_3: {
  //   columnGap: "60px",
  //   [theme.breakpoints.down("lg")]: {
  //     columnGap: "30px",
  //   },
  // },
  // c_Number: {
  //   fontStyle: "normal !important",
  //   fontWeight: "700 !important",
  //   fontSize: "72px !important",
  //   lineHeight: "76px !important",
  //   textAlign: "center !important",
  //   letterSpacing: "-0.02em !important",
  //   color: "#2E2B26 !important",
  //   marginBottom: "16px !important",
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "48px !important",
  //     lineHeight: "60px !important",
  //   },
  // },
  cards_Title: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "28px !important",
    // textAlign: "center !important",
    color: "#5D5FEF !important",
    marginBottom: "10px !important",
  },
  cards_Description: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    // textAlign: "center !important",
    color: "#6B7280 !important",
  },
  m_Container_4: {
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "black",
    padding: "112px 112px 132px 112px",
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 10px !important",
    },
  },
  chooses_Us: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",

    fontWeight: "800 !important",
    fontSize: "36px !important",
    lineHeight: "40px !important",
    // textAlign: "center !important",
    letterSpacing: "-0.025em !important",
    color: "#FFFFFF !important",
    marginBottom: "20px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px !important",
      fontFamily: "Inter !important",

      lineHeight: "29px !important",
    },
  },
  c_Desc: {
    fontStyle: "normal !important",
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    width: "800px",
    lineHeight: "28px !important",
    // textAlign: "center !important",
    color: "#FFFFFF !important",
    marginBottom: "72px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
      fontFamily: "Inter !important",
      width: "100%",
      lineHeight: "24px !important",
    },
  },
  // main_Cont: {
  // display: "flex !important",
  // flexDirection: "column !important",
  // padding: "0px 24px 32px 24px!important",
  // background: "#FFFFFF !important",
  // borderRadius: "8px !important",
  // },
  // car_Title: {
  //   fontStyle: "normal !important",
  //   fontWeight: "500 !important",
  //   fontSize: "18px !important",
  //   lineHeight: "28px !important",
  //   textAlign: "center !important",
  //   color: "#111827 !important",
  //   marginBottom: "20px !important",
  //   marginTop: "32px !important",
  // },
  sub_Title: {
    fontWeight: "400 !important",
    fontFamily: "Inter !important",

    fontSize: "16px !important",
    lineHeight: "24px !important",
    // textAlign: "center !important",
    color: "#6B7280 !important",
  },

  fast_Secure: {
    fontFamily: "Inter !important",

    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: " #2E2B26 !important",
    marginBottom: "20px !important",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Inter !important",

      fontSize: "24px !important",
      lineHeight: "29px !important",
    },
  },
  Secure_color: {
    color: "#5D5FEF !important",
  },
  advantages: {
    fontFamily: "Inter !important",
    fontWeight: "700 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    letterSpacing: "-0.014em !important",
    color: " #2E2B26 !important",
    marginBottom: "8px !important",
  },
  advantages_description: {
    fontFamily: "Inter !important",

    fontWeight: "400 !important",
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: "#6A6A6A !important",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Inter !important",

      fontSize: "13px !important",
      lineHeight: "15px !important",
    },
  },
  Main_container_6: {
    padding: "52px 112px 96px !important",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px !important",
    },
  },
  frequently_ask_question: {
    fontStyle: "normal  !important",
    fontWeight: "800  !important",
    fontFamily: "Inter !important",

    fontSize: "48px  !important",
    lineHeight: "60px  !important",
    textAlign: "center",
    color: "#FCBF07 !important",
    marginBottom: "48px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px  !important",
      fontFamily: "Inter !important",

      lineHeight: "29px  !important",
      textAlign: "center",
    },
  },
  Questions: {
    fontFamily: "Inter !important",

    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#fff !important",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  Answers: {
    fontFamily: "Inter !important",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    marginBottom: "8px !important",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },

  },

  m_Container_8: {
    padding: "109px 112px 57px",
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 17px !important",
    },
  },
  // how_Work: {
  //   fontStyle: "normal !important",
  //   fontWeight: "600 !important",
  //   fontSize: "16px !important",
  //   lineHeight: "24px !important",
  //   textAlign: "center !important",
  //   letterSpacing: " 0.025em !important",
  //   textTransform: "uppercase !important",
  //   color: "#5D5FEF !important",
  //   marginBottom: "8px !important",
  // },
  // Just_Few: {
  //   fontsize:"Inter !important"
  //   fontWeight: "800 !important",
  //   fontSize: "36px !important",
  //   lineHeight: "40px !important",
  //   textAlign: "center !important",
  //   letterSpacing: "-0.025em !important",
  //   color: "#000000 !important",
  //   marginBottom: "20px !important",
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "24px !important",
  //     lineHeight: "29px !important",
  //   },
  // },
  // three_Stp: {
  //   fontsize:"Inter !important"
  //   fontWeight: "400 !important",
  //   fontSize: "20px !important",
  //   lineHeight: "28px !important",
  //   textAlign: "center !important",
  //   color: "#979797 !important",
  //   marginBottom: "48px !important",
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "16px !important",
  //     lineHeight: "24px !important",
  //   },
  // },
  main_Container_7: {
    padding: "60px 50px 0px 50px !important",
    marginBottom: "-30px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 112px 0px !important",
    },
    [theme.breakpoints.down("md")]: {
      padding: "50px 50px 0px !important",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 17px 0px !important",
      marginTop: "0px"
    },
    // backgroundColor: "black",
  },
  world_First_Fast: {
    fontFamily: "Inter !important",
    fontWeight: "800 !important",
    fontSize: "48px !important",
    lineHeight: "60px !important",
    color: "#000",
    marginBottom: "32px !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px !important",
      fontFamily: "Inter !important",

      lineHeight: "29px !important",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center !important",
      marginBottom: "-20px !important",

    },
  },
  world_First_Fast_Description: {
    fontFamily: "Inter !important",

    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: "#6A6A6A !important",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
      fontFamily: "Inter !important",

      lineHeight: "24px !important",
      textAlign: "center !important",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center !important",
      fontSize: "24px !important",
      lineHeight: "29.05px !important",
    },
  },
  small_Mobile_img: {
    width: "211px !important",
    [theme.breakpoints.down("lg")]: {
      width: "174px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "108px !important",
    },

    [theme.breakpoints.down("sm")]: {
      width: "183px !important",
      // marginLeft: "15px !important",
    },
  },
  big_Mobile_img: {
    width: "324px !important",
    marginLeft: "15px !important",
    [theme.breakpoints.down("lg")]: {
      width: "211px !important",
      // marginLeft: "5px !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "145px !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "135px !important",
      marginRight: "10px !important",
    },
  },
  // appleBtn: {
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "15px !important",
  //   },
  //   [theme.breakpoints.down("lg")]: {
  //     fontSize: "14px !important",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     padding: "12px 9px !important",
  //   },
  // },
  play_Btn: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px !important",
      fontFamily: "Inter !important",

    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
      fontFamily: "Inter !important",

    },
    [theme.breakpoints.down("md")]: {
      padding: "12px 9px !important",
    },
  },
  // ps_Button_Con: {
  //   [theme.breakpoints.down("800")]: {
  //     marginLeft: "1px !important",
  //   },
  //   [theme.breakpoints.down("600")]: {
  //     marginLeft: "13px !important",
  //   },
  // },


  // ------------------------------------throught payment
  error_container1: {
    margin: "0px 20px",
    background: "#FFE1E1 !important",
    padding: "15px 10px !important",
    // display: "flex",
    // justifyContent: "center",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px !important",
    }
  },
  all_a: {
    fontFamily: "Inter !important",

    fontWeight: "500 !important",
    fontSize: "18px !important",
    lineHeight: "28px !important",
    color: "#252631 !important",
  },


  // ------------------------------------Frame page


  // country_paragreen: {
  //   fontFamily: "Inter !important",
  //   fontSize: "14px !important",
  //   fontWeight: "500 !important",
  //   lineHeight: "20px !important",

  // },
  country_parablack: {
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "20px !important",
    // color: "#34A853",
  },
  // ------------------------------------country modal css 

  modaleContry: {
    top: "360px",
    left: "90%",
    [theme.breakpoints.down("xl")]: {
      top: "360px",
      left: "90%",

    },


  },
  // ------------------------------------Complaints page css 

  Complainthead: {
    marginTop: "50px",
    fontSize: "32px !important",
    fontWeight: "700 !important",
    fontFamily: "Inter !important",
    lineHeight: "72px !important",
    padding: "10px 0px",
  },
  Complaintpara: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",
    lineHeight: "27px !important",
    // padding: "10px 0px",
    color: "rgba(0, 0, 0, 0.6)"
  },
  Complainttitle: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",
    lineHeight: "27px !important",
    color: "black"
  },
  Complaintparablack: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
    fontFamily: "Inter !important",
    lineHeight: "27px !important",
    color: "black"
  },
  //----------- backTransfer page
  error_message: {
    background: "#FFE1E1 !important",
    padding: "15px 10px !important",
    // display: "flex",
    // justifyContent: "center",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 10px !important",
    }
  },
}))
