import { LayoutProps } from "../../types/layoutTypes";
import AppFooter from "../AppFooter";
import CommonNav from "../CommonNav";
import priceimg2 from "../../assests/Images/arrow.png";
import priceimg1 from "../../assests/Images/btnB.png";
import Binanceimg from "../../assests/Images/Binanceimg.svg";

import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/waallet.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"



const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <CommonNav Binanceimg={Binanceimg} name2="Connect Binance" namesize="16px" priceimg1 ={wallet}  name="Connect Wallet" login2="login" Signup2="Signup" />
      {children}
      <AppFooter />
    </div>
  );
};

export default Layout;
