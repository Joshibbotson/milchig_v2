import styles from "./page.module.scss";
export default function Success() {
    return (
        <div className={styles.successMsg}>
            Email successfully sent, we&apos;ll be in touch!
        </div>
    );
}
