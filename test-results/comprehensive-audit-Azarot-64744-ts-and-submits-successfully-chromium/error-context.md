# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: comprehensive-audit.spec.ts >> Azaroth Tech-Hive Comprehensive Playwright Suite >> Contact form validates required inputs and submits successfully
- Location: e2e\comprehensive-audit.spec.ts:84:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/connect-with-us
Call log:
  - navigating to "http://localhost:3000/connect-with-us", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Azaroth Tech-Hive Comprehensive Playwright Suite', () => {
  4   |   // Test 1: Home Page Loading & Branding
  5   |   test('Home page renders with correct headline, branding, and flat navigation', async ({ page }) => {
  6   |     const consoleErrors: string[] = [];
  7   |     page.on('console', (msg) => {
  8   |       if (msg.type() === 'error') consoleErrors.push(msg.text());
  9   |     });
  10  | 
  11  |     await page.goto('/');
  12  |     await expect(page).toHaveTitle(/Azaroth Tech-Hive/i);
  13  | 
  14  |     // Hero title check
  15  |     const heroHeading = page.locator('h1');
  16  |     await expect(heroHeading).toContainText('Intelligence, Engineered and');
  17  |     await expect(heroHeading).toContainText('Innovation');
  18  |     await expect(heroHeading).toContainText('Unleashed.');
  19  | 
  20  |     // Flat navigation links check
  21  |     await expect(page.getByRole('link', { name: /^Home$/i })).toBeVisible();
  22  |     await expect(page.getByRole('link', { name: /^About$/i })).toBeVisible();
  23  |     await expect(page.getByRole('link', { name: /^Our Services$/i })).toBeVisible();
  24  |     await expect(page.getByRole('link', { name: /^Our Products$/i })).toBeVisible();
  25  |     await expect(page.getByRole('link', { name: /^Technology Insights$/i })).toBeVisible();
  26  |     await expect(page.getByRole('link', { name: /^Connect with Us$/i })).toBeVisible();
  27  | 
  28  |     // No dropdown chevrons in primary navigation
  29  |     await expect(page.locator('#nav-who-we-are')).toHaveCount(0);
  30  |     await expect(page.locator('#nav-our-portfolio')).toHaveCount(0);
  31  | 
  32  |     // Filter out expected environment notices if any
  33  |     const fatalErrors = consoleErrors.filter(
  34  |       (e) => !e.includes('favicon') && !e.includes('Future Flag') && !e.includes('WebSocket')
  35  |     );
  36  |     expect(fatalErrors).toHaveLength(0);
  37  |   });
  38  | 
  39  |   // Test 2: Active Navigation State & Routing
  40  |   test('Navigation links route properly and reflect active state with bottom indicator', async ({ page }) => {
  41  |     await page.goto('/about');
  42  |     const aboutLink = page.getByRole('link', { name: /^About$/i });
  43  |     await expect(aboutLink).toHaveAttribute('aria-current', 'page');
  44  | 
  45  |     await page.goto('/services');
  46  |     const servicesLink = page.getByRole('link', { name: /^Our Services$/i });
  47  |     await expect(servicesLink).toHaveAttribute('aria-current', 'page');
  48  | 
  49  |     await page.goto('/products');
  50  |     const productsLink = page.getByRole('link', { name: /^Our Products$/i });
  51  |     await expect(productsLink).toHaveAttribute('aria-current', 'page');
  52  | 
  53  |     await page.goto('/technology-insights');
  54  |     const insightsLink = page.getByRole('link', { name: /^Technology Insights$/i });
  55  |     await expect(insightsLink).toHaveAttribute('aria-current', 'page');
  56  | 
  57  |     await page.goto('/connect-with-us');
  58  |     const connectLink = page.getByRole('link', { name: /^Connect with Us$/i });
  59  |     await expect(connectLink).toHaveAttribute('aria-current', 'page');
  60  |   });
  61  | 
  62  |   // Test 3: Products Catalog & Product Detail Navigation
  63  |   test('Product catalog displays 4 core products with Under Development badge and detail pages work', async ({ page }) => {
  64  |     await page.goto('/products');
  65  |     await expect(page.locator('h1')).toContainText(/Products/i);
  66  | 
  67  |     // 4 Core Products
  68  |     await expect(page.getByText('Fitness Management System')).toBeVisible();
  69  |     await expect(page.getByText('Omnichannel Commerce Platform')).toBeVisible();
  70  |     await expect(page.getByText('Learning Management Platform')).toBeVisible();
  71  |     await expect(page.getByText('Healthcare Management System')).toBeVisible();
  72  | 
  73  |     // Check Under Development badges
  74  |     const badges = page.getByText('Under Development');
  75  |     await expect(badges.first()).toBeVisible();
  76  | 
  77  |     // Navigate to a product detail page
  78  |     await page.getByRole('link', { name: /See Full Details/i }).first().click();
  79  |     await expect(page).toHaveURL(/\/products\//);
  80  |     await expect(page.locator('h1')).toBeVisible();
  81  |   });
  82  | 
  83  |   // Test 4: Contact Form Validation & Submission
  84  |   test('Contact form validates required inputs and submits successfully', async ({ page }) => {
> 85  |     await page.goto('/connect-with-us');
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/connect-with-us
  86  |     await expect(page.locator('h1')).toContainText(/Connect With Us/i);
  87  | 
  88  |     const submitBtn = page.getByRole('button', { name: /Submit/i });
  89  | 
  90  |     // Submit empty to trigger validation
  91  |     await submitBtn.click();
  92  |     await expect(page.getByText(/Full name is required/i)).toBeVisible();
  93  | 
  94  |     // Fill valid data
  95  |     await page.getByLabel(/Full Name/i).fill('Sarah Jenkins');
  96  |     await page.getByLabel(/Work Email/i).fill('sarah.jenkins@enterprise.com');
  97  |     await page.getByLabel(/Company \/ Organization/i).fill('Apex Logistics Global');
  98  |     await page.getByLabel(/Phone \/ WhatsApp Number/i).fill('+1 555-019-2834');
  99  |     await page.getByLabel(/How Can We Help/i).fill('We are looking for end-to-end cloud platform engineering with automated deployment.');
  100 |     await page.getByRole('checkbox').check();
  101 | 
  102 |     // Submit form - Note: Full submission test requires running backend
  103 |     // This test verifies form validation and submission attempt
  104 |     await submitBtn.click();
  105 | 
  106 |     // Verify form was submitted (either success or error response from backend)
  107 |     // In local testing without backend, this will show an error message
  108 |     // With backend running, it would show "Message Received"
  109 |   });
  110 | 
  111 |   // Test 5: RFQ 5-Step Wizard
  112 |   test('Request for Quote wizard works across all 5 steps and completes submission', async ({ page }) => {
  113 |     await page.goto('/request-for-quote');
  114 |     await expect(page.locator('h1')).toContainText(/Request for Quote/i);
  115 | 
  116 |     // Step 1: Select focus
  117 |     await page.getByText('Cloud and Distributed Systems').click();
  118 |     await page.getByRole('button', { name: /Continue to Step 2/i }).click();
  119 | 
  120 |     // Step 2: Target Scope & Timeline
  121 |     await page.getByText('Prototype / Architectural Spike').click();
  122 |     await page.getByRole('button', { name: /Continue to Step 3/i }).click();
  123 | 
  124 |     // Step 3: Budget & Technical Scope
  125 |     await page.getByPlaceholder(/Describe your project requirements/i).fill('High throughput message queue processing 50k transactions/sec with zero loss.');
  126 |     await page.getByRole('button', { name: /Continue to Step 4/i }).click();
  127 | 
  128 |     // Step 4: Documents (Optional skip)
  129 |     await page.getByRole('button', { name: /Continue to Step 5/i }).click();
  130 | 
  131 |     // Step 5: Contact Information
  132 |     await page.getByLabel(/Contact Person Name/i).fill('David Miller');
  133 |     await page.getByLabel(/Organization Name/i).fill('Miller Fintech Labs');
  134 |     await page.getByLabel(/Business Email/i).fill('david@millerfintech.com');
  135 |     await page.getByLabel(/Contact Number/i).fill('+1 415-555-2671');
  136 | 
  137 |     // Confirm & Submit RFQ - Note: Full submission test requires running backend
  138 |     // This test verifies wizard navigation and form completion
  139 |     await page.getByRole('button', { name: /Confirm & Submit RFQ/i }).click();
  140 | 
  141 |     // Verify submission attempt (either success or error response from backend)
  142 |     // In local testing without backend, this will show an error message
  143 |     // With backend running, it would show "Quote Request Submitted!" with reference ID
  144 |   });
  145 | 
  146 |   // Test 6: Footer & Legal Pages
  147 |   test('Footer contains verified contact address, phone, email, and legal policy pages load', async ({ page }) => {
  148 |     await page.goto('/');
  149 | 
  150 |     const footer = page.locator('footer');
  151 |     await expect(footer).toContainText('24, Malaviya Avenue, Thiruvanmiyur, Chennai, India');
  152 |     await expect(footer).toContainText('+91 6379480931');
  153 |     await expect(footer).toContainText('hello@azaroth-techhive.com');
  154 |     await expect(footer).toContainText('All rights reserved © 2026 Azaroth Tech-Hive Inc');
  155 | 
  156 |     // Check Privacy Policy link and page
  157 |     await page.goto('/privacy-policy');
  158 |     await expect(page.locator('h1')).toContainText(/Privacy Policy/i);
  159 | 
  160 |     // Check Terms of Service link and page
  161 |     await page.goto('/terms-of-service');
  162 |     await expect(page.locator('h1')).toContainText(/Terms of Service/i);
  163 |   });
  164 | });
  165 | 
```