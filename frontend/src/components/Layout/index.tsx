import { LayoutProps } from "../../types/layoutTypes";
import AppFooter from "../AppFooter";
import CommonNav from "../CommonNav";

import priceimg2 from "../../assests/Images/btnlist.png";
import priceimg1 from "../../assests/Images/btnB.png";
import Binanceimg from "../../assests/Images/Binanceimg.svg";
import { useEffect } from "react"
import sett from "../../assests/Images/sett.png";
import wallet from "../../assests/Images/waallet.png";
import wallet2 from "../../assests/Images/headwallet.png";
import Nft from "../../assests/Images/nft.png";

import avatar from "../../assests/Images/avatarimg.png";
import notification from "../../assests/Images/notification.png";
import user from "../../assests/Images/User.png";
import "../../font.css/index.css"
import walletmini from "../../assests/Images/waallet.png";
import mininet from "../../assests/Images/mininet.png";


import { useAuth } from "../../Context/globaltContext";
import { getUser } from "../../Services/auth";


const Layout = ({ children }: LayoutProps) => {

  const { imgUrl, setImgUrl }: any = useAuth()

  const isAuth = localStorage.getItem("token")

  // const userData: any = localStorage.getItem("userData")

  // console.log("storage", isAuth)
  // if (userData) {

  // const data =  JSON.parse(userData)
  //   console.log(data.profileImg)
  //   // debugger
  //   setImgUrl(data.profileImg) 
  //   setFullName(data.firstName +" "+ data.lastName)
  // }

  const isSocial: any = localStorage.getItem('social')
  // const userData : any = JSON.parse(JSON.stringify("user"))
  // const userData: any = localStorage.getItem("user")
  // console.log("udata", userData.photoUrl)
  // if (isSocial && userData) {
  //   // const auth = getAuth();

  //   setImgUrl(userData.photoUrl ? userData.photoUrl : avatar)

  // }
  // else {
  // localStorage.removeItem('token')
  // localStorage.removeItem('userData')
  // navigate('/signin')

  // }



  useEffect(() => {

    getUser().then((data: any) => {

      const userData: any = JSON.parse(JSON.stringify(data?.data ? data?.data : ""))
      setImgUrl(userData.profileImg ? userData.profileImg : avatar)
      localStorage.setItem("flash_level", "")
      localStorage.setItem("flash_percent", "")


    })
  }, [])

  return (
    <div>
      {isAuth ?
        (
          <div>
            <CommonNav priceimg2={priceimg2} img3={sett} nft={Nft} walletmini={mininet} img1={wallet2} img4={imgUrl} img2={notification} Binanceimg={Binanceimg} name2="Connect Binance" namesize="24px" priceimg1={priceimg1} name="100$"
              //  login="Login" Signup="Signup"
              login2="Login" Signup2="Signup"
            />
            {children}
            <AppFooter />
          </div>
        ) :
        (
          <div>
            <CommonNav Binanceimg={Binanceimg} walletmini={walletmini} name2="Connect Binance" namesize="16px" priceimg1={wallet} name="Connect Wallet"
              login="Login" Signup="Signup"
              login2="Login" Signup2="Signup"

            />
            {children}
            <AppFooter />
          </div>
        )
      }

    </div>
  );
};

export default Layout;
