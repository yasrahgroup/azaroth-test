# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accessibility.spec.ts >> Accessibility Scans >> Homepage meets WCAG 2.2 AA standards
- Location: e2e\accessibility.spec.ts:5:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test.describe('Accessibility Scans', () => {
  5  |   test('Homepage meets WCAG 2.2 AA standards', async ({ page }) => {
> 6  |     await page.goto('/');
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  7  |     await page.waitForLoadState('networkidle');
  8  | 
  9  |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  10 | 
  11 |     // Filter out moderate/best-practice issues, only fail on critical/high
  12 |     const criticalViolations = accessibilityScanResults.violations.filter(
  13 |       v => v.impact === 'critical' || v.impact === 'serious'
  14 |     );
  15 | 
  16 |     if (criticalViolations.length > 0) {
  17 |       console.log('Critical accessibility violations:', JSON.stringify(criticalViolations, null, 2));
  18 |     }
  19 | 
  20 |     expect(criticalViolations).toEqual([]);
  21 |   });
  22 | 
  23 |   test('Products page meets WCAG 2.2 AA standards', async ({ page }) => {
  24 |     await page.goto('/products');
  25 |     await page.waitForLoadState('networkidle');
  26 | 
  27 |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  28 | 
  29 |     const criticalViolations = accessibilityScanResults.violations.filter(
  30 |       v => v.impact === 'critical' || v.impact === 'serious'
  31 |     );
  32 | 
  33 |     if (criticalViolations.length > 0) {
  34 |       console.log('Critical accessibility violations:', JSON.stringify(criticalViolations, null, 2));
  35 |     }
  36 | 
  37 |     expect(criticalViolations).toEqual([]);
  38 |   });
  39 | 
  40 |   test('Contact form page meets WCAG 2.2 AA standards', async ({ page }) => {
  41 |     await page.goto('/connect-with-us');
  42 |     await page.waitForLoadState('networkidle');
  43 | 
  44 |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  45 | 
  46 |     const criticalViolations = accessibilityScanResults.violations.filter(
  47 |       v => v.impact === 'critical' || v.impact === 'serious'
  48 |     );
  49 | 
  50 |     if (criticalViolations.length > 0) {
  51 |       console.log('Critical accessibility violations:', JSON.stringify(criticalViolations, null, 2));
  52 |     }
  53 | 
  54 |     expect(criticalViolations).toEqual([]);
  55 |   });
  56 | 
  57 |   test('RFQ wizard page meets WCAG 2.2 AA standards', async ({ page }) => {
  58 |     await page.goto('/request-for-quote');
  59 |     await page.waitForLoadState('networkidle');
  60 | 
  61 |     const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  62 | 
  63 |     const criticalViolations = accessibilityScanResults.violations.filter(
  64 |       v => v.impact === 'critical' || v.impact === 'serious'
  65 |     );
  66 | 
  67 |     if (criticalViolations.length > 0) {
  68 |       console.log('Critical accessibility violations:', JSON.stringify(criticalViolations, null, 2));
  69 |     }
  70 | 
  71 |     expect(criticalViolations).toEqual([]);
  72 |   });
  73 | });
  74 | 
```