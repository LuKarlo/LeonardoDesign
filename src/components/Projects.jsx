const projects = [
    {
        title: "Showroom e insegne",
        tag: "Retail",
        description: "Rinnovo completo di facciate, totem e illuminazione.",
    },
    {
        title: "Eventi e fiere",
        tag: "Temporary",
        description: "Allestimenti modulari con materiali leggeri e riutilizzabili.",
    },
    {
        title: "Flotte aziendali",
        tag: "Branding",
        description: "Wrapping coordinato per veicoli commerciali e mezzi speciali.",
    },
];

export default function Projects() {
    return (
        <section className="projects" id="progetti">
            <div className="section-heading">
                <span className="eyebrow">Progetti recenti</span>
                <h2>Immagini che raccontano il tuo brand</h2>
                <p>
                    Ogni progetto \u00e8 pensato per comunicare con chiarezza e
                    distinguersi nel mercato.
                </p>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <span className="chip">{project.tag}</span>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
