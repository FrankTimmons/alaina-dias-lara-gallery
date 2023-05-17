import React from 'react'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Alaina Nearing</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <main className='2xl:mx-[30%] xl:mx-[25%] lg:mx-[20%] mx-[10%]'>
        {children}
      </main>
    </div>
  )
}

export default Layout