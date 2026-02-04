import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

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
                    <div className="contact-list">
                        <div className="contact-item">
                            <FiPhone />
                            <a href="tel:3515374018">351-537-4018</a>
                        </div>
                        <div className="contact-item">
                            <FiPhone />
                            <a href="tel:3514559105">351-455-9105</a>
                        </div>
                        <div className="contact-item">
                            <FiMail />
                            <a href="mailto:info@leonardodesign.it">info@leonardodesign.it</a>
                        </div>
                    </div>
                    <div className="contact-icons">
                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="TikTok">
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
