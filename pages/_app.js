import NextApp from 'next/app'
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Appbar from './navigation/AppbarDrawer'


const theme = {
  primary: '#f2f2f2',
  ...createMuiTheme()
}

export default class App extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }



  render() {
    const { Component, pageProps } = this.props

  const Layout =Component.Layout||EmptyLayout;
    return (
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
      
      
       <Layout> <Component {...pageProps} /></Layout>
      
          
        </MaterialThemeProvider>
      </StyledThemeProvider>
    )
  }
}
const EmptyLayout=({children})=><>{children}</>
