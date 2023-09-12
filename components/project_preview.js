import Image from "next/image"
import NotDeployed from "../pages/NotDeployed";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function ProjectPreview() {

    const projects = [
        {
            title: "SimuStock",
            situation: "Developed a mobile-oriented trading simulation application, with the aim of offering users a risk-free practice trading environment.",
            task: "Collaborated with a peer to conceive the project idea, select the appropriate tech stack, and create a minimum viable product (MVP) along with stretch goals.",
            action: "Adopted Agile methodologies for project management, with daily stand-ups and one-week sprints. Utilized Miro for project planning and GitHub for version control. Built the front-end using React and developed backend views and models using Django, with PostgreSQL for the database.",
            result: "Successfully developed an application offering near-real-time stock data scraping with BeautifulSoup, and full user functionality including account management and social features.",
            techStack: ["Python", "Django", "PostgreSQL", "React", "JavaScript", "BeautifulSoup"],
            images: ["/p4-devices/home-device.png", "/p4-devices/company-device.png", "/p4-devices/buy-device.png", "/p4-devices/sell-device.png", "/p4-devices/following-device.png"],
            aspectRatio: "9/16",
            liveSite: "/NotDeployed", // Replace with actual link when live
            github: "https://github.com/Heiner000/project-4-client",
            linkUrl: "/simustock"
        },
        {
            title: "Card.io",
            situation: "Participated in a group project to develop a full-stack MERN application that enables users to create, revise, remove, and study digital flashcards.",
            task: "Worked together with two team members to establish an MVP, create stretch goals, distribute tasks, and execute the project.",
            action: "Employed Miro for planning and Thunderclient for route testing. Constructed the frontend using React, set up the MongoDB database using Mongoose, and integrated the Cloudinary API for image handling.",
            result: "Delivered a user-friendly application that enhances the study experience by enabling customized digital flashcard creation and management.",
            techStack: ["JavaScript", "Express", "MongoDB", "Node.js", "Cloudinary API"],
            images: ["p3/p3-1.png","p3/p3-2.png",],
            aspectRatio: "16/9",
            liveSite: "https://card-io-study-app.netlify.app/",
            github: "https://github.com/Heiner000/project3-server",
            linkUrl: "/cardio"
        },
        {
            title: "Everyone’s a Critic",
            situation: "Designed and built a solo full-stack PERN application for movie reviews, inspired by IMDB & Goodreads.",
            task: "Took the initiative to plan the project, design wireframes, construct models and Entity Relationship Diagrams (ERDs), establish RESTful routing, and build both the frontend and backend.",
            action: "Created the frontend in React, built an Express server backend, and established a Postgres database using Sequelize. Adopted Bootstrap for styling and integrated the OMDB database API for fetching data.",
            result: "Developed a functional and interactive movie review application, enhancing the user experience with rich movie data and social features.",
            techStack: ["JavaScript", "Express", "PostgreSQL", "Bootstrap", "Heroku"],
            images: ["p2/p2-1.png","p2/p2-2.png","p2/p2-3.png","p2/p2-4.png",],
            aspectRatio: "16/9",
            liveSite: "https://evac-app.herokuapp.com/",
            github: "https://github.com/Heiner000/project-2",
            linkUrl: "/everyoneCritic"
        },
        {
            title: "The Bridge Troll’s Toll",
            situation: "For my inaugural project, I was tasked with creating a game leveraging JavaScript DOM manipulation.",
            task: "The objective was to learn and effectively apply event-driven programming concepts, advancing the game through functions attached to Event Listeners.",
            action: "Applied extensive JavaScript DOM manipulation techniques and bespoke CSS for dynamic changes in display during the game. Leveraged console logs extensively to understand the code flow and debug issues.",
            result: "Developed a multiple-choice quiz game that provides an enjoyable user experience across desktop and mobile platforms, demonstrating proficiency in foundational web technologies.",
            techStack: ["HTML5", "JavaScript", "CSS3"],
            images: ["p1/p1-1-device.png","p1/p1-2-device.png","p1/p1-3-device.png","p1/p1-4-device.png",],
            aspectRatio: "16/9",
            liveSite: "https://heiner000.github.io/project-1/",
            github: "https://github.com/Heiner000/project-1",
            linkUrl: "/bridgeTroll"
        },
    ]


    return (
        <section id="projects" className="min-h-screen mt-20">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
            </div>
            {projects.map((project, index) => (
                <div key={project.title} className="mb-16 flex flex-col md:flex-row items-center">
                    <div className={`rounded-lg relative w-full md:w-1/2 aspect-[16/9] mb-6 md:mb-0 ${index % 2 !== 0 && 'md:order-last'}`}>
                        <Carousel infiniteLoop autoPlay showThumbs={false}>
                            {project.images.map((image, i) => (
                                <div key={i} className="flex justify-center max-h-[350px]">
                                    <img src={image} alt={`${project.title} screenshot ${i + 1}`} className="max-h-full object-contain"/>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="md:pl-6 md:w-2/3">
                        <h2 className="text-2xl font-bold mb-2 text-slate-900">
                            {project.title}
                        </h2>
                        <p className="mb-2 text-slate-950">
                            <strong>Situation:</strong> {project.situation}
                        </p>
                        <p className="mb-2 text-slate-950">
                            <strong>Task:</strong> {project.task}
                        </p>
                        <p className="mb-2 text-slate-950">
                            <strong>Action:</strong> {project.action}
                        </p>
                        <p className="mb-2 text-slate-950">
                            <strong>Result:</strong> {project.result}
                        </p>
                        <p className="mb-2 text-slate-900">
                            <strong>Tech:</strong> {project.techStack.join(", ")}
                        </p>
                        <p>
                            <a
                                className="text-amber-500 hover:text-amber-700"
                                href={project.liveSite}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                See it Here
                            </a>
                            {" "} | {" "}
                            <a
                                className="text-amber-500 hover:text-amber-700"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                See the Code
                            </a>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )

}