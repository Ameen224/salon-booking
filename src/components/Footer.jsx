// src/components/Footer.jsx
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>SalonBook</h3>
                    <p>Your one-stop solution for booking beauty services in Kozhikode. We connect you with the best salons in the city.</p>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                    </div>

                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/"><i className="fas fa-chevron-right"></i> Home</Link></li>
                        <li><Link to="/admin"><i className="fas fa-chevron-right"></i> Admin Dashboard</Link></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i> About Us</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i> Contact</a></li>
                        <li><a href="#"><i className="fas fa-chevron-right"></i> Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <div className="footer-contact">
                        <p><i className="fas fa-map-marker-alt"></i> Mavoor Road, Kozhikode, Kerala</p>
                        <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                        <p><i className="fas fa-envelope"></i> info@salonbookkozhikode.com</p>
                        <p><i className="fas fa-clock"></i> Mon-Sat: 9:00 AM - 8:00 PM</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2023 SalonBook. All rights reserved.
                    <span className="kozhikode-badge">Proudly serving Kozhikode</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;