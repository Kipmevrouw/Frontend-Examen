import "./NavbarFilter.css";

const NavbarFilter = () => {
return (
        <section className="dashboard__wrapper">
            <nav className="dashboard__nav">
                <ul className="dashboard__ul">
                    <li  className="dashboard__li">
                        <a href="/vuur" className="dashboard__link">Vuur</a>
                        <a href="/water" className="dashboard__link">Water</a>
                        <a href="/gras" className="dashboard__link">Gras</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default NavbarFilter;