import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className='.container mt-[76px] mx-[10%]'>
        <h2 className='.title text-[35px] font-bold tracking-[1.75px] uppercase'>Projects</h2>
        <div className='.projects mt-[37px] flex flex-wrap items-center justify-center gap-[15px] w-[100%] [&>:not(:nth-child(2))]:h-[100%] //[&:not(:nth-child(2))]:grow '>
            {
                projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />
                })
            }
        </div>
    </section>
  );
};
