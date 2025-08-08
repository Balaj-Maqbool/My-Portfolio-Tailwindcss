import React, { useState } from 'react'
import SectionHeading from '../utils/SectionHeading'
import { Mail, Phone, MapPin, TextIcon, Send } from "lucide-react"
import useInView from '../hooks/IntersectionObserver.js'
import { useToast } from "../hooks/use-toast.js"

const contactInfo = [
    {
        id: 1,
        title: "Email",
        value: "balajmaqbool54@gmail.com",
        link: "mailto:balajmaqbool54@gmail.com",
        icon: < Mail size={27} />
    },
    {
        id: 2,
        title: "Phone",
        value: "+92 325 2624261",
        link: "https://wa.me/923252624261",
        icon: < Phone size={27} />
    },
    {
        id: 3,
        title: "Address",
        value: "Khushab, Punjab, Pakistan",
        link: null, // optional, no link needed
        icon: < MapPin size={27} />
    },
];


const Contact = () => {


    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [message, SetMessage] = useState("")

    const [sendingMessage, setSendingMessage] = useState(false)
    const { toast } = useToast("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSendingMessage(true)

        setTimeout(() => {
            toast({
                title: "Message Sent !",
                description: <div className=''>Hi <span className='capitalize text-accent'>{name}</span>, <span className='hidden md:inline'>I have received Your Message,</span> I'll get back to you Soon</div>,
                className: "text-text border-accent bg-primary"
            });


            setSendingMessage(false)
            SetName("")
            SetEmail("")
            SetMessage("")
        }, 1000);

    }
    const { ref, isVisible } = useInView(null)

    return (
        <section ref={ref} id='contact' className={`${isVisible ? "scale-100 opacity-100 " : "opacity-0 scale-30"} scroll-mt-[280px] lg:scroll-mt-[200px] transition-all ease-in-out duration-1000 p-5 relative min-h-screen pt-20 z-50`} >
            <SectionHeading p1={"Get In"} p2={"Touch"} />

            <div className='w-full text-[0.7rem] sm:text-sm my-5 space-y-1 opacity-90 xl:text-[1rem] text-center text-text'>
                <div className='hidden md:flex flex-center '>
                    <p className='mr-1'>Looking for a developer who blends creativity with clean code? Let’s chat </p>
                    <span><TextIcon strokeWidth={2.5} color='oklch(57.7% 0.245 27.325)' size={20} /></span>
                </div>
                <p className='hidden md:inline-block'>Let’s turn your next idea into a pixel-perfect experience.</p>

                <p className='md:hidden'>Open to freelance, collabs, or just good tech talks.</p>
                <div className='md:hidden flex flex-center '>
                    <p className='mr-1'>Drop a message. Let’s chat</p>
                    <span><TextIcon color='oklch(57.7% 0.245 27.325)' strokeWidth={3} size={16} /></span>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2  lg:p-5 lg:px-10  '>


                <div className=' flex flex-col flex-center space-y-3  py-5'>
                    <h3 className='text-text font-normal text-[1.1rem] md:text-xl'>Contact Information</h3>
                    <div className='flex flex-col sm:flex-row md:flex-col sm:justify-around  items-center md:space-y-3 min-w-full md:min-w-[90%] lg:ml-0  md:min-h-[90%]'>
                        {
                            contactInfo.map((info) => {
                                return (
                                    <a key={info.id} href={info.link} target='blank' rel='noopener noreferrer' className=' z-50 flex justify-start sm:flex-col md:flex-row sm:h-full  w-[90%] space-x-3 sm:space-x-0  md:w-[90%] lg:w-[65%]  p-2'>
                                        <div className=' h-6 w-6 sm:w-5 sm:h-5 md:w-auto md:h-auto flex mr-5 flex-center md:p-4  sm:mr-2 md:mr-5 text-main hover:text-main/70'>
                                            {info.icon}
                                        </div>
                                        <div className='md:min-w-[70%] flex flex-col justify-center  items-start'>
                                            <h3 className='sm:hidden text-[.9rem] md:inline-block'>{info.title}</h3>
                                            <p className='font-thin text-[.73rem] md:text-sm text-text/50 hover:scale-[1.05] hover:text-accent/70 transition-all ease-in-out duration-200'>{info.value}</p>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='flex justify-start items-center lg:pb-5 md:pr-[15%] lg:pr-[35%]  '>
                    <div className='flex flex-col items-center space-y-3  h-full w-full rounded-md py-5 lg:py-7 bg-blue-700/10 '>
                        <h3 className='text-text font-sans text-[1.15rem] md:text-[1.35rem]'>Send a Message</h3>
                        <form className='text-sm w-full h-full px-7 pt-3 flex flex-col space-y-6' onSubmit={handleSubmit}>
                            <input className='form-input' type="text" required placeholder='Your Name' value={name} onChange={(e) => { SetName(e.target.value) }} />
                            <input className='form-input' type="email" required placeholder='Email' value={email} onChange={(e) => { SetEmail(e.target.value) }} />
                            <textarea className='form-input py-4' placeholder='Your Message' required value={message} onChange={(e) => { SetMessage(e.target.value) }} ></textarea>
                            <button className={` ${sendingMessage ? "cosmic-button-secondary" : "cosmic-button-primary  gap-x-1"} `} type='submit' disabled={sendingMessage}> {sendingMessage ? "Sending Message ... " : <>Send Message<Send size={20} /></>}</button>
                        </form>
                    </div>
                </div>





            </div>
        </section>
    )
}

export default Contact
