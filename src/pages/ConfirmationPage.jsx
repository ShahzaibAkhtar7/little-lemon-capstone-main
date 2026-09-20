import { Link, useLocation, Navigate } from 'react-router-dom';
import { formatBookingDate } from '../utils/bookingUtils';

export default function ConfirmationPage() {
  const { state } = useLocation();
  const booking = state?.booking;
  if (!booking) return <Navigate to="/booking" replace />;

  return (
    <main id="main-content" className="confirmation-page">
      <section className="confirmation-card" aria-labelledby="confirmation-title">
        <div className="success-icon" aria-hidden="true">✓</div>
        <p className="eyebrow dark">Booking confirmed</p>
        <h1 id="confirmation-title">Thank you, {booking.firstName}!</h1>
        <p className="confirmation-lead">Your table has been reserved. A confirmation has been prepared for <strong>{booking.email}</strong>.</p>
        <div className="confirmation-details">
          <h2>Reservation details</h2>
          <dl>
            <div><dt>Date</dt><dd>{formatBookingDate(booking.date)}</dd></div>
            <div><dt>Time</dt><dd>{booking.time}</dd></div>
            <div><dt>Guests</dt><dd>{booking.guests}</dd></div>
            <div><dt>Occasion</dt><dd>{booking.occasion}</dd></div>
          </dl>
        </div>
        <p>Please contact us if you need to change or cancel your reservation.</p>
        <Link className="button button-primary" to="/">Back to home</Link>
      </section>
    </main>
  );
}
