import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heroImg.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import gmailLight from '../../assets/gmail-light.png';
import gmailDark from '../../assets/gmail-dark.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';

export default function Hero() {

    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const gmailIcon = theme === 'light' ? gmailLight : gmailDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile img" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Emilio
                    <br />
                    Blanco
                </h1>
                <h2>
                    FullStack Developer
                </h2>
                <span>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=emilio7blanco@gmail.com&su=Consulta&body=Hola Emilio," target='_blank'>
                        <img src={gmailIcon} alt="Gmail Icon" />
                    </a>

                    <a href="http://github.com/" target='_blank'>
                        <img src={githubIcon} alt="Github Icon" />
                    </a>

                    <a href="http://linkedin.com/" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                Programador de diseño, desarrollo y mantenimiento de aplicacionessoftware. Manejo de lenguajes de programación Java, Python, JavaScript... 
                Excelente capacidad para resolver problemas, atención a los detalles y habilidades de gestión de tiempo para cumplir los plazos previstos, 
                así como una gran capacidad demostrada dedirección y coordinación de equipos. En lo personal, me considero una persona creativa, curiosa, 
                con ganas de aprender y mejorar y unapasionado de su trabajo.
                </p>
                <a href={CV} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    )
}
