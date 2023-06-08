import Image from 'next/image'

export default function NotDeployed() {

    const closeTab = () => {
        window.close()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4 sm:px-0">

            <div className="bg-slate-100 rounded-xl p-4 sm:p-8 shadow-md text-center max-w-sm mx-auto">

                <div className="w-full h-0 pb-[100%] relative">
                    <iframe
                        src="https://giphy.com/embed/unQ3IJU2RG7DO"
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute' }}
                        className="giphy-embed"
                        allowFullScreen
                    />
                </div>

                <h1 className="text-3xl sm:text-4xl text-slate-900 mb-4 mt-4">Site not yet deployed</h1>
                <p className="text-lg sm:text-xl text-slate-900">Check back soon for updates!</p>

                <button
                    onClick={closeTab}
                    className="mt-4 bg-amber-500 text-slate-50 px-4 py-2 rounded-md hover:bg-amber-600 transition-colors duration-200"
                >
                    Close tab
                </button>
            </div>


        </div>
    )
}