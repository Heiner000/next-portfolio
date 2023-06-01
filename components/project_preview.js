import Image from "next/image"

export default function ProjectPreview() {

    const projects = [
        {
            title: "SimuStock",
            desc: "A mobile-first stock trading simulation app with social features.",
            techStack: ["Python", "Django", "PostgreSQL", "React", "JavaScript", "BeautifulSoup"],
            image: "/simustock.png", 
            liveSite: "#", // Replace with actual link
            github: "#" // Replace with actual link
        },
        {
            title: "Card.io",
            desc: "Full-stack MERN app for creating, revising, and studying digital flashcards.",
            techStack: ["JavaScript", "Express", "MongoDB", "Node.js", "Cloudinary API"],
            image: "/cardio.png", 
            liveSite: "#", // Replace with actual link
            github: "#" // Replace with actual link
        },
        {
            title: "Everyone’s a Critic",
            desc: "Movie-centered social media app with user-friendly and responsive UX.",
            techStack: ["JavaScript", "Express", "PostgreSQL", "Bootstrap", "Heroku"],
            image: "/everyoneCritic.png",
            liveSite: "https://card-io-study-app.netlify.app/", // Replace with actual link
            github: "#" // Replace with actual link
        },
        {
            title: "The Bridge Troll’s Toll",
            desc: "Fun multiple choice quiz game with clean, responsive design.",
            techStack: ["HTML5", "JavaScript", "CSS3"],
            image: "/bridgeTroll.png",
            liveSite: "#", // Replace with actual link
            github: "#" // Replace with actual link
        },
    ]

    return (
        <div className="">
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
                        <div className="">
                            <a className="font-bold underline hover:text-indigo-600">{project.title}</a>
                            <a href={project.liveSite} target="_blank" rel="noopener noreferrer">{project.title}</a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
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