import { Link } from "react-router-dom";
import { reportResult } from "../../redux/typos/actionNames";

interface ReportPreviewProps {
  report: reportResult
}

const ReportPreview: React.FC<ReportPreviewProps> = (props) => {
  return (
    <Link to={`/report/${props.report.id}`}
    style={{
      textDecoration: "none",
      color: "white",
      fontSize: "0.85rem",
      padding:"0",
      margin:"0"
    }}
    >
      <a className="reportPreviewPill"
      >{props.report.title}</a>
    </Link>
  );
}

export default ReportPreview;
