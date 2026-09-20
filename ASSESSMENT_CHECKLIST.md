# Final assessment checklist

## 1. UX/UI design and implementation

- Existing Little Lemon green/yellow visual identity retained
- Clear Home → Booking → Confirmation journey
- Consistent buttons, cards, spacing and typography

## 2. Accessibility

- Semantic `header`, `nav`, `main`, `section`, `article`, `aside` and `footer` landmarks
- Skip link and visible keyboard focus
- Form labels linked to inputs
- `aria-invalid`, `aria-describedby` and announced field errors
- Mobile menu exposes its expanded state

## 3. Unit tests

- Available-time logic test
- Reservation validation test
- Customer validation test
- Booking form interaction/error test

Run with `npm test`.

## 4. Functional booking form and validation

- Date, time, guests and occasion step
- Customer contact details step
- Past dates and invalid values rejected
- Confirmation screen displays the completed reservation

## 5. Semantic HTML and responsive design

- Responsive layouts at desktop, tablet and mobile widths
- Mobile navigation and single-column booking form
- Form controls remain large enough for touch input

## 6. Git repository

- Project is ready to initialize and push to GitHub
- `node_modules` and production output are ignored

## 7. Code quality

- Reusable components for navigation, footer and menu cards
- Booking helpers and validation separated from page presentation
- Descriptive component and function names

## 8. Edge cases and error messages

- Empty fields
- Past reservation date
- Guest count outside 1–10
- Invalid email and phone number
- Direct confirmation-page access returns to booking

## 9. Documentation

- README includes features, setup, tests, build, structure and accessibility notes
