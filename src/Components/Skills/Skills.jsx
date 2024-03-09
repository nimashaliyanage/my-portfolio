import React from 'react'
import style from './Skills.module.css'
import skills from '../data/skills.json'
import { getImgUrl } from '../../utils'

const Skills = () => {
  return (
    <section className={style.container}  id='skills'>
        <h2 className={style.title}>SKILLS</h2>
        <div className={style.content}>
            <div className={style.skills}>
                {
                    skills.map((skill, id) =>{
                        return <div key={id} className={style.skill}>
                            <div className={style.skillImageContainer}>
                                <img src={getImgUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Skills
