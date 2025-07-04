import { Github, Instagram, Linkedin, Mail, Map, MapPin, Phone, Send, Twitter } from "lucide-react"
import {cn} from '../lib/utils'
export const ContactSection = () => {
    const handlesubmit = (e) => {
        e.preventDefault();
        setTimeout(()=>{
            
        },1500)
    }
    return (
        <section className="py-24 px-4 position-relative bg-secondary/30" id="Contact">
            <div className="container mx-auto max-w-5xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4  text-center">Get In <span className="text-primary">Touch</span></h3>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore accusantium est! Soluta vero suscipit corrupti! Nostrum nulla facere volupta</p>
                <div className="grid grid-cols md:grid-cols-2 gap-12">
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a className="text-muted-foreground hover:text-primary" href="mailto:hello@gmail.com">
                                        hellow@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a className="text-muted-foreground hover:text-primary" href="tel:+15678459904">
                                        +1 (567) 845-9904
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <a className="text-muted-foreground hover:text-primary">
                                        Vancouver, BC, Canada
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h3 className="font-medium mb-4">Connect With Me</h3>
                            <div className="flex space-x-4 justify-center">
                                <a href="" className="hover:text-primary">
                                    <Linkedin/>
                                </a>
                                <a href="" className="hover:text-primary">
                                    <Twitter/>
                                </a>
                                <a href="" className="hover:text-primary">
                                    <Instagram/>
                                </a>
                                <a href="" className="hover:text-primary">
                                    <Github/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card card-hover p-8 rounded-xl shadow-xs ">
                        <h3 className="text-2xl font-semibold mb-6">Send A Mesaage</h3>
                        <form action="" className="space-y-6 ">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Padro Machado..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="emil" required className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="JohnDoe@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea type="text" id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Enter Here..."/>
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex justify-center items-center  gap-2")}>
                                Send Message<Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}