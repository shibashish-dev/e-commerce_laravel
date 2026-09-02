## 2024-02-12 - Missing loading feedback in Auth forms
**Learning:** Auth forms (Login, Register) use hardcoded buttons rather than the `PrimaryButton` component, and lack visual feedback or `aria-busy` states when processing is true, despite passing it to the disabled attribute.
**Action:** When working on form buttons, ensure `aria-busy` is utilized alongside the `disabled` state when processing async actions to give appropriate screen-reader and visual feedback.
## 2024-05-18 - Glassmorphism UI Transformation

**Learning:** When overhauling an existing application's design system to a modern glassmorphism aesthetic, consistency is crucial across all interconnected components. Directly modifying test validations like User Factory structures or profile updates based strictly on the UI design changes might cause backend verification issues. Test suites should be adapted strictly when expected functionality is preserved but formatting changes slightly (e.g., verifying a database name attribute update without triggering an email confirmation reset block).

**Action:** Before and during complex UI transformations, define custom CSS utilities globally (e.g., `.glass`, `.glass-panel`) in `app.css` and use a unified `tailwind.config.js` with structured color palettes and blur/shadow tokens. Ensure responsive behavior by utilizing layout grid systems and breakpoints intentionally, especially ensuring sidebar visibility toggles gracefully for e-commerce filtering on mobile views.
