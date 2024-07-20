import styles from "./page.module.scss";

export default function Menu() {
    return (
        <main className={styles.main}>
            <article className={styles.article}>
                <section className={styles.openingTimes}>
                    <p>COFFEE</p>
                    <div className={styles.times}>
                        <p className={styles.weekday}>MONDAY - FRIDAY</p>
                        <p>09:00 - 15:00</p>
                    </div>
                    <div className={styles.times}>
                        <p className={styles.sat}>SATURDAY</p>
                        <p>09:00 - 15:00</p>
                    </div>
                    <div className={styles.times}>
                        <p className={styles.sun}>SUNDAY</p>
                        <p>CLOSED</p>
                    </div>
                </section>
                <section className={styles.lunchTimes}>
                    <p>LUNCHES & DINNERS</p>
                    <div className={styles.times}>
                        <p className={styles.weekday}>MONDAY - FRIDAY</p>
                        <p>10:00 - 14:00</p>
                    </div>
                    <div className={styles.times}>
                        <p className={styles.sat}>SATURDAY</p>
                        <p>10:00 - 14:00</p>
                    </div>
                    <div className={styles.times}>
                        <p className={styles.sun}>SUNDAY</p>
                        <p>CLOSED</p>
                    </div>
                </section>
            </article>
        </main>
    );
}
