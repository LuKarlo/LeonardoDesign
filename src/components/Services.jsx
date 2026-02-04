const services = [
    {
        title: "Insegne luminose",
        description: "Insegne LED e insegne a neon progettate per massima visibilit\u00e0 di giorno e di notte.",
    },
    {
        title: "Lettere scatolate",
        description: "Soluzioni personalizzate in diversi materiali e finiture, con illuminazione LED o neon.",
    },
    {
        title: "Grafica e stampa",
        description: "Grafica pubblicitaria, stampa digitale e biglietti da visita curati in ogni dettaglio.",
    },
    {
        title: "Segnaletica parcheggi",
        description: "Insegne \"P\" a ore chiare e resistenti, progettate per durare nel tempo.",
    },
    {
        title: "Inferiate in ferro",
        description: "Strutture robuste e su misura che uniscono sicurezza e design.",
    },
];

export default function Services() {
    return (
        <section className="services" id="servizi">
            <div className="section-heading">
                <span className="eyebrow">Produzione</span>
                <h2>Dall'idea alla produzione finale</h2>
                <p>
                    Progettiamo e realizziamo insegne luminose, lettere scatolate, grafica pubblicitaria e stampa
                    digitale, seguendo ogni fase del lavoro con cura artigianale: ascolto e consulenza, progettazione
                    grafica, scelta dei materiali, controllo qualità e installazione.
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
