import { describe, expect, it } from 'vitest';
import { getAvailableTimes, validateCustomer, validateReservation } from './bookingUtils';

describe('booking utilities', () => {
  it('returns available times for a selected date', () => {
    expect(getAvailableTimes('2030-06-15').length).toBeGreaterThan(0);
    expect(getAvailableTimes('2030-06-15')).toContain('18:00');
  });

  it('rejects an incomplete reservation', () => {
    const errors = validateReservation({ date: '', time: '', guests: '0', occasion: '' });
    expect(errors.date).toBeTruthy();
    expect(errors.time).toBeTruthy();
    expect(errors.guests).toBeTruthy();
    expect(errors.occasion).toBeTruthy();
  });

  it('accepts valid customer details', () => {
    expect(validateCustomer({ firstName: 'Sara', lastName: 'Lee', email: 'sara@example.com', phone: '+44 7700 900123' })).toEqual({});
  });
});
