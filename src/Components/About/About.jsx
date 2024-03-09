import React from 'react'
import style from './About.module.css'
import { getImgUrl } from '../../utils'

const About = () => {
  return (
    <section className={style.container} id="about">
      <h2 className={style.title}>ABOUT</h2>

      <div className={style.content}>

        <ul className={style.aboutItems}>
          <li className={style.aboutItem}>
            <img src={getImgUrl("about/backend.png")} alt="backend" />
            <div className={style.aboutItemTxt}>
              <h2>Frontend Developer</h2>
              <p>I am Frontend Developer creates websites and applications using
                web languages such as HTML, CSS, and JavaScript with responsive.</p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={getImgUrl("about/frontend.png")} alt="frontend" />
            <div className={style.aboutItemTxt}>
              <h2>UI/UX Designer</h2>
              <p>As a UX/UI Designer, I bring a distinctive advantage stemming from my
                foundation in Psychology. </p>
            </div>
          </li>
          <li className={style.aboutItem}>
            <img src={getImgUrl("about/design.png")} alt="designer" />
            <div className={style.aboutItemTxt}>
              <h2>Graphic Designer</h2>
              <p>As a Graphic Designer proficient in Adobe Photoshop and Illustrator,
                I leverage my expertise to create visually captivating designs that resonate with audiences.
              </p>
            </div>
          </li>
        </ul>
        <img src={getImgUrl("about/aboutImg.png")} alt="about photo"
          className={style.aboutImg} />
      </div>
    </section>
  )
}

export default About
