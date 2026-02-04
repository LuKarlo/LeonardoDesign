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
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Chi siamo</a>
                        </li>
                        <li>
                            <a href="#">Produzione</a>
                        </li>
                        <li>
                            <a href="#">Progetti</a>
                        </li>
                        <li>
                            <a href="#" className="accent">Contatti</a>
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