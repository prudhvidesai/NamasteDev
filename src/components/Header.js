import { LOGO_URL } from "../../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = ()=>{
    console.log(useState())
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
                        <Link to={"/"} className="link"><li>Home</li></Link>
                        <Link to={"/about"} className="link"><li>About</li></Link>
                        <Link to={"/contact"} className="link"><li>Contact</li></Link>
                        
                    </ul>
                    <button l-btn onClick={handleLoginClick}>{isClicked}</button>
                 </div>
            

        </div>
    )
}
export default Header