import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import BookingPage from './BookingPage';

describe('BookingPage', () => {
  it('shows meaningful errors when required fields are missing', async () => {
    const user = userEvent.setup();
    render(<MemoryRouter><BookingPage /></MemoryRouter>);
    await user.click(screen.getByRole('button', { name: /continue to your details/i }));
    expect(screen.getByText('Choose a reservation date.')).toBeInTheDocument();
    expect(screen.getByText('Choose an available time.')).toBeInTheDocument();
    expect(screen.getByText('Choose an occasion.')).toBeInTheDocument();
  });
});
