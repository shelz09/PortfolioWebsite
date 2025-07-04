import { ArrowRight, ExternalLink, Github } from "lucide-react";


export const ProjectSection = () => {
    const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
    return (
        <section id="Projects" className="py-24 px-4 position-relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured
                    <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at necessitatibus libero. facilis corrupti. Provident sed at soluta cumque architecto!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project)=>(
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-400 hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-warp gap-2 mb-4">
                                    {project.tags.map((tags, index)=>(
                                        <span key = {`${project.id} - ${index}`} className="px-2 py-1 border text-xsm font-medium bg-primary/20 text-seconadry-foreground rounded-full">
                                            {tags}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quos velit quia, nesci
                                </p>
                                <div className="flex justify-betweenitems-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"><ExternalLink size={20}/></a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank"><Github size={20}/></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={16}/></a>
                </div>
            </div>

        </section>
    )
}