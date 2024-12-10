# Playwright Test Suite for Demo App

## Overview

This repository contains a Playwright-driven test suite for the [Demo App](https://animated-gingersnap-8cf7f2.netlify.app/), designed to verify various tasks' existence in different columns of the Web and Mobile applications. The suite is data-driven, allowing easy addition of new test cases by simply modifying the `testCases` array.

The tests aim to:
- Automate the login process.
- Verify the presence of specific tasks in different columns.
- Validate that the appropriate tags are associated with each task.

### **Test Cases Covered:**
1. **Web Application**: Verify "Implement user authentication" in the "To Do" column with tags "Feature" and "High Priority".
2. **Web Application**: Verify "Fix navigation bug" in the "To Do" column with the "Bug" tag.
3. **Web Application**: Verify "Design system updates" in the "In Progress" column with the "Design" tag.
4. **Mobile Application**: Verify "Push notification system" in the "To Do" column with the "Feature" tag.
5. **Mobile Application**: Verify "Offline mode" in the "In Progress" column with "Feature" and "High Priority" tags.
6. **Mobile Application**: Verify "App icon design" in the "Done" column with the "Design" tag.

---

## Setup and Installation

### Prerequisites

- Node.js (>= v14)
- Playwright

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/playwright-test-suite.git

2. Install dependencies:
   ```bash
   npm install

3. Run the tests:
   ```bash
   npx playwright test or npx playwright test --ui for UI Interface
   
### Environment Variables

1. **BASE_URL**: URL of the demo app.

2. **USERNAME**: Username for the demo app.

3. **PASSWORD**: Password for the demo app.
