"use client";

import router from "next/router";
import { useState } from "react";
import { encode } from "../utils/encode";
import styles from "./page.module.scss";

interface IFormState {
    name: string;
    email: string;
    message: string;
}

interface IFormErrors {
    name?: string;
    email?: string;
    message?: string;
}

// async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     const [state, setState] = useState<IFormState>({
//         name: "",
//         email: "",
//         message: "",
//     });
//     const [errors, setErrors] = useState<IFormErrors>({});
//     const [submitError, setSubmitError] = useState("");

//     e.preventDefault();
//     const formErrors = validateFields();
//     if (Object.keys(formErrors).length > 0) {
//         setErrors(formErrors);
//         return;
//     }
//     try {
//         const res = await fetch("/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: encode({ "form-name": "contact", ...state }),
//         });

//         if (!res.ok) throw new Error("Failed to send message");

//         router.push("/success");
//     } catch (err) {
//         console.error(err);
//         setSubmitError("Failed to send message. Please try again later.");
//     }
// }

export default function ContactForm() {
    return (
        <main className={styles.main}>
            <h4>GET IN TOUCH</h4>
            <form
                className={styles.form}
                name="contact"
                action="/success"
                method="POST"
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.wrapper}>
                    <label htmlFor="yourname">Your Name:</label>
                    <input type="text" name="name" id="yourname" />
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="youremail">Your Email:</label>
                    <input type="email" name="email" id="youremail" />
                </div>
                <div className={styles.wrapper}>
                    <label htmlFor="yourmessage">Message:</label>
                    <textarea name="message" id="yourmessage"></textarea>
                </div>
                <div className={styles.wrapper}>
                    <button type="submit">Send</button>
                </div>
            </form>
        </main>
    );
}
