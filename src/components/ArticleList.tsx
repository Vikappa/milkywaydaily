import { Spinner } from "react-bootstrap"
import { articleResult } from "../redux/actions"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ArticleList = function(){

    const articles: articleResult[] = useSelector((state: RootState) => state.articles.results)

    return(
        <div style={{border:"1px solid white", borderRadius:"8px"}} >
            {articles.length > 0 ? (
                <div style={{width:"100%"}}>
                    {articles.slice(1).map((article, index) => (
                            <Link key={index} to={`article/${article.id}`} className="articleLinkDashBoard d-flex justify-content-start align-items-center" style={{border:"1px solid white", borderRadius:"15px", margin:"1rem", textDecoration:"none", color:"white"}}>
                                <img style={{borderRadius:"15px"}} height={"40px"} src={article.image_url} alt="Article image" className="articlePreviewImageDashboard" />
                                <p style={{margin:"2px 0 2px 1rem"}} >{article.title}</p>

                                </Link>
                    ))}
                </div>
            ) : (
                <div className="p-5 m-5"><Spinner style={{color:"white"}} className="p-3"/></div>
            )}
        </div>
    )
}

export default ArticleList
