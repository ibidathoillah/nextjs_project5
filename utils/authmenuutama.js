import { useEffect } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

export function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}


export const auth = ctx => {
  const { userData } = nextCookie(ctx)
  
  // console.log(userData)
  if (userData) {
    if (userData.role === 'PEKERJA'){
      // Router.push('/profilepekerja')
      redirectUser(ctx, "/menuutamapekerja");
    }
  }
  return userData
}

export const withAuthSync = WrappedComponent => {
  // console.log("tes")
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
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, userData }
  }

  return Wrapper
}
