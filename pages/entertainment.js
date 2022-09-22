import { useContext, useEffect } from 'react';
import PageComponent from '../components/pageComponent';
import { PageContext } from '../components/pageContext';
import { useRouter } from 'next/router';

function Entertainment({headlines}) {
    
    const { sidebar , isSearchPage , setIsSearchPage ,searchData , isPageLoaded , setIsPageLoaded} = useContext(PageContext)
    const router = useRouter()

    useEffect(()=>{
        setIsSearchPage(false)
    },[])
    
    useEffect(()=>{
        const handleRouteChange =()=>{
            console.log('the route changing has statred')
            setIsPageLoaded(false)
        }
        
        router.events.on('routeChangeStart' , handleRouteChange)
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
          } 
    })
    
    useEffect(()=>{
        const handleRouteChange =()=>{
            console.log('the route changing has ended')
            setIsPageLoaded(true)
        }
        
        router.events.on('routeChangeComplete' , handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
          } 
    })

    if(isSearchPage){
        return(
            <div className={`pt-[100px] bg-[#202124]  min-h-[100vh] text-white ${sidebar ? 'pl-[330px]' : 'pl-10'}`}>
                <div className={`${sidebar ? 'w-[45vw]' : 'w-[60vw]'}`}>
                    {
                        searchData.map((headline, i)=>{
                            return(
                                <div key={i}>
                                    <PageComponent headline={headline}/>
                                </div>                                   
                            )                        
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={`${isPageLoaded ? 'hidden': 'block fixed top-0 left-0 bg-white/60 z-20 w-full h-full'}`} />
            <div className={`pt-[100px] bg-[#202124] min-h-[100vh] text-white ${sidebar ? 'pl-[330px]' : 'pl-10'}`}>
                <div className={`${sidebar ? 'w-[45vw]' : 'w-[60vw]'}`}>
                    {
                        headlines.map((headline, i)=>{
                            return(
                                <div key={i}>
                                    <PageComponent headline={headline}/>
                                </div>                                   
                            )                        
                        })
                    }
                </div>
                
            </div>
        </div>
    );
}

export default Entertainment;

export  async function getServerSideProps(){
    const options = {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '8763dbd93dmsh4a1b73dad25b14fp17f779jsn0c4a8d5ab79d',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };
    
    const res= await fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Entertainment&freshness=Day&textFormat=Raw&safeSearch=Off', options)
    const data = await res.json()
    return{
        props :{
            headlines : data.value
        }
    }

}