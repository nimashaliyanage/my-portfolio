import React from 'react'
import style from './Contact.module.css'
import { getImgUrl } from '../../utils'
const Contact = () => {
    return (
        <footer id='contact' className={style.container}>
            <div className={style.text}>
                <p>Contact Me</p>
                <h2>Nimasha Liyanage</h2>

            </div>
            <ul className={style.links}>
                <li className={style.link}>
                    <img src={getImgUrl("contact/linkedin.png")} alt="linkedin" />
                    <a href="https://www.linkedin.com/in/nimasha-liyanage-736525243/">Nimasha Liyanage</a>
                </li>
                <li className={style.link}>
                    <img src={getImgUrl("contact/email.png")} alt="email" />
                    <a href="mailto:nimashaliyanage114@gmail.com">nimashaliyanage114@gmail.com</a>
                </li>
                <li className={style.link}>
                    <img src={getImgUrl("contact/github.png")} alt="github" />
                    <a href="https://github.com/nimashaliyanage">Nimasha Liyanage</a>
                </li>
            </ul>
        </footer>
    )
}
export default Contact
