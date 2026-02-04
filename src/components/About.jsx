import { GoVerified } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

export default function About() {
    return (
        <>
            <div className="about">
                <svg className="bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="currentColor" fillOpacity="1" d="M0,288L26.7,288C53.3,288,107,288,160,261.3C213.3,235,267,181,320,170.7C373.3,160,427,192,480,181.3C533.3,171,587,117,640,80C693.3,43,747,21,800,48C853.3,75,907,149,960,176C1013.3,203,1067,181,1120,154.7C1173.3,128,1227,96,1280,85.3C1333.3,75,1387,85,1413,90.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
                <div className="content-about">
                    <h1>
                        Oltre mezzo secolo di <span className="accent subline">eccellenza visiva</span>.
                    </h1>
                    <div className="card-rows">
                        <div className="card">
                            <div className="img">
                                <GoVerified />
                            </div>
                            <div className="title">
                                Creativit&agrave;
                            </div>
                            <div className="subtext">
                                Progetti pensati per sorprendere e lasciare il segno.
                            </div>
                        </div>
                        <div className="card">
                            <div className="img">
                                <IoSettingsOutline />
                            </div>
                            <div className="title">
                                Personalizzazione
                            </div>
                            <div className="subtext">
                                Soluzioni su misura funzionali e coerenti.
                            </div>
                        </div>
                    </div>
                    <p>Siamo un'azienda di grafica e pubblicità con più di mezzo secolo di esperienza nel trasformare idee in comunicazione visiva efficace. Uniamo tradizione e innovazione per creare soluzioni moderne, riconoscibili e su misura per ogni cliente.</p>
                </div>
            </div>
        </>
    );
}