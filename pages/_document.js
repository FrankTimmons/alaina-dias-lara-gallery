import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="styles.css" />
      </Head> 
      <body className='bg-stone-100 min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
