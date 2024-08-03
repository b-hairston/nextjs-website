import Link from 'next/link';
import AppBgImg from '../components/bg-image';
import {Montserrat} from 'next/font/google';
import '../styles/globals.css';
import Head from 'next/head';
import Header from "../components/header";

// change title in the browser tab




const inter = Montserrat ({subsets: ['latin']});


export default function Page() {
  return (
    <>
      <AppBgImg />
      <Head>
        <title>Imani's Personal Website</title>
        <meta name="description" content="Portfolio Site" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      <h1 className="text-right text-3xl mx-8">Welcome to My Personal Website</h1>
      <div className={`font-monsterrat ${inter.className}`} style={{ minHeight: '100vh' }}>
        <br />
        <p className="text-white text-right text-xl mx-8">I'm Imani</p>
      </div>
      <ul>
      </ul>
    </>
  );
}
