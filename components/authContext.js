import { createContext , useEffect, useState } from "react"; 
import netlifyidentity from 'netlify-identity-widget';

export const authContext = createContext()

const  AuthProvdier=({children})=>{

    
    useEffect(()=>{
        netlifyidentity.init()

        netlifyidentity.on('login', (user)=>{
            setUser(user)
        })
        netlifyidentity.on('logout', ()=>{
            setUser(null)
            console.log('logout event')
        })
        netlifyidentity.close()

        return ()=>{
            netlifyidentity.off('login')
            netlifyidentity.off('logout')
        }
    },[])

    const [user, setUser] = useState(null)

    const login =()=>{
        netlifyidentity.open()
    }

    const context = {user , login}

    return (
        <authContext.Provider value={context}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvdier;