# Portfolio API + Playwright Tests

Hi there! 👋

This is a minimal Fintech API I created to demonstrate my ability to design and build a REST API testing suite using Playwright.

> **Note:** The automation code is 100% mine. The API was implemented using Claude AI.

## Key Areas

-  **Playwright API Test Automation** - RESTful API
-  **Test Architecture** - Clean helper functions and reusable patterns  
-  **Stateful Testing** - POST/GET operations on this version
-  **Authentication Testing** - Token-based authorization
-  **Error Handling** - Comprehensive negative test scenarios


## Where to Look?

### Core Test Suite
- **[tests/](tests/)** - for complete test suite
- **[tests/api/auth.spec.ts](tests/api/auth.spec.ts)** - Authentication flow testing
- **[tests/api/accounts.spec.ts](tests/api/accounts.spec.ts)** - Account management & stateful operations
- **[tests/helpers/auth-helpers.ts](tests/helpers/auth-helpers.ts)** - Authentication test patterns
- **[tests/helpers/create-account-helpers.ts](tests/helpers/create-account-helpers.ts)** - Account creation utilities

### Documentation
- **[docs/API_DOCUMENTATION.md](docs/API_DOCUMENTATION.md)** - Complete API endpoint documentation
- **[docs/QA_API_TESTING_GUIDE.md](docs/QA_API_TESTING_GUIDE.md)** - Testing methodology and patterns (For new TESTERS)

## Do you want to run it?
Go to [README_COMPRENHENSIVE > Quick Setup Commands](README_COMPRENHENSIVE.md#quick-setup-commands) for step-by-step instructions.


## 🛠️ Tech Stack

- **Testing**: Playwright (API testing)
- **API**: Express + TypeScript + Postgres
- **Orchestration**: Docker Compose
- **CI**: GitHub Actions
- **Cost**: $0 (runs locally + GitHub Actions)
- **AI**: "Claude AI" was used to create the API. However, the automation code is 100% mine 🤓

---
## Are you new to API automation?
Check out [here](docs/QA_API_TESTING_GUIDE.md).

---
## ☎️ Contact Me
Do not hesitate to contact me if you have any questions or need further clarification:

- **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/marcelo-romero/)
