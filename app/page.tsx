import Link from 'next/link';
import AppBgImg from './bg-image';
import {Inter} from 'next/font/google';


const inter = Inter ({subsets: ['latin']});


export default function Page() {
  return (
    <>
      <AppBgImg />
      <div className={`font-inter ${inter.className}`} style={{ minHeight: '100vh' }}>
      </div>
      <ul>
        <li>
          <Link href="/" legacyBehavior>
              <a id="link">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </>
  );
}