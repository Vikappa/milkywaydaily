import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { reportResult } from "../redux/actions";
import { RootState } from "../redux/store";
import { Spinner } from "react-bootstrap";

const ReportPage = function ReportPage() {
    const reports: reportResult[] = useSelector((state: RootState) => state.reports.results);
    const location = useLocation();
    const [currentReport, setCurrentReport] = useState<reportResult | null>(null);

    useEffect(() => {
        const pathSegments = location.pathname.split('/')
        // Assumendo che l'URL sia del tipo "/report/:id"
        const reportId = pathSegments[pathSegments.length - 1] // Prende l'ultimo segmento

        if (reportId) {
            const foundReport = reports.find(report => report.id.toString() === reportId);
            setCurrentReport(foundReport || null)
        }
    }, [location, reports])

    return (
        <>
            {currentReport? <div className="d-flex flex-column flex-md-row">
            {/* <p>{currentReport.updated_at}</p> */}
            <img src={currentReport.image_url} alt="Report image" className="reportImageBig" />
            <p
            className="pe-md-5 pt-md-4"
            style={{
                color:"white",
                margin:"5px",
            }}
            >{currentReport.summary}</p></div>: <div className="d-flex flex-column" ><Spinner/></div>}
        </>
    );
};

export default ReportPage;
