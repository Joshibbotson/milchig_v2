"use client";
import Link from "next/link";
import InstagramEmbed from "../components/instagram-embed/instagramEmbed";
import styles from "./page.module.scss";

export default function Menu() {
    return (
        <main className={styles.main}>
            <Link href={"https://www.instagram.com/thisismilchig"}>
                {" "}
                CLICK HERE TO SEE OUR MOST RECENT MENU
            </Link>
            <div>
                <InstagramEmbed url="https://www.instagram.com/reel/C4p1T7UNcwR/?utm_source=ig_embed&amp;utm_campaign=loading" />
            </div>
        </main>
    );
}
