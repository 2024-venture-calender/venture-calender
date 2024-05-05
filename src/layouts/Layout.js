import Header from '../components/Header/Header';
import Header2 from '../components/Header/Header2';
import Footer from '../components/Footer/Footer';

import { useState, useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';

function Layout() {

    const [ isLoggedIn, setLoggedIn ] = useState(false);

    const [ params ] = useSearchParams();
    let paramLoggedIn = params.get('isLoggedIn');

    useEffect(
        () => {
            if(paramLoggedIn !== null) {
                if(paramLoggedIn === 'true'){
                    setLoggedIn(true);
                    
                }else if(paramLoggedIn === 'false'){
                    setLoggedIn(false);
                    
                }
            }
        }, [paramLoggedIn]
    );

    if(!isLoggedIn) {
        
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
    }else {
        
        return (
            <>
                <Header2 />
                <Outlet />
                <Footer />
            </>
        )
    }
}

export default Layout;
