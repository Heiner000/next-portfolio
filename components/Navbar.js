import { Link as ScrollLink } from 'react-scroll'
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#profile', current: true },
    { name: 'Skills', href: '#skills', current: false},
    { name: 'Projects', href: '#projects', current: false},
    { name: 'Contact', href: '#contact', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='hidden sm:ml-6 sm:block my-auto'>
                                <div className='flex space-x-4'>
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
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </ScrollLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
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
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </ScrollLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
