import { Express, Router } from 'express';
import { walletSignupValidators ,walletLoginValidators,nonceValidators} from '../../validators/validators';
import { ValidateRequestBody } from '../../middleware/index';
import {
    UpdateUserWithWallet,
    WalletSignIn,
    GetNonceWithAddress
  } from '../../controller/user.controller';
  const router = Router();

 //wallet sign up
 router.post("/api/walletSignup",...walletSignupValidators, ValidateRequestBody,UpdateUserWithWallet);
 //wallet sign in
 router.post("/api/walletLogin",...walletLoginValidators , ValidateRequestBody,WalletSignIn);
 //get nonce
 router.post("/api/nonce",...nonceValidators,ValidateRequestBody,GetNonceWithAddress);
export default router;