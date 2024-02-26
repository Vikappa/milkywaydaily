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

            <p
            className=""
            style={{
                color:"white",
                fontSize:"0.8rem",
                padding:"0",
                margin:"5px 0px 2px 5px",
            }}
            >Published on - {currentReport? new Date(currentReport.updated_at).toLocaleDateString() : ""}
            
            </p>

            {currentReport?<> <div className="d-flex flex-column flex-md-row">
            <img className="reportImageBig" src={currentReport.image_url} alt="Report image"/>
            <p
            className=""
            style={{
                color:"white",
                margin:"5px",      
                padding:"1.5rem"
                }}
            >{currentReport.summary}</p>
            </div>
            {currentReport?            
            <p 
            style={{
            color:"white",
            margin:"5px 15px 0 15px",
            }}>Read More on <a className="linkToNewsSite" style={{color:"var(--bs-SMWDTheme1)", transition:"all 0.4s ease"}} href={currentReport.url}target="_blank">{currentReport.news_site}</a></p>:"loading"}
            </>
            : <div className="d-flex flex-column" ><Spinner/></div>}
        </>
    )
}

export default ReportPage