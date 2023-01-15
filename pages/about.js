import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function About() {
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <meta name="description" content="Generated by create next app" />
  
          <title>Francesco Barbieri</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <center>
          <main className='wrapper'>
            <Navbar />
            <p>About</p>
          </main>
        </center>
      </>
    )
  }
  