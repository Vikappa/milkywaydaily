import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState, reportWelcome, reportResult } from "../redux/typos/actionNames"
import { Spinner } from "react-bootstrap"

const ReportPage = () => {

    const reports:reportWelcome = useSelector((state: RootState) => state.reportArray.results)
    const { reportId } = useParams()
    const [currentReport, setCurrentReport] = useState<reportResult | null>(null)

    useEffect(() => {
        if (reportId) {
          const foundReport = reports.find((report: reportResult) => report.id.toString() === reportId)
          setCurrentReport(foundReport || null)
        }
      }, [reportId, reports])

    return(
        <>
        <h1 
        style={
            {color:"white",
            margin:"0",
            padding:"1rem"
            }}>{currentReport?currentReport.title: "Caricamento" }</h1>

            {currentReport? <div className="d-flex flex-column">
            {/* <p>{currentReport.updated_at}</p> */}
            <img src={currentReport.image_url} alt="Report image"/>
            <p
            className=""
            style={{
                color:"white",
                margin:"5px",
            }}
            >{currentReport.summary}</p></div>: <div className="d-flex flex-column" ><Spinner/></div>}
        </>
    )
}

export default ReportPage