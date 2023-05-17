import React from 'react'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Alaina Nearing</title>
      </Head>
      <main className='mx-[200px]'>
        {children}
      </main>
    </div>
  )
}

export default Layout