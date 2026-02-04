import { useState } from "react";
import ToggleMode from "./ToggleBTN";


export default function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header>
            <div id="blur"></div>
            <nav>
                
                <div className="logo">
                    <img src="logo.webp" alt="Leonardo Design" />
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#chi-siamo">Chi siamo</a>
                        </li>
                        <li>
                            <a href="#servizi">Produzione</a>
                        </li>
                        <li>
                            <a href="#progetti">Progetti</a>
                        </li>
                        <li>
                            <a href="#contatti" className="accent">Contatti</a>
                        </li>
                    </ul>
                </div>
                <div className="ham">
                    <ToggleMode />
                </div>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-label="Apri menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </nav>
            <div className={`menu-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu}></div>
            <aside className={`sidebar ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
                <div className="sidebar-header">
                    <span>Menu</span>
                    <button className="close-btn" type="button" aria-label="Chiudi menu" onClick={closeMenu}>
                        ×
                    </button>
                </div>
                <div className="sidebar-links">
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#chi-siamo" onClick={closeMenu}>Chi siamo</a>
                    <a href="#servizi" onClick={closeMenu}>Produzione</a>
                    <a href="#progetti" onClick={closeMenu}>Progetti</a>
                    <a href="#contatti" onClick={closeMenu}>Contatti</a>
                </div>
                <div className="sidebar-footer">
                    <span>Modalità</span>
                    <ToggleMode />
                </div>
            </aside>
        </header>
    );
}
