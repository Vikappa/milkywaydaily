import { useState } from "react"
import { articleResult } from "../redux/typos/actionNames"
import { Spinner } from "react-bootstrap"


const DashBoard = function () {

    const [firstArticle, setFirstArticle] = useState<articleResult | null>(null)


    return (
        <>
        <h1 className="text-white p-2 me-auto">Dashboard</h1>
        {
            firstArticle ? <div></div> 
            
            : 
            
            <div className="d-flex my-5 align-items-center text-white"> <Spinner className="p-4 d-flex align-items-cente"/></div>
        }


        </>
    )
}


export default DashBoard