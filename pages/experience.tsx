import '../styles/globals.css';
import { Montserrat } from 'next/font/google';
import Header from "../components/header";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Experience() {
    return (
        <>
            <div>
                <h2 className="mx-8" style={{ fontSize: '2rem' }}>Experience</h2>
                <br />
                <h4 className="mx-10" style={{ fontSize: '1.25rem' }}>Data Engineering Manager</h4> <h4 className="mx-10" style={{ fontSize: '1.25rem' }}>Bear Cognition </h4>
                <br />
                <p className="text-left text-lg mx-12">
                    As a Data Engineering Manager, I oversee the development and management of data architecture, pipelines, and analytics solutions. My role involves ensuring the efficient processing and storage of large datasets, optimizing performance, and leading a team of skilled data engineers to deliver scalable and robust data solutions. I collaborate with cross-functional teams to drive data-driven decision-making and provide actionable insights to support business goals.
                </p>


            </div>


            
            <br />
            <Header />
        </>
    );
}