import React from 'react'
import { getImgUrl } from '../../utils'
import style from './ProjectCard.module.css'

export const ProjectCard = ({ project: { title, ImageSrc, description, skills, source }
}) => {
    return (
        <div className={style.container}>
            <img src={getImgUrl(ImageSrc)}
                alt={`Image of ${title}`}
                className={style.image} />
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
            <ul className={style.skills}>
                {
                    skills.map((skill, id) => {
                        return (
                            <li key={id} className={style.skill}>
                                {skill}
                            </li>
                        );
                    })
                }
            </ul>
            <div className={style.links}>
                <a href={source} className={style.link}>Source</a>
            </div>
        </div>
    )
}

export default ProjectCard
