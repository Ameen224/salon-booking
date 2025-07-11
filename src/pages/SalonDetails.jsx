// src/pages/SalonDetails


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import salons from "../data/salons";
import "react-datepicker/dist/react-datepicker.css";

const TIME_SLOTS = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

function SalonDetails() {
  const { id } = useParams();
  const salon = salons.find((s) => s.id === parseInt(id));
  const [service, setService] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);
  const [servicePrice, setServicePrice] = useState(0);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    if (!date || !salon) return;
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const formattedDate = date.toISOString().split("T")[0];
    const bookedSlots = bookings
      .filter((b) => b.salon === salon.name && b.date === formattedDate)
      .map((b) => b.time);
    const freeSlots = TIME_SLOTS.filter((slot) => !bookedSlots.includes(slot));
    setAvailableSlots(freeSlots);
    setTime("");
  }, [date, salon]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!service || !date || !time) return;
    const newBooking = {
      salon: salon.name,
      service,
      date: date.toISOString().split("T")[0],
      time,
    };
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    alert("🎉 Booking confirmed!");
    setService("");
    setDate(null);
    setTime("");
    setPaid(false);
  };

  if (!salon) {
    return (
      <div className="container">
        <h2>Salon not found</h2>
        <p>Please check the URL or go back to the home page.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="salon-details">
        <div className="detail-header">
          <div className="detail-image">
            <img src={salon.image} alt={salon.name} />
          </div>
          <div className="detail-info">
            <h1 className="detail-name">{salon.name}</h1>
            <p className="salon-location">
              <i className="fas fa-map-marker-alt"></i> {salon.location}
            </p>
            <div className="salon-rating">
              <i className="fas fa-star"></i> {salon.rating} (320 reviews)
            </div>

            <p style={{ margin: "1.5rem 0", lineHeight: "1.8" }}>
              Located in the heart of Kozhikode, {salon.name} offers premium beauty services
              with a touch of Kerala's traditional hospitality. Our skilled stylists bring
              years of experience to give you the perfect look.
            </p>

            <div style={{ margin: "1.5rem 0" }}>
              <h3 style={{ marginBottom: "0.8rem", color: "#0f172a" }}>Working Hours</h3>
              <p><strong>Monday-Saturday:</strong> 9:00 AM - 8:00 PM</p>
              <p><strong>Sunday:</strong> 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="booking-form">
          <h2 style={{ marginBottom: "1.5rem", color: "var(--primary)" }}>
            <i className="fas fa-calendar-alt"></i> Book Your Appointment
          </h2>

          <form onSubmit={handleBooking}>
            <div className="form-group">
              <label className="form-label">Select Service</label>
              <select
                className="form-control"
                value={service}
                onChange={(e) => {
                  const selected = salon.services.find(s => s.name === e.target.value);
                  setService(selected.name);
                  setServicePrice(selected.price);
                  setPaid(false);
                }}
                required
              >
                <option value="">Choose a service...</option>
                {salon.services.map((srv, i) => (
                  <option key={i} value={srv.name}>{srv.name} - ₹{srv.price}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Select Date</label>
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                minDate={new Date()}
                placeholderText="Choose a date"
                dateFormat="yyyy-MM-dd"
                className="form-control"
              />
            </div>

            {date && (
              <div className="form-group">
                <label className="form-label">Available Time Slots</label>
                <div className="time-slots">
                  {availableSlots.length > 0 ? (
                    availableSlots.map((slot, i) => (
                      <div
                        key={i}
                        onClick={() => setTime(slot)}
                        className={`time-slot ${time === slot ? "selected" : ""}`}
                      >
                        {slot}
                      </div>
                    ))
                  ) : (
                    <p style={{ color: "#ef4444" }}>No slots available for this date</p>
                  )}
                </div>
              </div>
            )}

            {servicePrice > 0 && time && (
              <div className="payment-box">
                <h3 className="payment-title">
                  <i className="fas fa-wallet"></i> Payment Summary
                </h3>
                <p>Service: <strong>{service}</strong></p>
                <p>Total Price: <strong>₹{servicePrice}</strong></p>
                <p>Advance Payment (30%): <strong>₹{Math.ceil(servicePrice * 0.3)}</strong></p>
                {!paid ? (
                  <button
                    type="button"
                    onClick={() => setPaid(true)}
                    className="btn btn-secondary"
                    style={{ marginTop: "1rem" }}
                  >
                    <i className="fas fa-credit-card"></i> Pay Advance Now
                  </button>
                ) : (
                  <p style={{ color: "var(--success)", fontWeight: "bold", marginTop: "1rem" }}>
                    <i className="fas fa-check-circle"></i> Payment Successful!
                  </p>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={!paid}
              className="btn"
              style={{ marginTop: "1.5rem" }}
            >
              <i className="fas fa-check"></i> Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SalonDetails;
;
