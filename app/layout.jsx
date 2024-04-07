import Head from 'next/head';
import '@styles/globals.css';

export const metadata = {
    title: 'EuroCran',
    description: 'Site for renting crans'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='ru'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <div className="main">
          <div className=""/>
        </div>

        <main className="">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
