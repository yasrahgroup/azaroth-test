# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: comprehensive-audit.spec.ts >> Azaroth Tech-Hive Comprehensive Playwright Suite >> Request for Quote wizard works across all 5 steps and completes submission
- Location: e2e/comprehensive-audit.spec.ts:111:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('MVP / Initial Prototype (8 - 12 Weeks)')

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
      - link "Request for Quote" [ref=e26] [cursor=pointer]:
        - /url: /request-for-quote
  - main [ref=e30]:
    - generic [ref=e31]:
      - generic [ref=e33]:
        - generic [ref=e34]: Request for Quote (RFQ)
        - heading "Request for Quote" [level=1] [ref=e35]
        - paragraph [ref=e36]: Share your project requirements, timeline, goals, and objectives. Our team will review your needs and provide a tailored proposal with suitable solutions.
      - generic [ref=e39]:
        - generic [ref=e40]: "Step 2 of 5: Scope & Urgency"
        - generic [ref=e41]:
          - progressbar "Request for quote progress" [ref=e42]
          - list [ref=e44]:
            - listitem [ref=e45]:
              - generic [ref=e49]: Solutions
            - listitem [ref=e50]:
              - generic [ref=e51]: "2"
              - generic [ref=e52]: Scope & Urgency
            - listitem [ref=e53]:
              - generic [ref=e54]: "3"
              - generic [ref=e55]: Budget & Specs
            - listitem [ref=e56]:
              - generic [ref=e57]: "4"
              - generic [ref=e58]: Documents
            - listitem [ref=e59]:
              - generic [ref=e60]: "5"
              - generic [ref=e61]: Contact & Verification
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic [ref=e64]:
              - heading "Project Scope & Target Timeline" [active] [level=3] [ref=e65]
              - paragraph [ref=e66]: Help us size the engineering pod capacity and sprint horizon.
            - generic [ref=e67]:
              - generic [ref=e68]: "Anticipated Engagement Scope:"
              - generic [ref=e69]:
                - generic [ref=e70] [cursor=pointer]: Prototype / Architectural Spike
                - generic [ref=e71] [cursor=pointer]: Full Scale Platform Engineering
                - generic [ref=e72] [cursor=pointer]: Enterprise Migration & Modernization
                - generic [ref=e73] [cursor=pointer]: Dedicated Pod Augmentation (Ongoing)
            - generic [ref=e74]:
              - generic [ref=e75]: "Target Deployment / Start Horizon:"
              - generic [ref=e76]:
                - generic [ref=e77] [cursor=pointer]: Immediate (< 1 month)
                - generic [ref=e78] [cursor=pointer]: 1 - 3 Months
                - generic [ref=e79] [cursor=pointer]: 3 - 6 Months
                - generic [ref=e80] [cursor=pointer]: Flexible / Planning Horizon
          - generic [ref=e81]:
            - button "Back" [ref=e82] [cursor=pointer]
            - button "Continue to Step 3" [ref=e87] [cursor=pointer]
  - contentinfo [ref=e92]:
    - generic [ref=e93]:
      - generic [ref=e94]:
        - generic [ref=e95]:
          - heading "Our Location(s):" [level=4] [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]: 24, Malaviya Avenue, Thiruvanmiyur, Chennai, India
            - link "+91 6379480931" [ref=e106] [cursor=pointer]:
              - /url: tel:+916379480931
            - link "hello@azaroth-techhive.com" [ref=e111] [cursor=pointer]:
              - /url: mailto:hello@azaroth-techhive.com
          - generic [ref=e112]:
            - link "Privacy Policy" [ref=e113] [cursor=pointer]:
              - /url: /privacy-policy
            - generic [ref=e114]: "|"
            - link "Terms of Service" [ref=e115] [cursor=pointer]:
              - /url: /terms-of-service
        - generic [ref=e116]:
          - heading "Quick Links:" [level=4] [ref=e117]
          - list [ref=e118]:
            - listitem [ref=e119]:
              - link "Explore Products" [ref=e120] [cursor=pointer]:
                - /url: /products
            - listitem [ref=e123]:
              - link "Explore Services" [ref=e124] [cursor=pointer]:
                - /url: /services
            - listitem [ref=e127]:
              - link "Resource Hub" [ref=e128] [cursor=pointer]:
                - /url: /technology-insights
        - generic [ref=e131]:
          - link "Azaroth Tech-Hive Logo AZAROTH TECH-HIVE" [ref=e132] [cursor=pointer]:
            - /url: /
            - img "Azaroth Tech-Hive Logo" [ref=e133]
            - generic [ref=e134]:
              - generic [ref=e135]: AZAROTH
              - generic [ref=e136]: TECH-HIVE
          - generic [ref=e137]:
            - generic [ref=e138]: "Follow Us on:"
            - link "LinkedIn" [ref=e139] [cursor=pointer]:
              - /url: https://linkedin.com/company/azaroth-techhive
      - generic [ref=e144]: All rights reserved © 2026 Azaroth Tech-Hive Inc
  - button "Open the Azaroth site guide" [ref=e145] [cursor=pointer]
```

# Test source

```ts
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
> 120 |     await page.getByText('MVP / Initial Prototype (8 - 12 Weeks)').click();
      |                                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
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