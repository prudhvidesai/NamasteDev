
import React from "react"
import ReactDOM from "react-dom"


// const parent = React.createElement("div",{id:"parent1"},
// [React.createElement("h1",{},"Hello React"),
// React.createElement("h2",{},"Hello React"),React.createElement("h3",{},"Hello React")])

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)

const He1 = ()=><h1>Hello React...</h1>
const h2 = <h2>Hello React...</h2>
const h3 = <h3>Hello React...</h3>

const Header = ()=>{
    return(
        <div className="header-cont">
            <div>
                <img src="https://cdn.dribbble.com/users/5462907/screenshots/11960844/5_4x.png"
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

const RestaurantCard = ()=>{
    return(
        <div className="resto-card">
        <img src="https://i.guim.co.uk/img/media/b0fbbd865e94925b31634a63a820c74a98cafb08/0_0_5216_3130/master/5216.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c666cab4b83a30ac509f64847f3e6e8b"
        className="card-img"
        alt="card-img"
        />
     <h3 style={{paddingLeft:"5px",marginTop:"5px"}}>Breads</h3>
    <h4 style={{paddingLeft:"5px",marginTop:"5px"}}>Indian Continental japanese</h4>

    </div>
    )
}


const Body = ()=>{
    return(
        <div className="resto-cont">
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           
           
            
        </div>
    )
}

const Title = ()=>{
    return(
        <div className="bg-cont">
         <Header />
         <Body/>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Title />)