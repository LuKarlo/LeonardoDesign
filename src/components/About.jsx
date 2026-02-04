import { GoVerified } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineLightBulb, HiOutlineShieldCheck } from "react-icons/hi";

export default function About() {
    return (
        <>
            <section className="about" id="chi-siamo">
                <div className="content-about">
                    <div className="about-grid">
                        <div className="about-copy">
                            <span className="eyebrow">Chi siamo</span>
                            <h1>
                                Insegne luminose e comunicazione visiva con{" "}
                                <span className="accent subline">più di mezzo secolo di esperienza</span>.
                            </h1>
                            <p>
                                Progettiamo e realizziamo insegne luminose, lettere scatolate, grafica pubblicitaria,
                                stampa digitale e biglietti da visita, seguendo ogni fase del lavoro: dall'idea
                                iniziale alla produzione finale.
                            </p>
                            <p>
                                Uniamo artigianalità e tecnologia: grazie all'esperienza come fabbri specializzati,
                                realizziamo strutture solide e su misura, capaci di durare nel tempo e valorizzare ogni
                                spazio. Utilizziamo tecnologie all'avanguardia e materiali di qualità per garantire
                                risultati duraturi e di forte impatto. Crediamo che un'immagine forte faccia la
                                differenza. Per questo lavoriamo ogni giorno con passione, precisione e creatività.
                                Il tuo brand, la nostra esperienza.
                            </p>
                            <div className="about-stats">
                                <div>
                                    <strong>Dal 1970</strong>
                                    <span>radicati sul territorio</span>
                                </div>
                                <div>
                                    <strong>Metodo completo</strong>
                                    <span>dal progetto all'installazione</span>
                                </div>
                            </div>
                        </div>

                        <div className="card-rows">
                            <div className="card">
                                <div className="img">
                                    <GoVerified />
                                </div>
                                <div className="title">Esperienza</div>
                                <div className="subtext">
                                    Oltre 50 anni di lavoro ci permettono di affrontare ogni sfida con competenza.
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <HiOutlineLightBulb />
                                </div>
                                <div className="title">Creatività e innovazione</div>
                                <div className="subtext">
                                    Ogni progetto è pensato per sorprendere, emozionare e lasciare il segno.
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <HiOutlineShieldCheck />
                                </div>
                                <div className="title">Affidabilità</div>
                                <div className="subtext">
                                    Rispetto dei tempi, attenzione ai dettagli e cura artigianale.
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <IoSettingsOutline />
                                </div>
                                <div className="title">Personalizzazione</div>
                                <div className="subtext">
                                    Soluzioni su misura, funzionali e coerenti con il tuo brand.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
