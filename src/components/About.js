import UserCard from "../UserCard"
import UserCardClass from "./UserCardClass"
const About = ()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>Welcome to About Page...</h2>
            <UserCard name={"Mahesh"} role={"react"}/>
            <UserCardClass name={"Mahesh"} role={"FrontEnd"}/>
        </div>
    )
}
export default About