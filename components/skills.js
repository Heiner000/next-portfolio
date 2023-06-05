import Image from "next/image"

export default function Skills() {

    const skills = [
        { name: "HTML5", icon: "icons/html.svg"},
        { name: "CSS3", icon: "icons/css-3.svg"},
        { name: "Python", icon: "icons/python.svg"},
        { name: "Django", icon: "icons/django.svg"},
        { name: "JavaScript", icon: "icons/javascript.svg"},
        { name: "React", icon: "icons/react.svg"},
        { name: "Node js", icon: "icons/nodejs.svg"},
        { name: "Next js", icon: "icons/next-js.svg"},
        { name: "Axios", icon: "icons/axios.svg"},
        { name: "Bootstrap", icon: "icons/bootstrap-5.svg"},
        { name: "Tailwind", icon: "icons/tailwind-css.svg"},
        { name: "Ruby", icon: "icons/ruby.svg"},
        { name: "Heroku", icon: "icons/heroku.svg"},
        { name: "Netlify", icon: "icons/netlify.svg"},
        { name: "Vercel", icon: "icons/vercel.svg"},
        { name: "PostgreSQL", icon: "icons/postgresql.svg"},
        { name: "Sequelize", icon: "icons/sequelize.svg"},
        { name: "MongoDB", icon: "icons/mongodb.svg"},
        { name: "Mongoose", icon: "icons/mongoose.svg"},
        { name: "Git", icon: "icons/git-icon.svg"},
    ]

    const methods = [
        "Agile / Scrum",
        "Object Oriented Programming",
        "MVC Pattern",
        "Test-Driven Development",
        "Responsive Design",
        "Authentication (OAuth/Sessions/Tokens)",
        "CRUD Operations",
        "RESTful Routing",
    ]

    return (
        <section id="skills" className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-10">Skills</h2>
            <div className="mb-2">
                {/* <h3 className="text-2xl font-semibold mb-4">Hard Skills</h3> */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center justify-center">
                            <p className="text-center text-gray-800 font-bold">
                                {skill.name}
                            </p>
                            <div className="relative w-24 h-24 flex justify-center items-center rounded-lg">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={80}
                                height={80}
                            />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div>
                <h3 className="text-2xl font-semibold mb-4">Methods</h3>
                <ul className="list-disc list-inside">
                    {methods.map((method, i) => (
                        <li key={`method-${i}`}>{method}</li>
                    ))}
                </ul>
            </div> */}
        </section>
    )
}