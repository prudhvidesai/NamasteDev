import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>{err.status}:{err.data}</h1>
            <h2>oops the requested page is not found...</h2>
        </div>
    )
}
export default Error