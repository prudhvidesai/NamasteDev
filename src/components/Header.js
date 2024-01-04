import { LOGO_URL } from "../../utils/constants"


const Header = ()=>{
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
                 </div>
            

        </div>
    )
}
export default Header