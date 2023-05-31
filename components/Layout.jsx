import React from 'react'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div className='bg-stone-100'>
      <Head>
        <title>Alaina Dias Lara</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="styles.css" />
      </Head>
      {/* <main className='2xl:mx-[30%] xl:mx-[25%] lg:mx-[20%] sm:mx-[10%] mx-[5%] bg-red-500'> */}
      <main className='block lg:m-auto lg:w-[900px] 2xl:w-[1200px] mx-[5%]'>
        {children}
      </main>
    </div>
  )
}

export default Layout