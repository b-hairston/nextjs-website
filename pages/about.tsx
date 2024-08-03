import AppBgImg from '@/components/bg-image';
import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

const inter = Montserrat({ subsets: ['latin'] });

export default function About() {
    return (
        <>
            <AppBgImg />
            <h1 className="text-right text-3xl mx-8">About Me</h1>
            <br />
            <div className="font-monsterrat min-h-screen flex flex-col items-end mx-8">
                
                <p className="text-right text-xl mb-2">I&#39;m Imani,</p>
                <p className="text-right text-xl mb-2">a data engineer</p>
                <p className="text-right text-xl mb-4">with a passion for turning data into actionable insights and innovative solutions.</p>
                <p className="text-right text-lg max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel, porttitor eget, efficitur eget, leo. Praesent in magna a metus lacinia malesuada. Suspendisse non interdum neque. Suspendisse sed enim et lectus pellentesque gravida. Proin tellus mi, luctus non massa a, aliquam volutpat nisi.
                </p>
            </div>
        </>
    );
}

