import React from 'react'
import style from './Education.module.css'
import { getImgUrl } from '../../utils'

const Education = () => {
  return (
    <section className={style.container} id='education'>
      <h2 className={style.title}>EDUCATION</h2>
      <div className={style.content}>
        <ul className={style.educationItems}>
          <li className={style.educationItem}>
            <img src={getImgUrl("education/hat.png")} alt="graduationhat" />
            <div className={style.educationItemTxt}>
              <h2>Bachelor of Computer Science Undergraduate</h2>
              <h4>Eastern University, Sri Lanka</h4>
            </div>
          </li>
          <li className={style.educationItem}>
            <img src={getImgUrl("education/grad.png")} alt="graduation" />
            <div className={style.educationItemTxt}>
              <h2>Extension Course in English for Professionals</h2>
              <h4>University of Peradeniya</h4>
            </div>
          </li>
          <li className={style.educationItem}>
            <img src={getImgUrl("education/hat.png")} alt="graduationhat1" />
            <div className={style.educationItemTxt}>
              <h2>Diploma in Psychology and Counselling</h2>
              <h4>IMBS Green Campus</h4>
            </div>
          </li>
          <li className={style.educationItem}>
            <img src={getImgUrl("education/grad.png")} alt="graduation1" />
            <div className={style.educationItemTxt}>
              <h2>G.C.E Advanced Level Examination</h2>
              <h4>Physics: C, Chemistry: C, Com.Maths: S</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Education
