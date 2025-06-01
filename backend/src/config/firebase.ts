
import serviceAccount from "../../enviorments/serviceAccount.json";
import serviceAccountAffiliator from "../../enviorments/serviceAccount _affiliator.json"
export const fireAdmin = require("firebase-admin");
export const affiliatorAdmin = require("firebase-admin");
fireAdmin.initializeApp({
  credential: fireAdmin.credential.cert(serviceAccountAffiliator)
});

affiliatorAdmin.initializeApp({
  credential: affiliatorAdmin.credential.cert(serviceAccount),
  databaseURL: "https://flash-transfer.firebaseio.com"
},"other")

