import AppBgImg from 'app/bg-image';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


export default function About() {
    return (
    <>
        <AppBgImg />
        <div className={`font-inter ${inter.className}`} style={{ minHeight: '100vh' }}>
        </div>
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
    </>
    
)
}
