import styles from "./page.module.scss";
import Image from "next/image";
import insideShop from "../../public/insideShop.webp";
export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.imgWrapper}>
                <Image
                    className={styles.insideShopImg}
                    src={insideShop}
                    alt="Inside Milchig"
                    priority
                />
            </div>
            <div className={styles.info}>
                <p>BAKERY & COFFEE SHOP</p>
                <p>Paragon Arcade</p>
                <p>Unit 12</p>
                <p>Hull HU1 3PQ</p>
            </div>
        </main>
    );
}
