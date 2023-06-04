import Image from "next/image"
import Link from "next/link"

export default function ProjectPreview() {

    const projects = [
        {
            title: "SimuStock",
            desc: "A mobile-first stock trading simulation app with social features.",
            techStack: ["Python", "Django", "PostgreSQL", "React", "JavaScript", "BeautifulSoup"],
            image: "/simustonk.png",
            liveSite: "#", // Replace with actual link
            github: "#", // Replace with actual link,
            linkUrl: "/simustock"
        },
        {
            title: "Card.io",
            desc: "Full-stack MERN app for creating, revising, and studying digital flashcards.",
            techStack: ["JavaScript", "Express", "MongoDB", "Node.js", "Cloudinary API"],
            image: "/cardio.png",
            liveSite: "#", // Replace with actual link
            github: "#", // Replace with actual link,
            linkUrl: "/cardio"
        },
        {
            title: "Everyone’s a Critic",
            desc: "Movie-centered social media app with user-friendly and responsive UX.",
            techStack: ["JavaScript", "Express", "PostgreSQL", "Bootstrap", "Heroku"],
            image: "/everyoneCritic.png",
            liveSite: "https://card-io-study-app.netlify.app/", // Replace with actual link
            github: "#", // Replace with actual link,
            linkUrl: "/everyoneCritic"
        },
        {
            title: "The Bridge Troll’s Toll",
            desc: "Fun multiple choice quiz game with clean, responsive design.",
            techStack: ["HTML5", "JavaScript", "CSS3"],
            image: "/bridgeTroll.png",
            liveSite: "#", // Replace with actual link
            github: "#", // Replace with actual link,
            linkUrl: "/bridgeTroll"
        },
    ]

    return (
        <div className="h-screen" id="projects">
            {projects.map((project) => (
                <div key={project.title} className="flex items-center gap-4 mb-8">

                    <div className="relative w-32 h-32">
                        <Image
                            src={project.image}
                            alt={project.title}
                            // style={{objectFit: "contain"}}	
                            height={400}
                            width={400}
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <Link href={project.linkUrl}>
                                <h3 className="font-bold underline hover:text-indigo-600">{project.title}</h3>
                            </Link>
                            <a className='text-xs hover:text-indigo-600' href={project.liveSite} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className='text-xs hover:text-indigo-600' href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>

                        <div>{project.desc}</div>
                        <div>
                            <small>{project.techStack.join(', ')}</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}