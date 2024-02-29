import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import {  blogResult } from "../redux/actions"
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

const BlogPage = function(){

    const savedBlogs = useSelector((state: RootState) => state.blogs.results)
    const [currentBlog, setCurrentBlog] = useState<blogResult | null>(null)

    useEffect(() => {
        async function fetchArticle() {
            const pathSegments = location.pathname.split('/')
            const blogId = pathSegments[pathSegments.length - 1] // Get last segment

            if (blogId) {
                let foundBlog: blogResult | undefined = undefined
                foundBlog = savedBlogs.find(savedBlog => savedBlog.id.toString() === blogId)
                if (foundBlog) {
                    setCurrentBlog(foundBlog)
                } else {
                    try {
                        const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${blogId}`)
                        const data = await response.json()
                        setCurrentBlog(data)
                    } catch (error) {
                        console.log("Fetch article error", error)
                    }
                }
            }
        }

        fetchArticle()
    }, [location, savedBlogs])

    return(
<>
{currentBlog?
<div className="d-flex flex-column" style={{border:"1px solid white", margin:"0.8rem 1rem", padding:"0.2rem 0.5rem", borderRadius:"15px"}}>
    <div className="d-flex justify-content-between">    
    <p style={{color:"white", margin:"0"}}>{currentBlog.news_site}</p>
    <p style={{color:"white", margin:"0"}}>{formatIsoDate(currentBlog.updated_at?currentBlog.updated_at:currentBlog.published_at)}</p>
</div>
<h2 style={{color:"white"}} >{currentBlog.title}</h2>
<img src={currentBlog.image_url} style={{maxWidth:"80vw", margin:"0 auto", maxHeight:"80vh"}} alt="Blog picture"/>
<p style={{color:"white", margin:"1rem 0"}}>{currentBlog.summary}</p>
<br>
</br>

<div className="d-flex flex-nowrap justify-content-center gap-2">
            <p style={{color:"white", textWrap:"nowrap"}}>Read more on </p>
            <a className="linkToNewsSite" href={currentBlog.url} target="_blank" rel="noreferrer">{currentBlog.news_site}</a>
</div>

</div>



: <div className="p-5 m-5"><Spinner style={{color:"white"}} className="p-3"/></div>}

</>
    )
}

export default BlogPage