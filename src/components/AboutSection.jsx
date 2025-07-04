
import { Briefcase, Code, User } from "lucide-react"



export const AboutSection = () => {
    return <section id="Aboutme" className="py-24 px-4 relative">
        <div className="conatainer mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-cener"> 
                About<span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                    <p className="text-muted-foreground">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        . Quibusdam dicta facere sit aspernatur consectetur possimus
                         corporis repellat eum excepturi, minus voluptatibus nesciunt qui
                    </p>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quas aliquid est repellat doloribus, architecto accusantium 
                        quis. Praesentium minima architecto quis error numquam officiis
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Web Development
                                </h4>
                                <p className="text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Voluptatum itaque ex dolor iust
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    UI/UX Design
                                </h4>
                                <p className="text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Voluptatum itaque ex dolor iust
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                         <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Project Management
                                </h4>
                                <p className="text-muted-foreground">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Voluptatum itaque ex dolor iust
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}