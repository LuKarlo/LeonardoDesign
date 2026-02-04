const projects = [
    {
        title: "Parking Smeraldo",
        tag: "Segnaletica",
        description: "Insegna \"P\" a ore con ingresso ben visibile e resistente.",
        image: "ParkingSmeraldo.jpg",
    },
    {
        title: "The Roll Station",
        tag: "Food",
        description: "Insegna luminosa per street food dal forte impatto visivo.",
        image: "sito e carrello.jpg",
    },
    {
        title: "Pizza Lovers",
        tag: "Food",
        description: "Comunicazione visiva chiara e riconoscibile per il punto vendita.",
        image: "utilizzaree per sito 7.jpg",
    },
    {
        title: "Casa 20 Specialita Pugliesi",
        tag: "Ristorazione",
        description: "Progetto su misura per valorizzare l'identità del locale.",
        image: "casa 20 specialita pugliesi.jpg",
    },
    {
        title: "Belle-Poke",
        tag: "Food",
        description: "Insegna personalizzata per valorizzare il locale.",
        image: "belle poke.jpg",
    },
];

export default function Projects() {
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
            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-media">
                            <img src={`${project.image}`} alt={project.title} loading="lazy" />
                        </div>
                        <span className="chip">{project.tag}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
