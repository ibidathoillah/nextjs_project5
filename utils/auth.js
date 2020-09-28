import { useEffect } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';


export const login = ({ userData }) => {
  // console.log(userData);
  cookie.set('userData', userData, { expires: 1 });
  if (userData.status === 'NEW'){
    Router.push('/firstresetpass');
  }else {
    if (userData.role === 'PEKERJA'){
      Router.push('/menuutamapekerja');
    }else if  (userData.role === 'PEMBERI KERJA'){
      Router.push('/menuutama');
    }
  }
}

export const firstlogin = () => {
  // console.log(userData);
  // cookie.set('userData', userData, { expires: 2 });
  Router.push('/menuutama')
}

export const auth = ctx => {
  const { userData } = nextCookie(ctx)
  // console.log(userData)
  // If there's no token, it means the user is not logged in.
  if (!userData) {
    // console.log("masuk2")
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
    } else {
        redirectUser(ctx, "/login");
      }
  }
  return userData
}

export const logout = () => {
  cookie.remove('userData')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/login')
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


