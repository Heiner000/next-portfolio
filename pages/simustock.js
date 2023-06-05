import Link from 'next/link'

export default function Simustock() {
    return (
        <main className='max-w-xl m-auto flex flex-col gap-4'>
            <div>
                Specifics about the Simustock project
            </div>
            <Link href="/">
                <p className="font-bold underline hover:text-indigo-600">Back</p>
            </Link>
        </main>
    )
}
