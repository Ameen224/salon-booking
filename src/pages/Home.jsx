// src/pages/Home
import salons from "../data/salons";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <h1 className="page-title">Premium Salons in Kozhikode</h1>
            <p style={{ textAlign: "center", marginBottom: "2rem", color: "#475569" }}>
                Discover the best beauty and grooming services in the City of Spices
            </p>

            <div className="salon-grid">
                {salons.map((salon) => (
                    <div key={salon.id} className="salon-card">
                        <img src={salon.image} alt={salon.name} className="salon-image" />
                        
                        <div className="salon-content">
                            <h2 className="salon-name">{salon.name}</h2>
                            <p className="salon-location">
                                <i className="fas fa-map-marker-alt"></i> {salon.location}
                            </p>
                            <div className="salon-rating">
                                <i className="fas fa-star"></i> {salon.rating}
                            </div>

                            <div className="salon-services">
                                {salon.services.slice(0, 3).map((service, index) => (
                                    <span key={index} className="service-tag">
                                        {service.name}
                                    </span>
                                ))}
                            </div>

                            <Link to={`/salon/${salon.id}`} className="btn">
                                <i className="fas fa-calendar-check"></i> Book Appointment
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
