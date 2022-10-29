export function Header() {
    let header = (`
        <header>
            <nav>
                <div class="side1">
                    <div class="brand">
                        <span class="nav-toggler">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </span>
                        <h3>
                            <a href="./index.html">Habeeb</a>
                        </h3>
                    </div>
                    <ul class="nav-links">
                        <li>
                            <a href="#" class="home-link">Home</a>
                        </li>
                        <li>
                            <a href="#" class="about-link">About</a>
                        </li>
                        <li>
                            <a href="#" class="serv-link">Services</a>
                        </li>
                        <li>
                            <a href="#" class="port-link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#" class="con-link">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="side2">
                    <span>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <a href="tel:09166852821" class="link">+2349166852821</a>
                </div>
            </nav>
        </header>
    `)
    return header;
}