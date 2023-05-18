// @ means start in the project root directory (aka where the package.json is located)
import styles from "@/styles/About.module.css"
import { useState } from 'react'
// special next js images that speed up SSR caching
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return (
        <div className={styles.greenText}>
            {/* styled jsx example */}
            <style jsx>{`
                .bigHeader {
                    font-size: ${fontSize}rem;
                }
            `}</style>
            <button onClick={() => setFontSize(fontSize * 2)} >++</button>

            <h1 className="bigHeader">About Me</h1>

            <p>I am a super cool software engineer, I make all kinds of neat projects with da code 💻</p>

            {/* local images are stored in the @/public */}
            {/* regular <img /> tags work as well, if you cannot procide a width and height */}
            <Image 
                src="/next.svg"
                alt="next logo"
                // next Image components NEED a predefined pixel height & width
                width={400}
                height={800}
            />

            {/* using another hosting domain for images */}
            <Image
                src="https://placekitten.com/450/450"
                alt="a cat"
                width={450}
                height={450}
            />

        </div>
    )
}