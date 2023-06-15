import Image from "next/image"

export default function Profile() {

    return (
        <div className="min-h-screen flex md:-mt-14 sm:items-center items-start mt-14" id="profile">
            <div className="">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900">Garrett Heiner</h1>
                    <h2 className="text-slate-600">Software Engineer</h2>
                </div>
                <br />
                <div className="text-center text-slate-900">
                    A driven and resilient individual with experience in sales and service positions that have honed my leadership, communication, and problem-solving skills. My diverse background in trades & finance has prepared me to bring ideas to life through my passion for learning and producing quality work. With a focus on web development, I am ready to create efficient and effective solutions for any project.
                </div>
                <br />
                <div className="flex flex-col items-center text-lg justify-center gap-8 md:flex-row">
                    <a className="icon mx-6" href="/Garrett-Heiner-Resume.pdf" download>
                        <Image
                            src={`icons/file-pdf-regular.svg`}
                            alt={"resume icon"}
                            width={30}
                            height={30}
                        />
                    </a>
                    <a className="icon mx-6" href="https://www.linkedin.com/in/garrett-heiner-a14b42ab/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={`icons/linkedin-in.svg`}
                            alt={"linkedin icon"}
                            width={30}
                            height={30}
                        />
                    </a>
                    <a className="icon mx-6" href="https://github.com/Heiner000" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={`icons/github.svg`}
                            alt={"github icon"}
                            width={30}
                            height={30}
                        />
                    </a>
                    <a className="icon mx-6" href="mailto:garrett.heiner+portfolio@gmail.com">
                        <Image
                            src={`icons/envelope-regular.svg`}
                            alt={"mail icon"}
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>

            <style jsx>{`
                .icon {
                    transition: all 0.3s;
                }
                .icon:hover {
                    transform: scale(1.5);
                    fill: #4A9FFF
                }
            `}</style>
        </div>
    )
}