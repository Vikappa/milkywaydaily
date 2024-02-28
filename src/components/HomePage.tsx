import { RootState } from "../redux/store/index"
import { useSelector } from "react-redux"
import { articleResult } from "../redux/actions"
import { Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import ArticleList from './ArticleList'

const HomePage = function HomePage() {

    const lastArticle: articleResult = useSelector((state: RootState) => state.articles.results[0])
    const articles: articleResult[] = useSelector((state: RootState) => state.articles.results)

    return(
        <>
        <div>
            <h1 className="pt-2 px-3" style={{color:"white", margin:"0.2rem"}}>DashBoard</h1>
        </div>

    { lastArticle ? 
    
    <div className="d-flex flex-column flex-md-row">
        <Link to={`article/${lastArticle.id}`} className="dashBoardDivLastArticle" style={{border:"1px solid white", borderRadius:"15px", margin:"1rem"}}>
        <div className="d-flex flex-column dashBoardDivLatestArticle">
        <p style={{color:"white", margin:"0", padding:"5px 15px 0 15px" }} >Latest article</p>
        <img style={{width:"100%", borderRadius:"15px", padding:"0.5rem"}} src={lastArticle.image_url} alt="Latest article image" className="articleImageDashboard" />
        <h5 className="dashBoardArticletext" style={{color:"white", margin:"0", padding:"0 0.5rem 0.5rem 0.5rem"}}>{lastArticle.title}</h5>
        <p style={{color:"white", fontSize:"0.78rem", padding:"0", margin:"0 0.3rem 0.3rem 0.3rem"}}>{lastArticle.summary}</p>
        <p style={{color:"white", margin:"0 0.7rem"}}>Read more</p>
        </div>
        </Link>
        { articles?  
    
    <ArticleList />

    : <div className="p-5 m-5"><Spinner style={{color:"white"}} className="p-3"/></div>
    }
    </div>
    
    : <div className="p-5 m-5"><Spinner style={{color:"white"}} className="p-3"/></div>}




        </>
    )
}

export default HomePage