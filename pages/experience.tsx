import '../styles/globals.css';
import { Montserrat } from 'next/font/google';
import Header from "../components/header";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Experience() {
    return (
        <>
            <Header/>
        

            <div>
                <h2 className="mx-8 pb-4" style={{ fontSize: '2rem' }}>Experience</h2>
{/* add padding to all text components instead of breaks */}
                <h4 className="mx-10 pb-2" style={{ fontSize: '1.25rem' }}>Data Engineering Manager</h4> <h4 className="mx-10" style={{ fontSize: '1.25rem' }}>Bear Cognition </h4>
                <h5 className="mx-10" style={{ fontSize: '1rem' }}>June 2023 - Present</h5>
                <p className="text-left text-lg mx-12 pb-4">
                    As a Data Engineering Manager, I oversee the development and management of data architecture, pipelines, and analytics solutions. My role involves ensuring the efficient processing and storage of large datasets, optimizing performance, and leading a team of skilled data engineers to deliver scalable and robust data solutions. I collaborate with cross-functional teams to drive data-driven decision-making and provide actionable insights to support business goals.
                </p>
                <h4 className="mx-10" style={{ fontSize: '1.25rem' }}>Data Engineer</h4> <h4 className="mx-10" style={{ fontSize: '1.25rem' }}>Bear Cognition</h4>
                <h5 className="mx-10" style={{ fontSize: '1rem' }}>June 2022 - June 2023</h5>
                <p className="text-left text-lg mx-12 pb-4">
                    As a Data Engineer, I was responsible for designing, developing, and maintaining data pipelines and ETL processes to support data analytics and machine learning initiatives. I worked closely with data scientists and analysts to understand data requirements, implement data models, and optimize data workflows. I also collaborated with stakeholders to identify data-driven opportunities and deliver data solutions that drive business value.
                </p>
                <h4 className="mx-10" style={{ fontSize: '1.25rem' }}>Data Engineering Intern</h4> <h4 className="mx-10" style={{ fontSize: '1.25rem' }}>Bear Cognition</h4>
                <h5 className="mx-10" style={{ fontSize: '1rem' }}>Feb 2020 - June 2022</h5>
                <p className="text-left text-lg mx-12 pb-4">
                    As a Data Engineering Intern, I gained hands-on experience in data engineering and analytics. I worked on various projects involving data ingestion, transformation, and visualization. 
                    I developed skills in SQL, Python, and data processing technologies. I also collaborated with the data engineering team to support data infrastructure and analytics projects.
                </p>


            </div>
            
        </>
    );
}