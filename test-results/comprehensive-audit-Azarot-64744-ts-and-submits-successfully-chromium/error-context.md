# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: comprehensive-audit.spec.ts >> Azaroth Tech-Hive Comprehensive Playwright Suite >> Contact form validates required inputs and submits successfully
- Location: e2e/comprehensive-audit.spec.ts:84:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel(/Company Name/i)

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link "Skip to main content" [ref=e4] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=e5]:
    - generic [ref=e6]:
      - link "Azaroth Tech-Hive Logo AZAROTH TECH-HIVE" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "Azaroth Tech-Hive Logo" [ref=e8]
        - generic [ref=e9]:
          - generic [ref=e10]: AZAROTH
          - generic [ref=e11]: TECH-HIVE
      - navigation "Primary Navigation" [ref=e12]:
        - link "Home" [ref=e13] [cursor=pointer]:
          - /url: /
        - link "About" [ref=e15] [cursor=pointer]:
          - /url: /about
        - link "Our Services" [ref=e17] [cursor=pointer]:
          - /url: /services
        - link "Our Products" [ref=e19] [cursor=pointer]:
          - /url: /products
        - link "Technology Insights" [ref=e21] [cursor=pointer]:
          - /url: /technology-insights
        - link "Connect with Us" [ref=e23] [cursor=pointer]:
          - /url: /connect-with-us
      - link "Request for Quote" [ref=e27] [cursor=pointer]:
        - /url: /request-for-quote
  - main [ref=e31]:
    - generic [ref=e32]:
      - generic [ref=e34]:
        - generic [ref=e35]: Direct Communications
        - heading "Connect With Us" [level=1] [ref=e36]
        - paragraph [ref=e37]: Every great solution starts with a conversation. Whether you have a question, want to discuss a project, or explore how we can help, we're ready to listen and respond.
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: Corporate Headquarters
          - heading "Chennai — Head Office" [level=2] [ref=e43]
          - paragraph [ref=e44]: Our primary engineering center and solutions design lab operates out of Chennai, Tamil Nadu, coordinating global client architectures across North America, Europe, and Asia-Pacific.
          - generic [ref=e46]:
            - generic [ref=e51]:
              - strong [ref=e52]: "Physical Address:"
              - text: 24, Malaviya Avenue, Thiruvanmiyur, Chennai, India
            - generic [ref=e56]:
              - strong [ref=e57]: "Direct Line:"
              - link "+91 6379480931" [ref=e58] [cursor=pointer]:
                - /url: tel:+91 6379480931
            - generic [ref=e62]:
              - strong [ref=e63]: "WhatsApp Inquiries:"
              - link "+91 6379480931 (Instant Chat)" [ref=e64] [cursor=pointer]:
                - /url: https://wa.me/+916379480931
            - generic [ref=e69]:
              - strong [ref=e70]: "General & Sales Email:"
              - link "hello@azaroth-techhive.com" [ref=e71] [cursor=pointer]:
                - /url: mailto:hello@azaroth-techhive.com
          - generic [ref=e72]:
            - link "Locate on Google Maps" [ref=e73] [cursor=pointer]:
              - /url: https://www.google.com/maps/search/?api=1&query=24+Malaviya+Avenue+Thiruvanmiyur+Chennai+India
            - link "Open WhatsApp Chat" [ref=e80] [cursor=pointer]:
              - /url: https://wa.me/+916379480931
          - generic [ref=e85]:
            - generic [ref=e86]: "Engineering Operating Hours: Mon – Fri, 9:00 AM – 7:00 PM IST."
            - generic [ref=e91]: All communications are bound under enterprise confidentiality standards.
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e98]: Online Inquiry Portal
            - heading "Submit Project Inquiries" [level=3] [ref=e99]
          - generic [ref=e100]:
            - generic [ref=e101]:
              - generic [ref=e102]:
                - generic [ref=e103]: Full Name *
                - textbox "Full Name *" [invalid] [ref=e104]:
                  - /placeholder: Enter your full name
                  - text: Sarah Jenkins
                - alert [ref=e105]: Full Name is required.
              - generic [ref=e108]:
                - generic [ref=e109]: Work Email *
                - textbox "Work Email *" [active] [invalid] [ref=e110]:
                  - /placeholder: Enter your business email
                  - text: sarah.jenkins@enterprise.com
                - alert [ref=e111]: Work Email is required.
              - generic [ref=e114]:
                - generic [ref=e115]: Company / Organization *
                - textbox "Company / Organization *" [invalid] [ref=e116]:
                  - /placeholder: Enter your company name
                - alert [ref=e117]: Company name is required.
              - generic [ref=e120]:
                - generic [ref=e121]: Phone / WhatsApp Number
                - textbox "Phone / WhatsApp Number" [ref=e122]:
                  - /placeholder: Enter your phone number
            - generic [ref=e123]:
              - generic [ref=e124]: Enquiry About *
              - combobox "Enquiry About *" [ref=e125]:
                - option "Select an option" [disabled]
                - option "General" [selected]
                - option "Products"
                - option "Services"
                - option "Enquiries"
                - option "Request for Quote"
            - generic [ref=e126]:
              - generic [ref=e127]: How Can We Help? *
              - textbox "How Can We Help? *" [invalid] [ref=e128]:
                - /placeholder: Describe your requirements or questions in detail...
              - alert [ref=e129]: Please provide at least a brief summary of your requirements (min 10 characters).
            - generic [ref=e132]:
              - generic [ref=e133] [cursor=pointer]:
                - checkbox "I agree that Azaroth Tech-Hive may contact me about this enquiry in accordance with the Privacy Policy." [invalid] [ref=e134]
                - generic [ref=e135]:
                  - text: I agree that Azaroth Tech-Hive may contact me about this enquiry in accordance with the
                  - link "Privacy Policy" [ref=e136]:
                    - /url: /privacy-policy
                  - text: .
              - alert [ref=e137]: Please confirm you agree to be contacted about your enquiry.
            - button "Submit" [ref=e141] [cursor=pointer]
  - contentinfo [ref=e147]:
    - generic [ref=e148]:
      - generic [ref=e149]:
        - generic [ref=e150]:
          - heading "Our Location(s):" [level=4] [ref=e151]
          - generic [ref=e152]:
            - generic [ref=e153]: 24, Malaviya Avenue, Thiruvanmiyur, Chennai, India
            - link "+91 6379480931" [ref=e161] [cursor=pointer]:
              - /url: tel:+916379480931
            - link "hello@azaroth-techhive.com" [ref=e166] [cursor=pointer]:
              - /url: mailto:hello@azaroth-techhive.com
          - generic [ref=e167]:
            - link "Privacy Policy" [ref=e168] [cursor=pointer]:
              - /url: /privacy-policy
            - generic [ref=e169]: "|"
            - link "Terms of Service" [ref=e170] [cursor=pointer]:
              - /url: /terms-of-service
        - generic [ref=e171]:
          - heading "Quick Links:" [level=4] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "Explore Products" [ref=e175] [cursor=pointer]:
                - /url: /products
            - listitem [ref=e178]:
              - link "Explore Services" [ref=e179] [cursor=pointer]:
                - /url: /services
            - listitem [ref=e182]:
              - link "Resource Hub" [ref=e183] [cursor=pointer]:
                - /url: /technology-insights
        - generic [ref=e186]:
          - link "Azaroth Tech-Hive Logo AZAROTH TECH-HIVE" [ref=e187] [cursor=pointer]:
            - /url: /
            - img "Azaroth Tech-Hive Logo" [ref=e188]
            - generic [ref=e189]:
              - generic [ref=e190]: AZAROTH
              - generic [ref=e191]: TECH-HIVE
          - generic [ref=e192]:
            - generic [ref=e193]: "Follow Us on:"
            - link "LinkedIn" [ref=e194] [cursor=pointer]:
              - /url: https://linkedin.com/company/azaroth-techhive
      - generic [ref=e199]: All rights reserved © 2026 Azaroth Tech-Hive Inc
  - button "Back to top" [ref=e200] [cursor=pointer]
  - button "Open the Azaroth site guide" [ref=e203] [cursor=pointer]
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
  78  |     await page.getByRole('link', { name: /Explore More|Explore Details/i }).first().click();
  79  |     await expect(page).toHaveURL(/\/products\//);
  80  |     await expect(page.locator('h1')).toBeVisible();
  81  |   });
  82  | 
  83  |   // Test 4: Contact Form Validation & Submission
  84  |   test('Contact form validates required inputs and submits successfully', async ({ page }) => {
  85  |     await page.goto('/connect-with-us');
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
> 97  |     await page.getByLabel(/Company Name/i).fill('Apex Logistics Global');
      |                                            ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  98  |     await page.getByLabel(/Phone Number/i).fill('+1 555-019-2834');
  99  |     await page.getByLabel(/How can we help/i).fill('We are looking for end-to-end cloud platform engineering with automated deployment.');
  100 |     await page.getByRole('checkbox').check();
  101 | 
  102 |     // Submit form
  103 |     await submitBtn.click();
  104 | 
  105 |     // Verify confirmation message
  106 |     await expect(page.getByText(/Message Received/i)).toBeVisible();
  107 |     await expect(page.getByText(/Sarah Jenkins/i)).toBeVisible();
  108 |   });
  109 | 
  110 |   // Test 5: RFQ 5-Step Wizard
  111 |   test('Request for Quote wizard works across all 5 steps and completes submission', async ({ page }) => {
  112 |     await page.goto('/request-for-quote');
  113 |     await expect(page.locator('h1')).toContainText(/Request for Quote/i);
  114 | 
  115 |     // Step 1: Select focus
  116 |     await page.getByText('Cloud and Distributed Systems').click();
  117 |     await page.getByRole('button', { name: /Continue to Step 2/i }).click();
  118 | 
  119 |     // Step 2: Target Scope & Timeline
  120 |     await page.getByText('MVP / Initial Prototype (8 - 12 Weeks)').click();
  121 |     await page.getByRole('button', { name: /Continue to Step 3/i }).click();
  122 | 
  123 |     // Step 3: Budget & Technical Scope
  124 |     await page.getByPlaceholder(/Describe key system requirements/i).fill('High throughput message queue processing 50k transactions/sec with zero loss.');
  125 |     await page.getByRole('button', { name: /Continue to Step 4/i }).click();
  126 | 
  127 |     // Step 4: Documents (Optional skip)
  128 |     await page.getByRole('button', { name: /Continue to Step 5/i }).click();
  129 | 
  130 |     // Step 5: Contact Information
  131 |     await page.getByLabel(/Contact Person Name/i).fill('David Miller');
  132 |     await page.getByLabel(/Organization Name/i).fill('Miller Fintech Labs');
  133 |     await page.getByLabel(/Business Email/i).fill('david@millerfintech.com');
  134 |     await page.getByLabel(/Contact Phone/i).fill('+1 415-555-2671');
  135 | 
  136 |     // Confirm & Submit RFQ
  137 |     await page.getByRole('button', { name: /Confirm & Submit RFQ/i }).click();
  138 | 
  139 |     // Success Modal Check
  140 |     await expect(page.getByText(/Quote Request Submitted!/i)).toBeVisible();
  141 |     await expect(page.getByText(/AZR-RFQ-/i)).toBeVisible();
  142 |   });
  143 | 
  144 |   // Test 6: Footer & Legal Pages
  145 |   test('Footer contains verified contact address, phone, email, and legal policy pages load', async ({ page }) => {
  146 |     await page.goto('/');
  147 | 
  148 |     const footer = page.locator('footer');
  149 |     await expect(footer).toContainText('24, Malaviya Avenue, Thiruvanmiyur, Chennai, India');
  150 |     await expect(footer).toContainText('+91 6379480931');
  151 |     await expect(footer).toContainText('hello@azaroth-techhive.com');
  152 |     await expect(footer).toContainText('All rights reserved © 2026 Azaroth Tech-Hive Inc');
  153 | 
  154 |     // Check Privacy Policy link and page
  155 |     await page.goto('/privacy-policy');
  156 |     await expect(page.locator('h1')).toContainText(/Privacy Policy/i);
  157 | 
  158 |     // Check Terms of Service link and page
  159 |     await page.goto('/terms-of-service');
  160 |     await expect(page.locator('h1')).toContainText(/Terms of Service/i);
  161 |   });
  162 | });
  163 | 
```