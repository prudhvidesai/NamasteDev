import { LOGO_URL } from "../../utils/constants"
import { useState } from "react"

const Header = ()=>{

    const[isClicked,setisClicked]=useState("Login")

    

    const handleLoginClick = ()=>{
        isClicked==="Login"?setisClicked("Logout"):setisClicked("Login")
    }

    return(
        <div className="header-cont">
            <div>
                <img src={LOGO_URL}
                 alt="wesite-logo" className="website-logo"/>
                 </div>
                 <div className="nav-cont">
                    <ul className="nav-list-cont">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <button l-btn onClick={handleLoginClick}>{isClicked}</button>
                 </div>
            

        </div>
    )
}
export default Header