import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAvailableTimes, getTodayString, validateCustomer, validateReservation } from '../utils/bookingUtils';

const initialValues = {
  date: '', time: '', guests: '2', occasion: '', firstName: '', lastName: '', email: '', phone: '', requests: '',
};

function FieldError({ id, message }) {
  return message ? <span className="field-error" id={id} role="alert">{message}</span> : null;
}

export default function BookingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const availableTimes = useMemo(() => getAvailableTimes(values.date), [values.date]);

  const updateField = ({ target }) => {
    const { name, value } = target;
    setValues((current) => ({ ...current, [name]: value, ...(name === 'date' ? { time: '' } : {}) }));
    setErrors((current) => ({ ...current, [name]: undefined, ...(name === 'date' ? { time: undefined } : {}) }));
  };

  const continueBooking = (event) => {
    event.preventDefault();
    const nextErrors = validateReservation(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const submitBooking = (event) => {
    event.preventDefault();
    const nextErrors = validateCustomer(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) navigate('/confirmation', { state: { booking: values } });
  };

  const errorProps = (name) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <main id="main-content" className="booking-page">
      <div className="booking-banner">
        <div className="container booking-banner-inner">
          <div><p className="eyebrow">Little Lemon Chicago</p><h1>Reserve a table</h1><p>Complete two short steps. Your table will be held immediately.</p></div>
          <ol className="progress" aria-label="Booking progress">
            <li className={step >= 1 ? 'active' : ''}><span>1</span>Table</li>
            <li className={step >= 2 ? 'active' : ''}><span>2</span>Details</li>
            <li><span>3</span>Confirmed</li>
          </ol>
        </div>
      </div>

      <div className="container booking-layout">
        <section className="form-card" aria-labelledby="booking-form-title">
          {step === 1 ? (
            <form onSubmit={continueBooking} noValidate>
              <div className="form-heading"><p>Step 1 of 2</p><h2 id="booking-form-title">Choose your table</h2></div>
              <div className="form-grid">
                <div className="field-group"><label htmlFor="date">Date <span aria-hidden="true">*</span></label><input id="date" name="date" type="date" min={getTodayString()} value={values.date} onChange={updateField} required {...errorProps('date')} /><FieldError id="date-error" message={errors.date} /></div>
                <div className="field-group"><label htmlFor="time">Time <span aria-hidden="true">*</span></label><select id="time" name="time" value={values.time} onChange={updateField} required {...errorProps('time')}><option value="">Select a time</option>{availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}</select><FieldError id="time-error" message={errors.time} /></div>
                <div className="field-group"><label htmlFor="guests">Number of guests <span aria-hidden="true">*</span></label><input id="guests" name="guests" type="number" min="1" max="10" value={values.guests} onChange={updateField} required {...errorProps('guests')} /><FieldError id="guests-error" message={errors.guests} /></div>
                <div className="field-group"><label htmlFor="occasion">Occasion <span aria-hidden="true">*</span></label><select id="occasion" name="occasion" value={values.occasion} onChange={updateField} required {...errorProps('occasion')}><option value="">Select an occasion</option><option>Casual meal</option><option>Birthday</option><option>Anniversary</option><option>Business meal</option><option>Other</option></select><FieldError id="occasion-error" message={errors.occasion} /></div>
              </div>
              <p className="required-note"><span aria-hidden="true">*</span> Required field</p>
              <button className="button button-primary full-button" type="submit">Continue to your details</button>
            </form>
          ) : (
            <form onSubmit={submitBooking} noValidate>
              <div className="form-heading"><p>Step 2 of 2</p><h2 id="booking-form-title">Your contact details</h2><p>We will send your booking confirmation by email.</p></div>
              <div className="form-grid">
                <div className="field-group"><label htmlFor="firstName">First name <span aria-hidden="true">*</span></label><input id="firstName" name="firstName" autoComplete="given-name" value={values.firstName} onChange={updateField} required {...errorProps('firstName')} /><FieldError id="firstName-error" message={errors.firstName} /></div>
                <div className="field-group"><label htmlFor="lastName">Last name <span aria-hidden="true">*</span></label><input id="lastName" name="lastName" autoComplete="family-name" value={values.lastName} onChange={updateField} required {...errorProps('lastName')} /><FieldError id="lastName-error" message={errors.lastName} /></div>
                <div className="field-group"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={updateField} required {...errorProps('email')} /><FieldError id="email-error" message={errors.email} /></div>
                <div className="field-group"><label htmlFor="phone">Phone number <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={updateField} required {...errorProps('phone')} /><FieldError id="phone-error" message={errors.phone} /></div>
                <div className="field-group field-wide"><label htmlFor="requests">Special requests <span className="optional">Optional</span></label><textarea id="requests" name="requests" rows="4" maxLength="300" value={values.requests} onChange={updateField} /><span className="character-count">{values.requests.length}/300</span></div>
              </div>
              <div className="form-actions"><button className="button button-ghost" type="button" onClick={() => setStep(1)}>Back</button><button className="button button-primary" type="submit">Confirm reservation</button></div>
            </form>
          )}
        </section>

        <aside className="booking-summary" aria-labelledby="summary-title">
          <h2 id="summary-title">Your reservation</h2>
          {values.date ? <dl><div><dt>Date</dt><dd>{values.date}</dd></div><div><dt>Time</dt><dd>{values.time || 'Not selected'}</dd></div><div><dt>Guests</dt><dd>{values.guests}</dd></div><div><dt>Occasion</dt><dd>{values.occasion || 'Not selected'}</dd></div></dl> : <p>Choose a date and time to see your reservation details.</p>}
          <hr />
          <p><strong>Little Lemon</strong><br />123 Lemon Street, Chicago</p>
          <p className="summary-note">No payment is required to reserve.</p>
        </aside>
      </div>
    </main>
  );
}
