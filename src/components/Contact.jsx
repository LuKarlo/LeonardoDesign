export default function Contact() {
    return (
        <section className="contact" id="contatti">
            <div className="section-heading">
                <span className="eyebrow">Contatti</span>
                <h2>Parliamo del tuo prossimo progetto</h2>
                <p>
                    Raccontaci cosa vuoi comunicare: prepareremo una proposta
                    su misura per la tua azienda.
                </p>
            </div>
            <div className="contact-grid">
                <div className="contact-details">
                    <div>
                        <span className="label">Sede</span>
                        <p>Via delle Insegne 12, 20100 Milano</p>
                    </div>
                    <div>
                        <span className="label">Telefono</span>
                        <p>+39 02 1234 5678</p>
                    </div>
                    <div>
                        <span className="label">Email</span>
                        <p>info@leonardodesign.it</p>
                    </div>
                </div>
                <form className="contact-form">
                    <label>
                        Nome e cognome
                        <input type="text" placeholder="Il tuo nome" />
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="nome@email.it" />
                    </label>
                    <label>
                        Messaggio
                        <textarea rows="4" placeholder="Come possiamo aiutarti?" />
                    </label>
                    <button type="button">Richiedi informazioni</button>
                </form>
            </div>
        </section>
    );
}
