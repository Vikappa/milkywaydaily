import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { articleResult } from "../redux/actions"
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

const ArticlePage = function () {

    const savedArticles = useSelector((state: RootState) => state.articles.results)
    const [currentArticle, setCurrentArticle] = useState<articleResult | null>(null)

    useEffect(() => {
        async function fetchArticle() {
            const pathSegments = location.pathname.split('/')
            const articleId = pathSegments[pathSegments.length - 1] // Get last segment

            if (articleId) {
                let foundReport: articleResult | undefined = undefined
                foundReport = savedArticles.find(savedArticle => savedArticle.id.toString() === articleId)
                if (foundReport) {
                    setCurrentArticle(foundReport)
                } else {
                    try {
                        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${articleId}`)
                        const data = await response.json()
                        setCurrentArticle(data)
                    } catch (error) {
                        console.log("Fetch article error", error)
                    }
                }
            }
        }

        fetchArticle()
    }, [location, savedArticles])

    return (
        <>
        {currentArticle?  

        <div style={{border:"1px solid white", borderRadius:"10px", margin:"1rem", padding:"0.2rem 0.5rem 0.5rem 0.5rem", width:"auto"}}>
            <p style={{color:"white", margin:"0.5rem 1rem", fontSize:"0.8rem"}}>Aggiornato: {formatIsoDate(currentArticle.updated_at)}</p>
            <h2 style={{color:"white", textAlign:"center"}}>{currentArticle.title}</h2>
            <img src={currentArticle.image_url} alt="Article image" style={{width:"100%"}}/>
            <p style={{color:"white", marginTop:"10px"}}>{currentArticle.summary}</p>
            <div className="d-flex flex-nowrap justify-content-center gap-2">
            <p style={{color:"white"}}>Read more on </p>
            <a className="linkToNewsSite" href={currentArticle.url} target="_blank" rel="noreferrer">{currentArticle.news_site}</a>
            </div>
        </div>
        
        : <div className="m-5 p-5"> <Spinner style={{color:"white"}}/></div>}
        </>
    )
}


export default ArticlePage