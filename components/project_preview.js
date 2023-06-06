import Image from "next/image"
import Link from "next/link"

export default function ProjectPreview() {

    const projects = [
        {
            title: "SimuStock",
            desc: "A mobile-first stock trading simulation app with social features.",
            techStack: ["Python", "Django", "PostgreSQL", "React", "JavaScript", "BeautifulSoup"],
            image: "/simustonk.png",
            liveSite: "#", // Replace with actual link when live
            github: "https://github.com/Heiner000/project-4-client",
            linkUrl: "/simustock"
        },
        {
            title: "Card.io",
            desc: "Full-stack MERN app for creating, revising, and studying digital flashcards.",
            techStack: ["JavaScript", "Express", "MongoDB", "Node.js", "Cloudinary API"],
            image: "/cardio.png",
            liveSite: "https://card-io-study-app.netlify.app/",
            github: "https://github.com/Heiner000/project3-server",
            linkUrl: "/cardio"
        },
        {
            title: "Everyone’s a Critic",
            desc: "Movie-centered social media app with user-friendly and responsive UX.",
            techStack: ["JavaScript", "Express", "PostgreSQL", "Bootstrap", "Heroku"],
            image: "/everyoneCritic.png",
            liveSite: "https://card-io-study-app.netlify.app/",
            github: "https://github.com/Heiner000/project-2",
            linkUrl: "/everyoneCritic"
        },
        {
            title: "The Bridge Troll’s Toll",
            desc: "Fun multiple choice quiz game with clean, responsive design.",
            techStack: ["HTML5", "JavaScript", "CSS3"],
            image: "/bridgeTroll.png",
            liveSite: "https://heiner000.github.io/project-1/",
            github: "https://github.com/Heiner000/project-1",
            linkUrl: "/bridgeTroll"
        },
    ]

    return (

        <section id="projects" className="mt-20">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
            </div>
            {projects.map((project, index) => (
                <div key={project.title} className="mb-16 flex flex-col md:flex-row items-center">
                    {index % 2 === 0 ? (
                        <>
                            <div className="relative w-full md:w-1/3 h-64 md:h-auto mb-6 md:mb-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={500}
                                    width={500}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="md:pl-6 md:w-2/3">
                                <h2 className="text-2xl font-bold mb-2 text-slate-900">
                                    <Link href={project.linkUrl} className="hover:text-blue-700">
                                        {project.title}
                                    </Link>
                                </h2>
                                <p className="mb-2 text-slate-950">{project.desc}</p>
                                <p className="mb-2 text-slate-900">Tech: {project.techStack.join(", ")}</p>
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
                        </>
                    ) : (
                        <>
                            <div className="md:pl-6 md:w-2/3">
                                <h2 className="text-2xl font-bold mb-2 text-slate-900">
                                    <Link href={project.linkUrl} className="hover:text-blue-700">
                                        {project.title}
                                    </Link>
                                </h2>
                                <p className="mb-2 text-slate-950">{project.desc}</p>
                                <p className="mb-2 text-slate-900">Tech: {project.techStack.join(", ")}</p>
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
                            <div className="relative w-full md:w-1/3 h-64 md:h-auto mb-6 md:mb-0 rounded-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    height={500}
                                    width={500}
                                    className="rounded-lg"
                                />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </section>
    );
}