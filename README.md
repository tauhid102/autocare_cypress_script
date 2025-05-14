# AutoCare Cypress Test Automation Project

## Project Overview

This project implements test automation for the AutoCare website using [Cypress](https://www.cypress.io/). The tests are organized using the Page Object Model (POM) design pattern for maintainability and scalability.

---

## Prerequisites

Before installing and running the project, ensure the following prerequisites are met:

* **Node.js**: Install [Node.js](https://nodejs.org/) (v14 or above recommended).
* **Git**: Ensure Git is installed on your system.
* **Cypress**: No manual installation needed; it will be handled through the dependencies.

---

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/autocare-cypress.git
   ```

   Replace `your-username` with your actual GitHub username.

2. **Navigate to the Project Directory**:

   ```bash
   cd autocare-cypress
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `cypress.env.json` file in the root directory and add the necessary credentials:

   ```json
   {
     "username": "your-username",
     "password": "your-password"
   }
   ```

   Replace `your-username` and `your-password` with the actual login credentials.

---

## Running Tests

### Open Cypress Test Runner

To open the Cypress Test Runner in interactive mode:

```bash
npx cypress open
```

Select the desired test file from the UI and run it.

### Run All Tests in Headless Mode

To run all tests in headless mode and generate a report:

```bash
npx cypress run
```

### Run a Specific Test File

To execute a specific test file:

```bash
npx cypress run --spec "cypress/integration/<test-file>.spec.js"
```

Replace `<test-file>` with the name of the desired test file.

---

## Project Structure

```
├── cypress
│   ├── fixtures       # Static test data
│   ├── integration    # Test files
│   ├── plugins        # Plugins
│   ├── support
│   │   ├── commands.js
│   │   ├── index.js
│   │   └── pageObjects # POM implementation
├── cypress.env.json   # Environment variables (not committed to Git)
├── cypress.json       # Cypress configuration file
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

---

## Troubleshooting

1. **Common Errors**:

   * **"Unexpected end of JSON input"**:
     Ensure your `cypress.env.json` file is properly formatted.
   * **Timeouts**:
     Increase the default timeout in `cypress.json`:

     ```json
     {
       "defaultCommandTimeout": 10000
     }
     ```

2. **Check Cypress Version**:
   Run the following command to verify the installed version of Cypress:

   ```bash
   npx cypress --version
   ```

3. **Reinstall Dependencies**:
   If you encounter dependency-related issues, delete `node_modules` and `package-lock.json` and reinstall:

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## Contributions

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

For additional help, refer to the [Cypress Documentation](https://docs.cypress.io/).
