import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6 ">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary animate-fade-in-delay-1"> Padro</span>
                    <span className=" text-gradient opacity-0 animate-fade-in-delay-2"> Machado</span>
                </h1>
                <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam itaque libero doloremque aspernatur aut assumenda eaque, labore natus quisquam </p>
                <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">View My Work</a>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-0.5 flex flex-col items-center animate-bounce">
                <span className="text-sm textmuted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </div>

    </section>
}