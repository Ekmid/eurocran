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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
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
