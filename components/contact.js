import { useState } from 'react'

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
        <main>
            <form onSubmit={handleSubmit} class="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-slate-50 ">
                <h1 class="text-2xl font-bold">Get in Touch!</h1>
                <p>Let me know how I can help you with your latest project.</p>

                <label htmlFor="fullname" class="text-gray-500 font-light mt-8">Full name<span class="text-red-500">*</span></label>
                <input type="text" name="fullname" value={fullname} onChange={(e) => {setFullname(e.target.value)}} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
                {errors?.fullname && (<p className='text-red-500'>Full name cannot be empty.</p>)}

                <label htmlFor="email" class="text-gray-500 font-light mt-4">E-mail<span class="text-red-500">*</span></label>
                <input type="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
                {errors?.email && (<p className='text-red-500'>Email cannot be empty.</p>)}

                <label htmlFor="subject" class="text-gray-500 font-light mt-4">Subject<span class="text-red-500">*</span></label>
                <input type="text" name="subject" value={subject} onChange={(e) => {setSubject(e.target.value)}} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
                {errors?.subject && (<p className='text-red-500'>Subject cannot be empty.</p>)}

                <label htmlFor="message" class="text-gray-500 font-light mt-4">Message<span class="text-red-500">*</span></label>
                <textarea name="message" value={message} onChange={(e) => {setMessage(e.target.value)}} class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
                {errors?.message && (<p className='text-red-500'>Message body cannot be empty.</p>)}

                <div class="flex flex-row items-center justify-start">
                    <button type='submit' class="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                        {buttonText}
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            class="text-cyan-500 ml-2" 
                            fill="currentColor" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
                <div className='text-left'>
                    {showSuccessMessage && (
                        <p className='text-green-500 font-semibold text-sm my-2'>
                            Thank you! Your message has been delivered.
                        </p>
                    )}
                    {showFailureMessage && (
                        <p className='text-red-500'>
                            Oops! Something went wrong, please try again.
                        </p>
                    )}
                </div>
            </form>
        </main>
    )
}