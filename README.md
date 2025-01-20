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

## Full Explanation

### Architecture

The structure of this project is carefully organized to ensure scalability, maintainability, and flexibility in the long term. Here's an overview of the key folders and their contents:

1. **`cypress/e2e/`**:  
   Within **`cypress/e2e/[your module]`**, this folder contains your test cases isolated by module. Each test suite corresponds to a particular part of your application, and within each module, you'll find specs for testing different components or flows of that module, as well as any shared utilities. This structure keeps tests isolated and makes it easier to scale as your project grows.  
   There is also a **`cypress/e2e/global`** test folder that contains tests applicable to the entire application, ensuring proper interaction between modules and overall functionality.

2. **`cypress/pom/`**:  
   This folder handles the Page Object Model (POM) classes that represent the pages and components of your application. Each page object contains reusable methods for interacting with elements on that page and information about the page, such as component IDs or grid column names. This allows for the separation of concerns between the test logic and UI interactions, ensuring that changes to the UI don’t require updates to every test.
   If one of your modules groups many pages, don't hesitate to create a folder and place them in **`cypress/pom/[your module]`**.

3. **`cypress/support/`**:  
   The support folder is where most of the Cypress-specific logic resides. It includes:

   - **`pcom/`**: Contains reusable utility methods and custom logic for interacting with the application, often shared across tests.
   - **`utils/`**: Provides helper functions for common Cypress operations like interacting with elements, managing URLs, or performing clicks. For example, functions like `cy.get` or `cy.click` are handled here.
   - **`commands.ts`**: This is where you can define custom Cypress commands. Keeping your custom commands here helps ensure they are isolated and reusable across tests.
   - **`e2e.ts`**: Contains steps that are executed with all your tests. This could include logic to set up or tear down the environment, handle authentication, or configure global test settings.
   - **`index.ts`**: In a TypeScript-based Cypress setup, this central configuration file is essential for importing and initializing all necessary support files, custom commands, and utilities. It provides proper type definitions and ensures that the Cypress environment is configured correctly. This file is crucial for TypeScript to recognize and apply types across custom commands and utilities, ensuring a consistent, type-safe environment for the entire test suite.

This structure encourages best practices by clearly separating different types of code and ensuring that no Cypress-specific code is present in the actual test files (`e2e`) or page object model files. The test files should only contain the logic to verify the functionality of your application, while Cypress-specific logic should be handled in the appropriate files within `support`.

---

### The Importance of Isolating Cypress Code

In this template, one of the key principles is to **minimize** the use of Cypress commands outside of the `support` folder, and to ensure that any Cypress-specific logic is kept as isolated and reusable as possible.

**Why is this important?**

1. **Flexibility for Changes**: For example, the method below:

    ```typescript
    public static getElementById(id: string): Cypress.Chainable<JQuery<HTMLElement>> {
      return cy.get(`[data-cy="${id}"]`);
    }
    ```

    By centralizing the creation of Cypress commands like `cy.get()`, we ensure that if we ever decide to switch to using a different selector format (e.g., `data-testid` or any other approach), we only need to modify it **once**. This avoids the need to go through every test file and update every instance of `cy.get()`—saving you countless hours of work and reducing the chance of introducing bugs.

2. **Reduced Repetition**: Even within the `support` folder, we aim to minimize the repetition of Cypress methods. If a method or command is used frequently, we centralize it in reusable functions, making the code cleaner and easier to maintain.

3. **Maintainability and Robustness**: This practice may seem unnecessary for smaller projects or teams, but in a large-scale enterprise environment, it is critical for maintaining a consistent testing approach. This reduces the chances of errors when changes are needed (e.g., switching to a different testing library or updating application selector formats).

By following this approach, the testing code remains **framework-agnostic**, **scalable**, and **robust**, reducing future technical debt and making it easier to modify the test suite as your project evolves. This approach can be a lifesaver in larger teams, preventing bugs and ensuring that tests continue to pass even as the codebase changes.

While it may feel like an overhead now, this methodology ensures that as your testing needs grow, your infrastructure will be able to handle changes smoothly—saving time and effort in the long run.

---

## Contributing

I welcome contributions to improve this template! If you have suggestions, feature requests, or find any issues, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

### Stay in Touch

For questions or support, feel free to reach out or open an issue. Happy testing!

