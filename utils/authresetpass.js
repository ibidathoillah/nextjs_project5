import { useEffect } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';


export const login = ({ userData }) => {
  // console.log(userData);
  cookie.set('userData', userData, { expires: 1 });
  if (userData.description === 'RESET PASSWORD'){
    Router.push('/resetpassword')
  }else {
    Router.push('/login')
  }
}

export const fail = () => {
  // console.log(userData);
  Router.push('/login')
}

export const logout = () => {
  cookie.remove('userData')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
}

export const auth = ctx => {
  const { userData } = nextCookie(ctx)
  // console.log(userData)
  
  if (!userData) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
    } else {
        redirectUser(ctx, "/login");
      }
  }

  return userData
}

export const withAuthSync = WrappedComponent => {
  
  const Wrapper = props => {
    // console.log(status);
    

    const syncLogout = event => {
      
      if (event.key === 'logout') {
        
        Router.push('/login')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async ctx => {
    const userData = auth(ctx)
    
    // console.log(userData.status) 
    
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, userData }
  }

  return Wrapper
}

export const profile_route = ctx => {
  const { userData } = nextCookie(ctx)
  // console.log(userData)

  if (userData.role === 'PEKERJA'){
    redirectUser(ctx, "/profilepekerja");
  }else if  (userData.role === 'PEMBERI KERJA'){
    redirectUser(ctx, "/profile");
  }

  return userData
}