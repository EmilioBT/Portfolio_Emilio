import styles from "./FooterStyles.module.css"
function Footer() {
    return (
        <section id="footer" className={styles.container}>
            <p>
                &copy; 2025 Emilio José Blanco Torres <br />
                all rights reserved.

            </p>
        </section>
    )
}

export default Footer