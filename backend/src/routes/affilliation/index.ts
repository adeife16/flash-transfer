import { Express,Router} from 'express';
import {smsResendWithdrowValidator, smsVerifyForWithdrowVaidator,verifyOTPForWithdrowValidator, profileValidator, cryptoValidator, paypalValicator, bankValidator, profileImgValidator } from '../../validators/validators';
import { ValidateRequestBody } from '../../middleware/index';
import KYCAuth from "../../middleware/kycAuth";
import BalanceChecker from "../../middleware/balanceCheck";
const router = Router();
import {
  getTopRevenue, getBalance, getTopAffilited,getLatestWidHistory,resendSmsCodeForWithdrow,checkSmsCodeForWithdrow,getBalanceHistory,updateProfile,updateProfileImg,getCommision, CreateUserHandler,UpdateAffiliator,GetAllUser,getLatestTransaction,getEarndOverview,getIncomeProgress,getRewardPoint,getTotalPoint,getTopAffiliators,getRevenue,getRanking,checkKYCVerification,widthdrowCrypto,widthdrowPaypal,widthdrowBank,GetUserHandler
  } from '../../controller/affilliator.controller';


 // get or create user information
 router.get("/getUser",GetUserHandler);

 router.post("/updateAffiliator",UpdateAffiliator);
 router.post("/updateProfileImg",...profileImgValidator,ValidateRequestBody,updateProfileImg);
 router.post("/updateProfile",...profileValidator,ValidateRequestBody,updateProfile);
 router.get("/allUser",GetAllUser);
 router.get("/transactions",getLatestTransaction);
 router.get("/overview/getEarned",getEarndOverview);
 router.get("/overview/getIncomeProgress",getIncomeProgress);
 router.get("/overview/getRewardPoint",getRewardPoint)
 router.get("/statistics/getTotalPoint",getTotalPoint);
 router.get("/statistics/getRankingAffiliators",getTopAffiliators);
 router.get("/leaderboard/topAffilited",getTopAffilited)
 router.get("/statistics/getRevenue",getRevenue);
 router.get("/statistics/topRevenue",getTopRevenue)
 router.get("/leaderboard/getRanking",getRanking);
 router.get("/kyc/check",checkKYCVerification);
 router.get("/commission",getCommision);
//  router.post("/withdrow/verifyOTPForWithdrow",KYCAuth,...verifyOTPForWithdrowValidator,ValidateRequestBody,verifyOTPForWithdrow);
 router.post("/withdrow/crypto",KYCAuth,...cryptoValidator,ValidateRequestBody,BalanceChecker,widthdrowCrypto);
 router.post("/withdrow/paypal",KYCAuth,...paypalValicator,ValidateRequestBody,BalanceChecker,widthdrowPaypal);
 router.post("/withdrow/bank",KYCAuth,...bankValidator,ValidateRequestBody,BalanceChecker,widthdrowBank);
 router.post("/withdrow/smsVerify",KYCAuth, ...smsVerifyForWithdrowVaidator,ValidateRequestBody,checkSmsCodeForWithdrow)
 router.post("/withdrow/resendSmsCode",KYCAuth,...smsResendWithdrowValidator,ValidateRequestBody,resendSmsCodeForWithdrow)
 router.get("/withdrow/getBalance",getBalance);
 router.get("/withdrow/getHistory",getBalanceHistory);
 router.get("/withdrow/getLatestWidHistory",getLatestWidHistory);
 
export default router;