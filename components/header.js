import { MdMenu } from 'react-icons/md';
import { AiOutlineSearch , AiOutlineArrowLeft } from 'react-icons/ai';
import { MdOutlineHealthAndSafety ,MdBusiness , MdOutlineOndemandVideo } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';
import { FiGlobe } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import { GiBattleMech } from 'react-icons/gi';

import Image from 'next/image';
import { PageContext } from './pageContext';

import { useRouter } from 'next/router';
import { useEffect  , useContext , useState} from 'react';
import { authContext } from './authContext';


function Header() {

    const {sidebar ,  setSidebar  , value , setValue , fetcher , isSearchPage , setIsSearchPage} = useContext(PageContext)
    const { searchmb , setSearchmb} = useContext(PageContext)

    const { user, login} = useContext(authContext)
    const router = useRouter()

    const handleEnter = (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault(); 
            value !== '' && fetcher() ;
            setSearchmb(false)
            setValue('')
        }
    }

    const handleClick=()=>{
        setIsSearchPage(false)
    }

    return (
        <div className='fixed w-full '>
            {/* the top part */}
            <div>

                {/* for breakpoint below 3xs */}
                <div className='flex 3xs:hidden justify-between bg-[#202124] pr-3 '>
                    <div className={`${searchmb ? 'hidden' : 'justify-between flex h-full w-full  text-white col-span-2 lg:col-span-1 pl-5 '}`}>
                        <div className='flex'>
                            <div className='my-auto pb-3' onClick={()=>setSidebar(!sidebar)}>
                                <MdMenu size='22' className='text-white cursor-pointer mt-2'/>
                            </div>
                            <div className='h-full  text-lg ml-3'>
                                <div className=' w-[120px] h-[30px] relative mt-2'>
                                <Image src='/logo-removebg-preview.png' layout='fill' objectfit='cover'/>
                            </div>                        
                        </div>  
                    </div>
                        <div className=' rounded-full my-auto '>
                            <AiOutlineSearch
                                size='21'
                                className='text-white my-auto mx-4 cursor-pointer hover:text-[#4e7cc7]'
                                onClick={()=>setSearchmb(true)} 
                            />
                        </div>              
                    </div>
                    <div className={`${searchmb ? '  h-[42px] py-1 w-full pr-4' : 'hidden'}`}>
                        <div className='pl-2 flex h-full w-full bg-[#404142] rounded-lg'>
                            <AiOutlineArrowLeft size='17'
                            className='my-auto text-white'
                            onClick={()=>{setSearchmb(false) }} />
                            <form className='w-[80%] h-full focus:border-none focus:outline-none'>
                                <input type='text' placeholder='search for topics,loactions and sources'
                                className='ml-3 text-white/75 placeholder:text-red-300  placeholder:text-xs placeholder:bg-cyan-300 
                                bg-[#404142] text-sm w-full h-full focus:border-none focus:outline-none rounded-lg '
                                
                                onChange={(e)=>setValue(e.target.value)}
                                onKeyPress={(e) => {handleEnter(e)}}
                                                    
                                                    // e.key === 'Enter' && e.preventDefault(); 
                                                    // e.key === 'Enter' && value !== '' && fetcher() ;
                                                    // e.key === 'Enter' && setSearchmb(false)
                                                    // e.key === 'Enter' && setValue('') 
                                />
                            </form>
                        </div>
                    </div>
                    <div className='flex w-[10vw] my-auto  '>
                        
                        <div>
                            <CgMenuGridO size='20' className='text-white'/>
                        </div>
                        
                    </div>
                </div>

                {/* for breakpoint above 3xs */}
                <div className='hidden 3xs:flex h-[11vh] w-full  py-3 bg-[#202124]'>
                    <div className='h-full w-[230px] flex text-white col-span-2 lg:col-span-1 px-5 '>
                        <div className='my-auto pb-3' onClick={()=> setSidebar (!sidebar)}>
                            <MdMenu size='22' className='text-white cursor-pointer mt-2'/>
                        </div>
                        <div className='h-full  text-lg ml-3'>
                            <div className=' w-[120px] h-[30px] relative mt-2'>
                            <Image src='/logo-removebg-preview.png' layout='fill' objectfit='cover'/>
                            </div>                        
                        </div>                
                    </div>
                    <div className=' sm:mx-3  w-full lg:w-[65%] h-[95%] flex justify-center min-w-[300px] '>
                        <div className='bg-[#404142] flex h-full rounded-lg w-full sm:w-[80%] lg:mr-10 '>
                            <AiOutlineSearch
                            size='21'
                            className='text-white/75 my-auto mx-5 cursor-pointer hover:text-[#4e7cc7]'
                            onClick={fetcher}
                            />                       
                            <form className='w-[80%]  h-full focus:border-none focus:outline-none '>
                                <input type='text' placeholder='search for topics,loactions and sources'
                                  className='text-white/75 placeholder:text-white/75 placeholder:text-sm 
                                  bg-[#404142] text-sm w-full h-full focus:border-none focus:outline-none rounded-lg'
                                  value={value}
                                  onChange={(e)=>setValue(e.target.value)}
                                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); 
                                                    e.key === 'Enter' && value !== '' && fetcher() ;}}
                                
                                />
                            </form>
                        </div>
                    </div>
                    <div className='flex w-[100px] ml-auto text-white'>
                        <div className=' bg-blue-600 w-[60px] my-auto text-center text-sm py-[4px] rounded-md cursor-pointer'
                         onClick={login}>
                            <p className={`${user === null ? 'block' : 'hidden'} `}>sign in</p>
                            <p className={`${user != null ? 'block' : 'hidden'} `}>sign out</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* the blue block part */}
            <div className='h-[8vh] w-full bg-[#2a4165] text-center text-white/90 flex flex-col justify-center text-xs md:text-sm font'>
                The new Google News has a fresh look, brand-new briefing and customised topics.            
            </div>

            {/* the side drawer */}
            <div className={`bg-[#202124] ${sidebar ? 'pt-3 pr-10 fixed w-[250px] text-gray-400 text-[14px] 3xs:w-[270px] h-full left-[0] ease-in duration-300' : 'fixed left-[-100%] ' }`}>
            
                {/* Top Stories */}
                <div className={` ${router.asPath === '/topstories' ?  'bg-[#2a4165]': 'hover:text-[#4f7fce]'}
                    ${isSearchPage ? 'bg-transparent ' : ''} w-[100%] rounded-r-full  py-2 pl-7  cursor-pointer`}
                    onClick={()=>{router.push('/topstories' ); handleClick()}}
                
                >
                    <span className='flex'><FiGlobe size='17' className='mr-2 my-auto'/>Top stories</span>
                </div>

                {/*Covid 19*/}
                <div className={router.asPath === '/covid19' ? 'w-[100%] rounded-r-full  bg-[#2a4165] py-2 pl-7  cursor-pointer' :
                    'w-[100%] rounded-r-full  py-2 pl-7  cursor-pointer hover:text-[#4f7fce]'}
                    onClick={()=>router.push('/covid19')}>
                    <span className='flex'><MdOutlineHealthAndSafety size='17' className='mr-2 my-auto'/>Covid 19</span>
                </div>
                
                {/* World News */}
                <div className={` ${router.asPath === '/worldNews' ?  'bg-[#2a4165]': 'hover:text-[#4f7fce]'}
                    ${isSearchPage ? 'bg-transparent ' : ''} w-[100%] rounded-r-full  py-2 pl-7  cursor-pointer`}
                    onClick={()=>{router.push('/worldNews' )
                            setIsSearchPage(false)}}>

                    <span className='flex'><BiWorld size='17' className='mr-2 my-auto'/>World</span>
                </div>

                {/* Business */}
                <div className={` ${router.asPath === '/business' ?  'bg-[#2a4165]': 'hover:text-[#4f7fce]' } w-[100%] rounded-r-full  py-2 pl-7  cursor-pointer`}
                    onClick={()=>router.push('/business')}>
                    <span className='flex'><MdBusiness size='17' className='mr-2 my-auto'/>Business</span>
                </div>

                {/* Technology */}
                <div className={` ${router.asPath === '/technology' ?  'bg-[#2a4165]': 'hover:text-[#4f7fce]' } w-[100%] rounded-r-full  py-2 pl-7  cursor-pointer`}
                    onClick={()=>router.push('/technology')}>
                    <span className='flex'><GiBattleMech size='17' className='mr-2 my-auto text-white '/>Technology</span>
                </div>

                {/* Entertainment */}
                <div className={` ${router.asPath === '/entertainment' ?  'bg-[#2a4165]': 'hover:text-[#4f7fce]' } w-[100%] rounded-r-full  py-2 pl-7  cursor-pointer`}
                    onClick={()=>router.push('/entertainment')}>
                    <span className='flex'><MdOutlineOndemandVideo size='17' className='mr-2 my-auto text-white'/>Entertainment</span>
                </div>
            </div>
        </div>
    );
}

export default Header;