import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState, reportWelcome, reportResult } from "../redux/typos/actionNames"

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
        <h1 style={{color:"white"}}>{currentReport?currentReport.title: "Caricamento" }</h1>
        </>
    )
}

export default ReportPage