const TIME_OPTIONS = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];

export function getTodayString() {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  return new Date(today.getTime() - offset * 60_000).toISOString().split('T')[0];
}

export function getAvailableTimes(date) {
  if (!date) return TIME_OPTIONS.slice(0, 6);
  const day = new Date(`${date}T12:00:00`).getDay();
  if (day === 5 || day === 6) return TIME_OPTIONS.slice(2);
  if (day === 0) return TIME_OPTIONS.filter((_, index) => index % 2 === 0);
  return TIME_OPTIONS.slice(0, 7);
}

export function validateReservation(values) {
  const errors = {};
  const today = getTodayString();
  if (!values.date) errors.date = 'Choose a reservation date.';
  else if (values.date < today) errors.date = 'Choose today or a future date.';
  if (!values.time) errors.time = 'Choose an available time.';
  if (!values.guests) errors.guests = 'Enter the number of guests.';
  else if (Number(values.guests) < 1 || Number(values.guests) > 10) errors.guests = 'Reservations can include 1 to 10 guests.';
  if (!values.occasion) errors.occasion = 'Choose an occasion.';
  return errors;
}

export function validateCustomer(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = 'Enter your first name.';
  if (!values.lastName.trim()) errors.lastName = 'Enter your last name.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!/^[+\d][\d\s()-]{7,}$/.test(values.phone)) errors.phone = 'Enter a valid phone number.';
  return errors;
}

export function formatBookingDate(date) {
  if (!date) return '';
  return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    .format(new Date(`${date}T12:00:00`));
}
