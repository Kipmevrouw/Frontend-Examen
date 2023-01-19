import "./NavbarFilter.css";

const NavbarFilter = () => {
return (
            <nav className="dashboard__nav">
                <ul className="dashboard__ul">
                    <li  className="dashboard__li">
                        <a href="/vuur" className="dashboard__link">Vuur</a>
                        <a href="/water" className="dashboard__link">Water</a>
                        <a href="/gras" className="dashboard__link">Gras</a>
                    </li>
                </ul>
            </nav>
    );
}

export default NavbarFilter;