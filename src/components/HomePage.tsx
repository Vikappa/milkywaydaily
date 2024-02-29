import { RootState } from "../redux/store/index"
import { useSelector } from "react-redux"
import { articleResult, blogResult, blogWelcome } from "../redux/actions"
import { Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import ArticleList from './ArticleList'
import { useEffect, useState } from "react"

const HomePage = function HomePage() {

    const lastArticle: articleResult = useSelector((state: RootState) => state.articles.results[0])
    const articles: articleResult[] = useSelector((state: RootState) => state.articles.results)
    const infos: string[] = useSelector(((state: RootState) => state.INFO.news_sites))
    const blogs: blogResult[] = useSelector((state: RootState) => state.blogs.results)
    const [blogsToRender, setBlogsToRender] = useState<blogResult[]>([])
    const blogWelcome: blogWelcome = useSelector((state: RootState) => state.blogs)
    const [currentBlogWelcome, setCurrentBlogWelcome] = useState<blogWelcome | null>(null)


    useEffect(() => {
        setCurrentBlogWelcome(blogWelcome)
        setBlogsToRender(blogWelcome.results)
    }, [blogs])


    const fetchPreviousBlog = async () => {
        if (currentBlogWelcome) {
            try {
                const response = await fetch(currentBlogWelcome.previous)
                const data = await response.json()
                console.log(data.results)
                setBlogsToRender(data.results)
                setCurrentBlogWelcome(data)
            } catch (error) {
                console.log("Errore fetch ", error)
            }
        }       }
    
    const fetchNextBlogs = async () => {
        if (currentBlogWelcome) {
            try {
                const response = await fetch(currentBlogWelcome.next)
                const data = await response.json()
                console.log(data.results)
                setBlogsToRender(data.results)
                setCurrentBlogWelcome(data)
            } catch (error) {
                console.log("Errore fetch ", error)
            }
        }   
    }

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
    
    {blogs?

    <div>
        <div style={{color:"white", border:"1px solid white", borderRadius:"10px", margin:"1rem", padding:"0.3rem"}} className="d-flex align-items-center justify-content-between">        
            <h3 >Blogs</h3>
            <div className="d-flex gap-2 mx-2">
            {currentBlogWelcome && <i onClick={fetchPreviousBlog}
                style={{ cursor:"pointer", color: currentBlogWelcome.previous ? "white" : "grey", fontSize: "1.4rem" }} className="bi bi-arrow-left-circle-fill"></i>}
            {currentBlogWelcome && <i onClick={fetchNextBlogs}
                style={{ cursor:"pointer", color: currentBlogWelcome.next ? "white" : "grey", fontSize: "1.4rem" }} className="bi bi-arrow-right-circle-fill"></i>}
            </div>
        </div>
            {blogsToRender.length>0?
            
            <div className="d-flex flex-wrap justify-content-center">
                {blogsToRender.map((blog, index) => (
                    <Link to={`/blog/${blog.id}`} key={index} className="d-flex flex-md-row justify-content-evenly blogPreview" style={{border:"1px solid white", borderRadius:"18px", margin:"0.3rem", padding:"0.3rem 0.5rem", textDecoration:"none"}}>
                            <div className="d-flex flex-column justify-content-center mx-3">
                            <img height={"auto"} width={"120px"} src={blog.image_url} alt="Blog image" className="mx-auto rounded-2" />
                            </div>
                            <div className="d-flex flex-column justify-content-center mx-3">
                            <p style={{color:"white", margin:"0 0 8px 0", textAlign:"center", fontWeight:"700", fontSize:"1.2rem"}} className="" >{blog.news_site}</p>
                            <p className="text-center" style={{color:"white", fontWeight:"700"}} >{blog.title}</p>
                            </div>
                    </Link>
                ))}
            </div>
            : <div className="p-5 m-5"><Spinner style={{color:"white"}} className="p-3"/></div>}
    </div>

: <div className="p-5 m-5"><Spinner style={{color:"white"}} className="p-3"/></div>}

{infos?
<>
<hr style={{color:"white", margin:"1.5rem 1rem 0 1rem"}}/>
<h5  style={{color:"white", padding:"0.8rem 2rem", margin:"0"}}>Our news providers:</h5>
<div className="d-flex flex-wrap" >
{infos.map((info, index) => (
        <p className="newsProvider" key={index} style={{color:"white", margin:"0", padding:"0.2rem 1.1rem", fontFamily:"nasalization"}}>{info}</p>
))} 
</div>
</>
: <div className="p-5 m-5"><Spinner style={{color:"white"}} className="p-3"/></div>}
        </>
    )
}

export default HomePage