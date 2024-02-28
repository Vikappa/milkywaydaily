import { Spinner } from "react-bootstrap"
import { articleResult, articleWelcome } from "../redux/actions"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const ArticleList = function () {

    const articles: articleResult[] = useSelector((state: RootState) => state.articles.results)
    const articleWelcome: articleWelcome = useSelector((state: RootState) => state.articles)
    const [currentWelcome, setCurrentWelcome] = useState<articleWelcome | null>(null)

    const [articlesToRender, setArticlesToRender] = useState<articleResult[]>([])

    useEffect(() => {
        setArticlesToRender(articles)
        setCurrentWelcome(articleWelcome)
    }, [articles])

    const fetchNextArticles = async () => {
        if (currentWelcome) {
            try {
                const response = await fetch(currentWelcome.next)
                const data = await response.json()
                console.log(data.results)
                setArticlesToRender(data.results)
                setCurrentWelcome(data)
            } catch (error) {
                console.log("Errore fetch ", error)
            }
        }
    }

    const fetchPreviousArticles = async () => {
        if (currentWelcome) {
            try {
                const response = await fetch(currentWelcome.previous)
                const data = await response.json()
                console.log(data.results)
                setArticlesToRender(data.results)
                setCurrentWelcome(data)
            } catch (error) {
                console.log("Errore fetch ", error)
            }
        }
    }

    return (
        <div className="articleListDashboard" style={{border:"2px solid white", borderRadius:"15px", margin:"1rem", padding:"0.2rem"}}>
            {articlesToRender.length > 0 ? (
                <div style={{ minWidth: "100%" }}>
                    {articlesToRender.slice(1).map((article, index) => (
                        <Link key={index} to={`article/${article.id}`} className="articleLinkDashBoard d-flex justify-content-start align-items-center" style={{ border: "1px solid white", borderRadius: "15px", margin: "1rem", textDecoration: "none", color: "white" }}>
                            <img style={{ borderRadius: "15px" }} height={"40px"} src={article.image_url} alt="Article image" className="articlePreviewImageDashboard" />
                            <p style={{ margin: "2px 0 2px 1rem" }} >{article.title}</p>

                        </Link>
                    ))}
                    <div className="d-flex justify-content-between align-items-center p-0">
                        <p style={{ color: "white", margin: "0 0 0 5px" }} >Read more</p>
                        <div className="d-flex gap-3 mx-2">
                            {currentWelcome && <i onClick={fetchPreviousArticles}
                                style={{ cursor:"pointer", color: currentWelcome.previous ? "white" : "grey", fontSize: "1.4rem" }} className="bi bi-arrow-left-circle-fill"></i>}
                            {currentWelcome && <i onClick={fetchNextArticles}
                                style={{ cursor:"pointer", color: currentWelcome.next ? "white" : "grey", fontSize: "1.4rem" }} className="bi bi-arrow-right-circle-fill"></i>}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-5 m-5"><Spinner style={{ color: "white" }} className="p-3" /></div>
            )}
        </div>
    )
}


export default ArticleList
