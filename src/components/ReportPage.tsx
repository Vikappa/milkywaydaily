import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { reportResult } from "../redux/actions"
import { RootState } from "../redux/store"
import { Spinner } from "react-bootstrap"

function formatIsoDate(isoDate:string) {
    // Crea un oggetto Date dall'ISO string
    const date = new Date(isoDate)
  
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
  
    // Utilizza Intl.DateTimeFormat per formattare la data in modo leggibile
    const formatter = new Intl.DateTimeFormat('it-IT', options)
  
    return formatter.format(date)
  }

const ReportPage = function ReportPage() {
    const reports: reportResult[] = useSelector((state: RootState) => state.reports.results)
    const location = useLocation()
    const [currentReport, setCurrentReport] = useState<reportResult | null>(null)

    useEffect(() => {
        const pathSegments = location.pathname.split('/')
        // Assumendo che l'URL sia del tipo "/report/:id"
        const reportId = pathSegments[pathSegments.length - 1] // Prende l'ultimo segmento

        if (reportId) {
            const foundReport = reports.find(report => report.id.toString() === reportId)
            setCurrentReport(foundReport || null)
        }
    }, [location, reports])

    return (
        <>
            {currentReport?<> <div className="d-flex flex-column flex-lg-row">
                <div className="reportImageWrapper d-flex flex-column align-items-start">
                <p style={{color:"white", margin:"0.5rem 1rem", fontSize:"0.8rem"}}>Aggiornato: {formatIsoDate(currentReport.updated_at)}</p>
                <img src={currentReport.image_url} alt="Report image" className="reportImage" />
                </div>
            <p
            className="p-2 pe-md-5 pt-md-4"
            style={{
                color:"white",
                margin:"5px",
            }}
            >{currentReport.summary}</p></div>
            <p className="p-2" style={{color:"white"}}>Read more on: <a target="_blank" href={currentReport.url} className="linkToNewsSite">{currentReport.news_site}</a></p></>
            
            : <div className="d-flex flex-column p-5 m-5" ><Spinner className="p-4" style={{color:"white", margin:"0 auto"}}/></div>
            
            }
        </>
    )
}

export default ReportPage
