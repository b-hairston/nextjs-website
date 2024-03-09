// components/AppBgImg.tsx or components/AppBgImg.js

import Image from 'next/image';
import bgImage from '../public/board2.jpg'; // Adjust the path as necessary

export default function AppBgImg() {
    return (
        <div style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: -1, top: 0, left: 0 }}>
            <Image 
                src={bgImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>
    );
}
