import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const navigation = [
    { name: 'Home', href: 'profile', current: true },
    { name: 'Skills', href: 'skills', current: false },
    { name: 'Projects', href: 'projects', current: false },
    { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    // hold scroll position in state
    const [scrollPosition, setScrollPosition] = useState(0)

    // updates on scroll
    const updateScrollPosition = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }

    useEffect(() => {
        // when component mounts, start listening to scroll events
        window.addEventListener('scroll', updateScrollPosition)

        // when component unmounts, stop listening
        return () => window.removeEventListener('scroll', updateScrollPosition)
    }, [])

    return (
        <>
            <Disclosure as="nav" className="bg-slate-950 z-10">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-blue-900 z-50 inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:bg-blue-600 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className='hidden sm:ml-6 sm:block my-auto'>
                                    <div className='flex space-x-4 h-full gap-6'>
                                        {navigation.map((item) => (
                                            <ScrollLink
                                                activeClass="active"
                                                to={item.href}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                                key={item.name}
                                                className={classNames(
                                                    item.current ? 'bg-amber-500 text-slate-800' : 'text-zinc-200 hover:bg-blue-600 hover:text-zinc-100',
                                                    'rounded-md px-3 py-2 text-sm font-medium flex items-center h-full'
                                                )}
                                            >
                                                <div className='flex-grow z-20'>
                                                    {item.name}
                                                </div>
                                            </ScrollLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className="sm:hidden z-50">
                            <div className="space-y-1 px-2 pb-3 pt-2 z-50">
                                {navigation.map((item) => (
                                    <ScrollLink
                                        activeClass="active"
                                        to={item.href}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        key={item.name}
                                        className={classNames(
                                            item.current ? 'z-50 bg-blue-950 text-zinc-50' : 'text-zinc-200 hover:bg-blue-600 hover:text-zinc-100',
                                            'rounded-md px-3 py-2 text-sm font-medium flex items-center h-full'
                                        )}
                                    >
                                        <div className='flex-grow z-20'>
                                            {item.name}
                                        </div>
                                    </ScrollLink>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* only render the scrollLink if the scroll position is not at 0 */}
            {scrollPosition > 70 && (
                <button
                    onClick={() => scroll.scrollToTop()}
                    className='fixed right-4 bottom-4 bg-blue-900 text-zinc-200 p-2 rounded-full hover:bg-blue-600 hover:text-zinc-100 z-50'
                >
                    <ChevronUpIcon className="h-5 w-5" />
                </button>
            )}

        </>
    )
}
