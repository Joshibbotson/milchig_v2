import styles from "./page.module.scss";
import Image from "next/image";
import insideShop from "../../public/insideShop.webp";
export default function Home() {
    return (
        <main className={styles.main}>
            <Image
                className={styles.insideShopImg}
                src={insideShop}
                alt="Inside Milchig"
                priority
            />

            <div className={styles.info}>
                <p>Paragon Arcade</p>
                <p>Unit 12</p>
                <p>Hull HU1 3PQ</p>
            </div>
        </main>
    );
}
