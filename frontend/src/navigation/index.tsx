import { FC, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import FindLocation from "../pages/FindLocation";
import FindLocationProcess2 from "../pages/FindLocationProcess2";
import PageNotFound from "../pages/PageNotFound";
import Profile from "../pages/Profile";
import RegistrationForMerchat from "../pages/RegistrationForMerchat";
import ReferFriend from "../pages/ReferFriend";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import TrackMyOrder from "../pages/TrackMyOrder";
import Notifications from "../pages/Notifications";
import PersonalVerification from "../pages/PersonalVerification";
import AppInfo from "../pages/AppInfo";
import Settings from "../pages/Settings";
import PaymentMethod from "../pages/PaymentMethod";
import AddNew from "../pages/AddNew";
import About from "../pages/About";
import History from "../pages/History";
import Transaction from "../pages/Transaction";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Paymentdone from "../pages/Paymentdone";
import ReviewandDetail from "../pages/ReviewandDetail";
import Bpayment from "../pages/Bpayment";
// import FlashToken from "../pages/Flashtoken";
import CurrencyUpdate from "../pages/CurrencyUpdate";
import TermsandCond from "../pages/TermsAndConditions";
import AddnewTwo from "../pages/AddNewTwo";
import Home from "../pages/Home";
import UseExisting from "../pages/UseExisting";
import Throught from "../pages/Throughtpayment";
import Frame from "../pages/Frame";
import Complaints from "../pages/Complaints";
import KYC from "../pages/kyc";
import Complaints2 from "../pages/Complaints2";
import FrameCredit from "../pages/FrameCredit";
import FrameCash from "../pages/FrameCash";
import FrameBank from "../pages/FrameBank";
import PaymentdoneCash from "../pages/PaymentdoneCash";
import BankTransfer from "../pages/BankTransfer";
import MerchantSignIn from "../components/MerchantSigninform";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Verification from "../pages/Verification";
import Protected from "../privateRoutes";
import BinanceConnect from "../pages/binanceConnect";
import VerificationPhone from "../pages/verificationPhone";
import EmailVerification from "../pages/emailVerification";
import DocumentVerification from "../pages/documentVerification";
import UseExistingR from "../pages/CashToCrypto/useexistingR";
import AddnewTwoR from "../pages/CashToCrypto/addnewtwoR";
import ReviewandDetailR from "../pages/CashToCrypto/reviewanddetail";
import PaymentdoneCashR from "../pages/CashToCrypto/paymentdoneCashR";
import PaymentdoneCashH from "../pages/CashToCrypto/paymentdoneCashH";
import PaymentdoneCashD from "../pages/CashToCrypto/paymentdoneCashD";
import ChooseOrangeMoney from "../pages/CryptoToCash/ChooseOrangeMoney";
import AddNewR from "../pages/CashToCrypto/addnewR";
import OrangeMoneyR from "../pages/CashToCrypto/OrangMoneyR";

const Navigation: FC = () => {
  const [loading, setLoading] = useState<Boolean>(true);

  const load = document.getElementById("logoload");
  const isAuth = localStorage.getItem("token");

  return (
    <>
      {/* <button onClick={() => navigate()}>go back</button> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/Complaints" element={<Complaints />} />
        <Route path="/Complaints2" element={<Complaints2 />} />
        {/* <Route path="/mydetails" element={<MyDetails />} /> */}
        <Route path="/trackmyorder" element={<TrackMyOrder />} />
        <Route path="/questions/answers" element={<FAQ />} />
        <Route
          path="/referfriend"
          element={<Protected Component={ReferFriend} />}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/findlocation2" element={<FindLocation />} />
        <Route path="/profile" element={<Protected Component={Profile} />} />
        <Route path="/findLocation" element={<FindLocationProcess2 />} />
        <Route
          path="/registrationformerchant"
          element={<RegistrationForMerchat />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/notifications"
          element={<Protected Component={Notifications} />}
        />
        <Route
          path="/personalverification"
          element={<Protected Component={PersonalVerification} />}
        />
        <Route path="/appInfo" element={<Protected Component={AppInfo} />} />
        <Route path="/settings" element={<Protected Component={Settings} />} />
        <Route
          path="/paymentmethod"
          element={<Protected Component={PaymentMethod} />}
        />
        <Route path="/addNew" element={<AddNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<Protected Component={History} />} />
        <Route
          path="/transaction"
          element={<Protected Component={Transaction} />}
        />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsAndConditions" element={<TermsandCond />} />
        <Route
          path="/currencyupdate"
          element={<Protected Component={CurrencyUpdate} />}
        />
        <Route path="/paymentdone/" element={<Paymentdone />} />
        <Route path="/reviewanddetail" element={<ReviewandDetail />} />
        <Route path="/reviewanddetailR" element={<ReviewandDetailR />} />
        <Route path="/addnewtwo" element={<AddnewTwo />} />
        <Route path="/addnewtwoR" element={<AddnewTwoR />} />
        <Route path="/addnewR" element={<AddNewR />} />
        <Route path="/bpayment" element={<Protected Component={Bpayment} />} />
        <Route path="/useexisting" element={<UseExisting />} />
        <Route path="/useexistingR" element={<UseExistingR />} />
        <Route path="/chooseOrangeMoney" element={<ChooseOrangeMoney/>}/>
        <Route path="orangemoneyR" element = {<OrangeMoneyR/>}/>
        <Route path="/throught" element={<Protected Component={Throught} />} />
        <Route
          path="/frame/:token/:amount"
          element={<Protected Component={Frame} />}
        />
        <Route path="/framecash" element={<FrameCash />} />
        <Route
          path="/framecredit"
          element={<Protected Component={FrameCredit} />}
        />
        <Route
          path="/framebank"
          element={<Protected Component={FrameBank} />}
        />
        <Route path="/PaymentdoneCash" element={<PaymentdoneCash />} />
        <Route path="/PaymentdoneCashR" element={<PaymentdoneCashR />} />
        <Route path="/PaymentdoneCashH" element={<PaymentdoneCashH />} />
        <Route path="/PaymentdoneCashD" element={<PaymentdoneCashD />} />
        <Route
          path="/banktransfer"
          element={<Protected Component={BankTransfer} />}
        />
        <Route
          path="/SignInMerchant"
          element={<Protected Component={MerchantSignIn} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/resetpassword/:userId"
          element={<Protected Component={ResetPassword} />}
        />
        <Route
          path="/verification/:userId"
          element={<Protected Component={Verification} />}
        />
        <Route path="/kyc" element={<Protected Component={KYC} />} />
        <Route
          path="/Binanceconnect"
          element={<Protected Component={BinanceConnect} />}
        />
        <Route
          path="/phoneverification"
          element={<Protected Component={VerificationPhone} />}
        />
        <Route
          path="/emailverification"
          element={<Protected Component={EmailVerification} />}
        />
        <Route
          path="/documentverification"
          element={<Protected Component={DocumentVerification} />}
        />
      </Routes>
    </>
  );
};

export default Navigation;
