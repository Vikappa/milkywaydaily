import { useSelector } from 'react-redux'
import { reportResult, reportWelcome } from "../../redux/actions/index"
import Marquee from "react-fast-marquee"
import ReportPreview from './ReportPreview'
import { RootState } from '../../redux/store/index'


const ReportMarque = () => {

    const reports :reportWelcome = useSelector((state: RootState) => state.reports)

    return (
        <div className='d-flex flex-column' style={{width: "100%"}}>
            <p style={{color: "white", fontSize: "0.7rem", margin: "0 0 0 5px"}}>Last Reports:</p>
            <div
                style={{
                    borderTop: '1px solid white',
                    borderBottom: '1px solid white', 
                    color: 'white', 
                    width: "100%",
                }}
            >
                <Marquee>
                    {reports ? reports.results.map((report:reportResult, index:number) => (
                        <ReportPreview key={index} report={report}></ReportPreview>
                    )) : "Loading..."}
                </Marquee>
            </div>
        </div>
    )
}

export default ReportMarque