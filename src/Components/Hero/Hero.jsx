import React from 'react'
import { getImgUrl } from '../../utils'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <section className={style.container}>
      <div className={style.topBlur} />
      <div className={style.bottomBlur} />
      <img src={getImgUrl("hero/hero.png")} alt="Hero-Image" className={style.heroImg} />
      <div className={style.content}>
        <h1 className={style.title}>Hello, I'm Nimasha</h1>
        <p className={style.description}>I am UI/UX designer with FrontEnd Development. Feel free to reach out if you'd like to learn more about my background, education or experiences.</p>
        <a href="mailto:nimashaliyanage114@gmail.com" className={style.contactbtn}>Contact Me</a>
      </div>
    </section>
  )
}

export default Hero
