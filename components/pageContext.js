import { createContext , useState } from "react";

export const PageContext = createContext(); 

const PageProvider = ({children}) => {

    const [ sidebar, setSidebar] = useState(true)
    const [ userSidebar , setUserSidebar ] =useState(true)
    const [value , setValue ] = useState('')
    const [isSearchPage , setIsSearchPage] = useState(false)
    const [searchData , setSearchData] = useState()
    const [searchmb , setSearchmb ] = useState(false)
    const [isPageLoaded , setIsPageLoaded ] = useState(true)
    const [location , setLocation ] = useState({
        lat : null,
        long : null
    })

    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '8763dbd93dmsh4a1b73dad25b14fp17f779jsn0c4a8d5ab79d',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    const fetcher =async() =>{       
        if (value==='') return;
        const res = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${value}&freshness=Day&textFormat=Raw&safeSearch=Off` , options)
        const data = await res.json()
        setValue('')
        setIsSearchPage(true)
        setSearchData(data.value)

    }


    const context = {sidebar, setSidebar ,userSidebar , setUserSidebar ,
         value , setValue , isSearchPage ,  setIsSearchPage , fetcher , searchData ,
         isPageLoaded , setIsPageLoaded , location ,setLocation ,searchmb , setSearchmb 
    }
    return (
        <PageContext.Provider value={context}>
            {children}
        </PageContext.Provider>
    );
}
 
export default PageProvider;



