import type { Metadata } from "next";
import { Inter } from "next/font/google";
import style from "./layout.module.scss";
import Nav from "./components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Milchig",
    description: "Milchig coffee shop Hull",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={(inter.className, style.body)}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
