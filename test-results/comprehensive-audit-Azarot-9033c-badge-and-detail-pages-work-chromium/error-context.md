# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: comprehensive-audit.spec.ts >> Azaroth Tech-Hive Comprehensive Playwright Suite >> Product catalog displays 4 core products with Under Development badge and detail pages work
- Location: e2e/comprehensive-audit.spec.ts:63:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Explore More|Explore Details/i }).first()

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
        - link "Technology Insights" [ref=e22] [cursor=pointer]:
          - /url: /technology-insights
        - link "Connect with Us" [ref=e24] [cursor=pointer]:
          - /url: /connect-with-us
      - link "Request for Quote" [ref=e27] [cursor=pointer]:
        - /url: /request-for-quote
  - main [ref=e31]:
    - generic [ref=e34]:
      - generic [ref=e35]: Our Products & Platforms
      - heading "Our Products & Platform Foundations" [level=1] [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e38]: Our
          - generic [ref=e40]: Products
          - generic [ref=e42]: "&"
          - generic [ref=e44]: Platform
          - generic [ref=e46]: Foundations
      - paragraph [ref=e48]: Four platforms in active development, each available for scoped early builds. They give your teams a practical starting point for the roadmap while keeping scope, branding, and operational ownership clear.
      - generic [ref=e49]:
        - link "Request For Quote" [ref=e50] [cursor=pointer]:
          - /url: /request-for-quote
        - link "See engineering services" [ref=e51] [cursor=pointer]:
          - /url: /services
    - generic [ref=e53]:
      - generic [ref=e54]:
        - button "All" [pressed] [ref=e55] [cursor=pointer]
        - button "Enterprise Solutions" [ref=e56] [cursor=pointer]
        - button "Digital Commerce" [ref=e57] [cursor=pointer]
        - button "Digital Learning" [ref=e58] [cursor=pointer]
        - button "Healthcare" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - img "Modern gym floor with strength and cardio equipment" [ref=e63]
            - generic [ref=e65]: Under Development
            - generic [ref=e68]:
              - text: Platform In Active Development
              - heading "Fitness Management System" [level=2] [ref=e69]
          - generic [ref=e70]:
            - generic [ref=e71]:
              - paragraph [ref=e72]: Multi-Location Health Club & Fitness Operations System
              - paragraph [ref=e73]: End-to-end fitness operations management for multi-location gyms and national fitness chains.
            - generic [ref=e74]:
              - text: What You Get
              - generic [ref=e75]:
                - generic [ref=e76]: Complete member lifecycle management from sign-up to renewal
                - generic [ref=e81]: Automated billing and payment processing with integrated gateways
                - generic [ref=e86]: Real-time class scheduling and trainer availability management
            - generic [ref=e91]:
              - link "See Full Details" [ref=e92] [cursor=pointer]:
                - /url: /products/fitness-management-platform
              - button "Request a Demo" [ref=e93] [cursor=pointer]
        - generic [ref=e97]:
          - generic [ref=e98]:
            - img "Retail customer completing a payment at a checkout counter" [ref=e99]
            - generic [ref=e101]: Under Development
            - generic [ref=e104]:
              - text: Platform In Active Development
              - heading "Omnichannel Commerce Platform" [level=2] [ref=e105]
          - generic [ref=e106]:
            - generic [ref=e107]:
              - paragraph [ref=e108]: Multi-Store Catalog, Inventory & Order Fulfillment Engine
              - paragraph [ref=e109]: Multi-brand and international online retail management with centralized inventory.
            - generic [ref=e110]:
              - text: What You Get
              - generic [ref=e111]:
                - generic [ref=e112]: Manage multiple brands and stores from a single dashboard
                - generic [ref=e117]: Real-time inventory synchronization across all sales channels
                - generic [ref=e122]: Automated order routing to the optimal fulfillment location
            - generic [ref=e127]:
              - link "See Full Details" [ref=e128] [cursor=pointer]:
                - /url: /products/omnichannel-commerce-platform
              - button "Request a Demo" [ref=e129] [cursor=pointer]
        - generic [ref=e133]:
          - generic [ref=e134]:
            - img "Learners collaborating around a laptop in a classroom" [ref=e135]
            - generic [ref=e137]: Under Development
            - generic [ref=e140]:
              - text: Platform In Active Development
              - heading "Learning Management Platform" [level=2] [ref=e141]
          - generic [ref=e142]:
            - generic [ref=e143]:
              - paragraph [ref=e144]: Centralized Corporate Training & Knowledge Pathways Platform
              - paragraph [ref=e145]: Corporate training and enterprise academy management with structured learning pathways.
            - generic [ref=e146]:
              - text: What You Get
              - generic [ref=e147]:
                - generic [ref=e148]: Centralized course management and content authoring
                - generic [ref=e153]: Automated learner enrollment and role-based access control
                - generic [ref=e158]: Interactive assessments with digital credential generation
            - generic [ref=e163]:
              - link "See Full Details" [ref=e164] [cursor=pointer]:
                - /url: /products/learning-management-platform
              - button "Request a Demo" [ref=e165] [cursor=pointer]
        - generic [ref=e169]:
          - generic [ref=e170]:
            - img "Healthcare professional reviewing patient information in a clinic" [ref=e171]
            - generic [ref=e173]: Under Development
            - generic [ref=e176]:
              - text: Platform In Active Development
              - heading "Healthcare Management System" [level=2] [ref=e177]
          - generic [ref=e178]:
            - generic [ref=e179]:
              - paragraph [ref=e180]: Hospital & Multi-Clinic Network Operations Platform
              - paragraph [ref=e181]: End-to-end healthcare operations management for hospitals and multi-clinic networks.
            - generic [ref=e182]:
              - text: What You Get
              - generic [ref=e183]:
                - generic [ref=e184]: Complete patient lifecycle management from registration to discharge
                - generic [ref=e189]: Real-time access to patient records across all network locations
                - generic [ref=e194]: Automated lab result integration and notification workflows
            - generic [ref=e199]:
              - link "See Full Details" [ref=e200] [cursor=pointer]:
                - /url: /products/healthcare-management-system
              - button "Request a Demo" [ref=e201] [cursor=pointer]
  - contentinfo [ref=e205]:
    - generic [ref=e206]:
      - generic [ref=e207]:
        - generic [ref=e208]:
          - heading "Our Location(s):" [level=4] [ref=e209]
          - generic [ref=e210]:
            - generic [ref=e211]: 24, Malaviya Avenue, Thiruvanmiyur, Chennai, India
            - link "+91 6379480931" [ref=e219] [cursor=pointer]:
              - /url: tel:+916379480931
            - link "hello@azaroth-techhive.com" [ref=e224] [cursor=pointer]:
              - /url: mailto:hello@azaroth-techhive.com
          - generic [ref=e225]:
            - link "Privacy Policy" [ref=e226] [cursor=pointer]:
              - /url: /privacy-policy
            - generic [ref=e227]: "|"
            - link "Terms of Service" [ref=e228] [cursor=pointer]:
              - /url: /terms-of-service
        - generic [ref=e229]:
          - heading "Quick Links:" [level=4] [ref=e230]
          - list [ref=e231]:
            - listitem [ref=e232]:
              - link "Explore Products" [ref=e233] [cursor=pointer]:
                - /url: /products
            - listitem [ref=e236]:
              - link "Explore Services" [ref=e237] [cursor=pointer]:
                - /url: /services
            - listitem [ref=e240]:
              - link "Resource Hub" [ref=e241] [cursor=pointer]:
                - /url: /technology-insights
        - generic [ref=e244]:
          - link "Azaroth Tech-Hive Logo AZAROTH TECH-HIVE" [ref=e245] [cursor=pointer]:
            - /url: /
            - img "Azaroth Tech-Hive Logo" [ref=e246]
            - generic [ref=e247]:
              - generic [ref=e248]: AZAROTH
              - generic [ref=e249]: TECH-HIVE
          - generic [ref=e250]:
            - generic [ref=e251]: "Follow Us on:"
            - link "LinkedIn" [ref=e252] [cursor=pointer]:
              - /url: https://linkedin.com/company/azaroth-techhive
      - generic [ref=e257]: All rights reserved © 2026 Azaroth Tech-Hive Inc
  - button "Open the Azaroth site guide" [ref=e258] [cursor=pointer]
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
> 78  |     await page.getByRole('link', { name: /Explore More|Explore Details/i }).first().click();
      |                                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  97  |     await page.getByLabel(/Company Name/i).fill('Apex Logistics Global');
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