import React from "react";
import styles from "./page.module.scss";
export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={styles.mapContainer}>
                <iframe
                    className={styles.iframe}
                    title="google maps"
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d589.8880200242373!2d-0.3440583064052466!3d53.744051963155115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x4878bf83706f62e5%3A0x30948efe4f58c799!2sMilchig%2C%20The%20Hull%20Cheese%2C%20Hull!3m2!1d53.7437119!2d-0.3420243!4m5!1s0x4878be2f668a2757%3A0xfb87428627ebc616!2sHull%2C%20Paragon%20Station%2C%20Ferensway%2C%20Hull%20HU1%203QX!3m2!1d53.744490899999995!2d-0.3455698!5e0!3m2!1sen!2suk!4v1672244056692!5m2!1sen!2suk"
                    style={{ border: 0 }}
                    aria-hidden="false"
                ></iframe>
                <section>
                    <h1>Unit 12</h1>
                    <h1>Paragon Arcade</h1>
                    <h1>Hull HU1 3PQ</h1>
                </section>
            </div>
            <div>
                <h1>Unit 12</h1>
                <h1>Paragon Arcade</h1>
                <h1>Hull HU1 3PQ</h1>
                <h1>Unit 12</h1>
                <h1>Paragon Arcade</h1>
                <h1>Hull HU1 3PQ</h1>
                <h1>Unit 12</h1>
                <h1>Paragon Arcade</h1>
                <h1>Hull HU1 3PQ</h1>
            </div>
        </main>
    );
}
