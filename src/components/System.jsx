import { motion } from "framer-motion"; 
import image1 from "../assets/image.png";
import image2 from "../assets/login.png";

const projectsData = [
    {
        image: image2,
        title: "LOGIN PAGE",
        description: "This login page allows users to simply create an account with their valid email address in order to utilize the calendar. Users can also change their password if they forget it, and if they do not already have an account, they can easily create one.", 
        technologies: ["Dart", "Flutter", "Firebase"],
    },
    {
        image: image1,
        title: "HOME PAGE",
        description: "The calendar is presented on the home page. The user can list their tasks for certain dates in the calendar itself. The user can also input things like pdfs and images. The user can also modify the month in the calendar and enter information for a certain day, even if it is one month in advance.",
        technologies: ["Dart", "Flutter", "Firebase"],
    },
]

const ScrollReveal = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                <img src={project.image} alt="" className="w-full md:w-[300px] sm:max-w-[250px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105"/>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <div className=" text-violet-950 text-4xl font-bold">{project.title}</div>
                        <p className=" text-lg font-semibold text-black">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {project.technologies?.map((tech, index) => (
                            <span key={index} className="rounded-lg bg-black font-bold text-white px-2 py-1">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

const System = () => {
    return (
        <section id="system" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            <ScrollReveal>
                <h1 className="text-4xl text-violet-950 bg-clip-text text-transparent md:text-6xl font-bold">About Calendar App</h1>
            </ScrollReveal>
            <div className="flex w-full max-w-[1000px] flex-col gap-16 bg-gradient-to-r from-violet-950 to-violet-700 bg-clip-text text-transparent">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default System;