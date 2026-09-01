## 2024-02-12 - Missing loading feedback in Auth forms
**Learning:** Auth forms (Login, Register) use hardcoded buttons rather than the `PrimaryButton` component, and lack visual feedback or `aria-busy` states when processing is true, despite passing it to the disabled attribute.
**Action:** When working on form buttons, ensure `aria-busy` is utilized alongside the `disabled` state when processing async actions to give appropriate screen-reader and visual feedback.
