import React from 'react'
import style from './Projects.module.css'
import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'
const Projects = () => {
    return (
        <section className={style.container} id='projects'>
            <h2 className={style.title}>PROJECTS</h2>
            <div className={style.projects}>
                {
                    projects.map((project, id) => {
                        return <ProjectCard key={id} project={project} />;
                    })
                }
            </div>
        </section>
    )
}

export default Projects
