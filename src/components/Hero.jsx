import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <section className="hero" id="home">
                <div className="hero-inner">
                    <div className="content-text">
                        <span className="date-hero">Leonardo Design</span>

                        <h1>
                            Da oltre 50 anni
                            <span>diamo forma alla tua immagine.</span>
                        </h1>
                        <p className="sub-text-hero">
                            Siamo un'azienda di grafica e pubblicità con più di mezzo secolo di esperienza nel trasformare
                            idee in comunicazione visiva efficace.
                        </p>
                        <p className="sub-text-hero">
                            Uniamo tradizione e innovazione per creare soluzioni moderne, riconoscibili e su misura per
                            ogni cliente.
                        </p>

                        <div className="cta-hero">
                            <a className="btn-primary" href="#servizi">
                                Scopri i nostri servizi
                            </a>
                            <a className="btn-ghost" href="#contatti">
                                Parla con noi
                            </a>
                        </div>

                        <div className="hero-social">
                            <a className="social instagram" href="https://www.instagram.com/infoleonardodesign?igsh=YjF2cWo5aXFwaW14" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a className="social facebook" href="https://www.facebook.com/share/1HDDGewe8h/?mibextid=wwXIfr" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a className="social tiktok" href="https://www.tiktok.com/@insegnedesign" aria-label="TikTok">
                                <FaTiktok />
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual" aria-hidden="true">
                        <div className="glass-card top">
                            <span>Insegne luminose</span>
                            <strong>Design & visibilità</strong>
                        </div>
                        <div className="glass-card bottom">
                            <span>Produzione completa</span>
                            <strong>Dall'idea al montaggio</strong>
                        </div>
                        <div className="orb orb-primary"></div>
                        <div className="orb orb-secondary"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
