import { useEffect } from "react";

interface InstagramEmbedProps {
    url: string;
}

const InstagramEmbed = ({ url }: InstagramEmbedProps) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink={url}
            data-instgrm-version="14"
            style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3px",
                boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: "0",
                width: "99.375%",
            }}
        >
            <div style={{ padding: "16px" }}>
                <a
                    href={url}
                    style={{
                        background: "#FFFFFF",
                        lineHeight: "0",
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Add any additional styles or elements as needed */}
                </a>
            </div>
        </blockquote>
    );
};

export default InstagramEmbed;
