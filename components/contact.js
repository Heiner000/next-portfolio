import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'


export default function Contact() {
    // contact form field states
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    // form validation state
    const [errors, setErrors] = useState({})

    // setting button text on form submission
    const [buttonText, setButtonText] = useState('Send')

    // setting success or failure message states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showFailureMessage, setShowFailureMessage] = useState(false)

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true
            isValid = false
        }
        if (email.length <= 0) {
            tempErrors["email"] = true
            isValid = false
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true
            isValid = false
        }
        if (message.length <= 0) {
            tempErrors["message"] = true
            isValid = false
        }

        setErrors({ ...tempErrors })
        console.log("errors: ", errors)
        return isValid
    }

    // Handling form submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        let isValidForm = handleValidation()

        if (isValidForm) {
            setButtonText("Sending")
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
            })

            const { error } = await res.json()
            if (error) {
                console.log(error)
                setShowSuccessMessage(false)
                setShowFailureMessage(true)
                setButtonText("Send")

                // Reset form fields
                setFullname("")
                setEmail("")
                setMessage("")
                setSubject("")
                return
            }
            setShowSuccessMessage(true)
            setShowFailureMessage(false)
            setButtonText("Send")
            // Reset form fields
            setFullname("")
            setEmail("")
            setMessage("")
            setSubject("")
        }
        console.log(fullname, email, subject, message)
    }

    return (
        <main id="contact">
            <form onSubmit={handleSubmit} className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-slate-50 ">
                <h1 className="text-2xl font-bold text-slate-900">Get in Touch!</h1>
                <p className='text-slate-950'>Let me know how I can help you with your latest project.</p>

                <label htmlFor="fullname" className="text-slate-600 font-light mt-8">Full name<span className="text-red-600">*</span></label>
                <input type="text" name="fullname" value={fullname} onChange={(e) => { setFullname(e.target.value) }} className="bg-slate-100 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-500 font-light text-slate-600" />
                {errors?.fullname && (<p className='text-red-600'>Full name cannot be empty.</p>)}

                <label htmlFor="email" className="text-slate-600 font-light mt-4">E-mail<span className="text-red-600">*</span></label>
                <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="bg-slate-100 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-500 font-light text-slate-600" />
                {errors?.email && (<p className='text-red-600'>Email cannot be empty.</p>)}

                <label htmlFor="subject" className="text-slate-600 font-light mt-4">Subject<span className="text-red-600">*</span></label>
                <input type="text" name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} className="bg-slate-100 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-500 font-light text-slate-600" />
                {errors?.subject && (<p className='text-red-600'>Subject cannot be empty.</p>)}

                <label htmlFor="message" className="text-slate-600 font-light mt-4">Message<span className="text-red-600">*</span></label>
                <textarea name="message" value={message} onChange={(e) => { setMessage(e.target.value) }} className="bg-slate-100 border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-amber-500 font-light text-slate-600"></textarea>
                {errors?.message && (<p className='text-red-600'>Message body cannot be empty.</p>)}

                <div className="flex flex-row items-center justify-start">
                    <button type='submit' className="px-10 mt-8 py-2 bg-amber-500 text-slate-50 font-light rounded-md text-lg flex flex-row items-center hover:bg-amber-600 transition-colors duration-200">
                        {buttonText}
                        <svg
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 ml-2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
                <div className='text-left'>
                    {showSuccessMessage && (
                        <p className='text-emerald-600 font-semibold text-sm my-2'>
                            Thank you! Your message has been delivered.
                        </p>
                    )}
                    {showFailureMessage && (
                        <p className='text-red-600'>
                            Oops! Something went wrong, please try again.
                        </p>
                    )}
                </div>
            </form>
        </main>
    )
}