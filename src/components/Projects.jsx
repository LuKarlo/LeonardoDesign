import { useEffect, useState } from "react";

const projectCategories = [
    {
        name: "Parcheggi",
        projects: [
            {
                title: "Parcheggi",
                description: "Diamo al tuo parcheggio ottima visibilità.",
                image: "ParkingSmeraldo.jpg",
            },
            {
                title: "Parcheggi",
                description: "",
                image: "parcheggi2.jpg",
            },
            {
                title: "Parcheggi",
                description: "",
                image: "parcheggi3.jpg",
            },
            {
                title: "Parcheggi",
                description: "",
                image: "parcheggi4.jpg",
            },
            {
                title: "Parcheggi",
                description: "",
                image: "parcheggi5.jpg",
            },
        ],
    },
    {
        name: "Insegne",
        projects: [
            {
                title: "The Roll Station",
                description: "Insegna luminosa per street food dal forte impatto visivo.",
                image: "sito e carrello.jpg",
            },
            {
                title: "Belle Poke",
                description: "",
                image: "belle poke.jpg",
            },
            {
                title: "Insegne su misura",
                description: "Progetto su misura per valorizzare l'identità del locale.",
                image: "casa 20 specialita pugliesi.jpg",
            },
            {
                title: "V il Vizio",
                description: "",
                image: "V il .jpg",
            },
            {
                title: "Casa 20 Specialita Pugliesi",
                description: "",
                image: "casa 20 specialita pugliesi.jpg",
            },
        ],
    },
    {
        name: "Neon",
        projects: [
            {
                title: "Lavori a neon",
                description: "Dai quel ritocco per rendere più accogliente il tuo locale.",
                image: "utilizzaree per sito 7.jpg",
            },
            {
                title: "The Roll Station",
                description: "",
                image: "usala se vuoijpg.jpg",
            },
            {
                title: "Talk Healthy for me",
                description: "",
                image: "foto da utilizzare sia sito che da vendere.jpg",
            },
        ],
    }
];

const getCategoryId = (categoryName) =>
    `categoria-${categoryName.toLowerCase().replace(/\s+/g, "-")}`;

export default function Projects() {
    const [expandedCategories, setExpandedCategories] = useState({});
    const [visibleProjectCount, setVisibleProjectCount] = useState(() =>
        window.matchMedia("(min-width: 721px)").matches ? 3 : 1
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 721px)");
        const updateVisibleProjectCount = () => {
            setVisibleProjectCount(mediaQuery.matches ? 3 : 1);
        };

        updateVisibleProjectCount();
        mediaQuery.addEventListener("change", updateVisibleProjectCount);

        return () => {
            mediaQuery.removeEventListener("change", updateVisibleProjectCount);
        };
    }, []);

    useEffect(() => {
        const expandCategoryFromMenu = (event) => {
            const categoryName = event.detail?.categoryName;

            if (!categoryName) {
                return;
            }

            setExpandedCategories((current) => ({
                ...current,
                [categoryName]: true,
            }));
        };

        window.addEventListener("expand-project-category", expandCategoryFromMenu);

        return () => {
            window.removeEventListener("expand-project-category", expandCategoryFromMenu);
        };
    }, []);

    const toggleCategory = (categoryName) => {
        setExpandedCategories((current) => ({
            ...current,
            [categoryName]: !current[categoryName],
        }));
    };

    return (
        <section className="projects" id="progetti">
            <div className="section-heading">
                <span className="eyebrow">Lavori realizzati</span>
                <h2>Insegne e comunicazione visiva che lasciano il segno</h2>
                <p>
                    Dai locali food alla segnaletica urbana, realizziamo progetti
                    capaci di attirare l'attenzione e durare nel tempo.
                </p>
            </div>

            <div className="project-categories">
                {projectCategories.map((category) => {
                    const isExpanded = Boolean(expandedCategories[category.name]);
                    const hasExtraProjects = category.projects.length > visibleProjectCount;
                    const collapsedProjectCount = Math.min(
                        category.projects.length,
                        visibleProjectCount
                    );

                    return (
                        <div
                            className={`project-category project-count-${collapsedProjectCount} ${isExpanded ? "is-expanded" : ""}`}
                            data-project-category={category.name}
                            id={getCategoryId(category.name)}
                            key={category.name}
                        >
                            <div className="project-category-header">
                                <h3>{category.name}</h3>
                            </div>

                            <div className="projects-grid">
                                {category.projects.map((project) => (
                                    <article className="project-card" key={project.title}>
                                        <div className="project-media">
                                            <img src={project.image} alt={project.title} loading="lazy" />
                                        </div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </article>
                                ))}

                                {hasExtraProjects && (
                                    <div className="project-category-actions">
                                        <button
                                            className="category-toggle"
                                            type="button"
                                            onClick={() => toggleCategory(category.name)}
                                            aria-expanded={isExpanded}
                                            colspan={10}
                                        >
                                            {isExpanded ? "Mostra meno" : "Mostra tutti"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
