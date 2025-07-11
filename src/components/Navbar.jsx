// src/components/Navbar

import { Link } from "react-router-dom";

function Navbar() {
            return (
                <header>
                    <div className="navbar">
                        <Link to="/" className="logo">
                            <i className="fas fa-scissors logo-icon"></i>
                            <div>
                                <div className="logo-text">SalonBook</div>
                                <div className="logo-subtext">KOZHIKODE • BEAUTY SERVICES</div>
                            </div>
                        </Link>
                        <div className="nav-links">
                            <Link to="/"><i className="fas fa-home"></i> Home</Link>
                            {/* <Link to="/admin"><i className="fas fa-user-cog"></i> Admin</Link> */}
                        </div>
                    </div>
                </header>
            );
        }

export default Navbar;
