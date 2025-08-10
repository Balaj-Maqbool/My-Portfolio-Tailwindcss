import React, { useState } from 'react'
import SectionHeading from '../utils/SectionHeading'
import { Mail, Phone, MapPin, TextIcon, Send, Indent } from "lucide-react"
import useInView from '../hooks/IntersectionObserver.js'
import { useToast } from "../hooks/use-toast.js"
import ContactInfoCard from './ContactInfoCard.jsx'

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
                title: <span className='font-sans font-semibold gradient-text-pink'>Message Sent !</span>,
                description: <div className=''>Hi <span className='capitalize font-semibold font-sans  gradient-text-blue'>{name}</span>, <span className='hidden md:inline'>I have received Your Message,</span> I'll get back to you Soon</div>,
                className: "text-text border-2 border-primary bg-background"
            });


            setSendingMessage(false)
            // SetName("")
            // SetEmail("")
            // SetMessage("")
        }, 1000);

    }
    const { ref, isVisible } = useInView(.2)
    const { ref:infoRef, isVisible:infoIsVisible } = useInView(.1)

    return (
        <section  id='contact' className={` p-5 relative min-h-screen pt-20 z-50`} >
            <SectionHeading p1={"Get In"} p2={"Touch"} />

            <div ref={ref} className={`${isVisible ? "scale-100 opacity-100 " : "opacity-0 scale-30"} transition-all ease-in-out duration-700 w-full text-[0.82rem] sm:text-sm my-5 space-y-1 lg:text-[.9rem]  xl:text-[1rem] text-center gradient-text-grey`}>
                <div className='hidden md:flex flex-center '>
                    <p className='mr-1'>Looking for a <strong className='gradient-text-pink'>developer</strong> who blends creativity with <strong className='gradient-text-pink'>clean code</strong>? Let’s chat </p>
                    <span><TextIcon strokeWidth={2.5} className='text-accent' size={20} /></span>
                </div>
                <p className='hidden md:inline-block'>Let’s turn your next <strong className='gradient-text-pink'>idea</strong> into a <strong className='gradient-text-pink'>pixel-perfect</strong> experience.</p>

                <p className='md:hidden'>Open to <strong className='gradient-text-pink'>freelance</strong>, <strong className='gradient-text-pink' >collabs</strong>, or just good <strong className='gradient-text-pink'>tech</strong> talks.</p>
                <div className='md:hidden flex flex-center '>
                    <p className='mr-1'>Drop a message. <strong className='gradient-text-pink'>Let’s chat</strong></p>
                    <span><TextIcon className='text-accent' strokeWidth={3} size={16} /></span>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2  lg:p-5 lg:px-10  '>


                <div className=' flex flex-col flex-center space-y-3  py-5'>
                    <h3 className='text-text font-normal text-[1.1rem] md:text-xl'>Contact Information</h3>
                    <div className='flex flex-col sm:flex-row md:flex-col sm:justify-around  items-center md:space-y-3 min-w-full md:min-w-[90%] lg:ml-0  md:min-h-[90%]'>
                        {
                            contactInfo.map((info) => {
                                return (
                                    <ContactInfoCard key={info.id} info={info}/>
                                )
                            })
                        }
                    </div>
                </div>

                <div ref={infoRef} className={`${infoIsVisible?"scale-100 opacity-100":"scale-0 opacity-0"} transition-all ease-in duration-700 flex justify-start items-center lg:pb-5 md:pr-[15%] lg:pr-[35%]  `}>
                    <div className='flex flex-col items-center space-y-3  h-full w-full rounded-md py-5 lg:py-7 bg-project '>
                        <h3 className='text-text font-sans text-[1.15rem] md:text-[1.35rem]'>Send a Message</h3>
                        <form className='text-sm w-full h-full px-7 pt-3 flex flex-col space-y-6' onSubmit={handleSubmit}>
                            <input className='form-input' type="text" required placeholder='Your Name' value={name} onChange={(e) => { SetName(e.target.value) }} />
                            <input className='form-input' type="email" required placeholder='Email' value={email} onChange={(e) => { SetEmail(e.target.value) }} />
                            <textarea className='form-input py-5 md:py-6' placeholder='Your Message' required value={message} onChange={(e) => { SetMessage(e.target.value) }} ></textarea>
                            <button className={` ${sendingMessage ? "cosmic-button-secondary" : "cosmic-button-primary  gap-x-1"} `} type='submit' disabled={sendingMessage}> {sendingMessage ? "Sending Message ... " : <>Send Message<Send size={20} /></>}</button>
                        </form>
                    </div>
                </div>





            </div>
        </section>
    )
}

export default Contact
