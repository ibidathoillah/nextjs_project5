import Head from 'next/head'
import Header from './header';
import Footer from './footer';

export default function Layout({
  children,
  title = 'Tapera',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header ></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}