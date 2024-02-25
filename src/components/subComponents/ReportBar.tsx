import { useSelector } from 'react-redux'
import { RootState, reportResult, reportWelcome } from "../../redux/typos/actionNames"
import Marquee from "react-fast-marquee"
import ReportPreview from './ReportPreview'


const ReportBar = () => {

    const reports:reportWelcome = useSelector((state: RootState) => state.reportArray.results)

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
                    {reports ? reports.map((report:reportResult, index:number) => (
                        <ReportPreview key={index} report={report}></ReportPreview>
                    )) : "Loading..."}
                </Marquee>
            </div>
        </div>
    )
}

export default ReportBar

