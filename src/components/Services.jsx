const services = [
    {
        title: "Insegne luminose",
        description: "Progettiamo e realizziamo insegne LED ad alta visibilit\u00e0 per interni ed esterni.",
    },
    {
        title: "Allestimenti retail",
        description: "Vetrine, totem e pannelli coordinati per valorizzare ogni punto vendita.",
    },
    {
        title: "Wrapping e vetrofanie",
        description: "Pellicole tecniche, grafiche su misura e installazione professionale.",
    },
];

export default function Services() {
    return (
        <section className="services" id="servizi">
            <div className="section-heading">
                <span className="eyebrow">I nostri servizi</span>
                <h2>Soluzioni creative per ogni esigenza visiva</h2>
                <p>
                    Dalla consulenza al montaggio, seguiamo ogni fase per dare
                    coerenza e forza alla tua identit\u00e0.
                </p>
            </div>
            <div className="services-grid">
                {services.map((service) => (
                    <article className="service-card" key={service.title}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
