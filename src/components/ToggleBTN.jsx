import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

export default function ToggleMode() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const html = document.documentElement;
        const saved = localStorage.getItem("theme");
        const current = saved || html.getAttribute("data-theme") || "light";

        setTheme(current);
        html.setAttribute("data-theme", current);
    }, []);

    const toggleModeDocument = () => {
        setTheme(prev => {
            const newTheme = prev === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);

            return newTheme;
        });
    };

    const pathMooon =
        "M127 89.5C127 110.211 110.211 127 89.5 127C68.7893 127 52 110.211 52 89.5C52 68.7893 68.7893 52 89.5 52C67 75 94 110.5 127 89.5Z";

    const pathSun =
        "M127 89.5C127 110.211 110.211 127 89.5 127C68.7893 127 52 110.211 52 89.5C52 68.7893 68.7893 52 89.5 52C110.211 52 127 68.7893 127 89.5Z";

    return (
        <m.svg
            className={theme === "dark" ? "smallerToggle" : ""}
            onClick={toggleModeDocument}
            viewBox="0 0 179 179"
        >
            <m.path
                // Aggiungiamo 'd' anche qui per evitare l'errore undefined al caricamento
                initial={{
                    fillOpacity: 0,
                    strokeOpacity: 0,
                    d: theme === "light" ? pathMooon : pathSun
                }}
                animate={
                    theme === "light"
                        ? {
                            d: pathMooon,
                            scale: 1.5,
                            fillOpacity: 1,
                            strokeOpacity: 1,
                            fill: "currentColor",
                            stroke: "currentColor"
                        }
                        : {
                            d: pathSun,
                            scale: 1, // È bene resettare anche lo scale qui
                            fillOpacity: 1,
                            strokeOpacity: 1,
                            fill: "currentColor",
                            stroke: "currentColor"
                        }
                }
                transition={{ duration: 0.3 }}
            />

            <m.g
                fill="currentColor"
                animate={
                    theme === "light"
                        ? { opacity: 0, scale: 0 }
                        : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }
                }

                initial={{ opacity: 0, scale: 0 }}
            >
                <rect x="81" width="18" height="36" rx="9" />
                <rect x="81" y="143" width="18" height="36" rx="9" />
                <rect x="143" y="99" width="18" height="36" rx="9" transform="rotate(-90 143 99)" />
                <rect y="99" width="18" height="36" rx="9" transform="rotate(-90 0 99)" />
                <rect x="14" y="26.7279" width="18" height="36" rx="9" transform="rotate(-45 14 26.7279)" />
                <rect x="152.456" y="14" width="18" height="36" rx="9" transform="rotate(45 152.456 14)" />
                <rect x="39.4558" y="127" width="18" height="36" rx="9" transform="rotate(45 39.4558 127)" />
                <rect x="127" y="139.728" width="18" height="36" rx="9" transform="rotate(-45 127 139.728)" />
            </m.g>
        </m.svg>
    );
}