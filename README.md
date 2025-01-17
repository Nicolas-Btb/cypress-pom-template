# Cypress POM Template

Welcome to the **Cypress POM Template** repository. This project serves as a foundational template designed to demonstrate how to implement the Page Object Model (POM) design pattern in a way that is **stable**, **scalable**, and **independent of specific frameworks**. It is especially suitable for companies looking to build robust end-to-end testing architectures without creating dependencies on a particular framework.

---

## Why Use This Template?

- **Framework Independence:** Each component is isolated, ensuring flexibility and the ability to adapt to different setups.
- **Scalability:** Designed with best practices, this template supports the growth of your test suite as your application evolves.
- **Stability:** Clear separation of concerns and reusable components make the tests reliable and easy to maintain.
- **Enterprise-Ready:** Ideal for organizations that require a predictable and well-structured testing strategy.

---

## Example Project

This template is paired with an vue-project repository: **[vue-cart-qa-testing](https://github.com/Nicolas-Btb/vue-cart-qa-testing)**, a fork of the original **[vue-cart](https://github.com/wobsoriano/vue-cart)** project by wobsoriano.

The **vue-cart-qa-testing** help to demonstrates:

- A functional implementation of this Cypress POM template.
- Practical examples for setting up and running tests using the POM methodology.

---

## How to Use This Template

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-org/cypress-pom-template.git
   cd cypress-pom-template
   ```

2. **Install Dependencies**:
   Ensure you have Node.js and npm installed, then run:
   ```bash
   npm install
   ```

3. **Structure Overview**:
   - `cypress/e2e/`: Contains the test cases organized by features.
   - `cypress/pom/`: Houses page objects representing application pages.
   - `cypress/support/`: Includes custom commands, pcom and utilities to support tests.

4. **Run Tests**:
   Use the following command to execute tests:
   ```bash
   npx cypress open
   ```

   Or, for headless mode:
   ```bash
   npx cypress run
   ```

5. **Modify and Expand**:
   Adapt the structure to your application and add additional page objects or tests as needed.

---

## Key Features

- **Clear Folder Structure**: Organized to encourage best practices and separation of concerns.
- **Reusable Components**: Write once, reuse everywhere.
- **Examples Included**: Easily adapt and expand the provided examples to fit your application.
- **Framework Agnostic**: Keep your testing logic independent of the application's underlying framework and testing framework too.

---

## Contributing

I welcome contributions to improve this template! If you have suggestions, feature requests, or find any issues, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

### Stay in Touch

For questions or support, feel free to reach out or open an issue. Happy testing!

