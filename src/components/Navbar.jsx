import ToggleMode from "./ToggleBTN";


export default function NavBar(){
    return (
        <header>
            <div id="blur"></div>
            <nav>
                
                <div className="logo">
                    <img src="logo.webp" alt="" />
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

            </nav>
        </header>
    );
}
