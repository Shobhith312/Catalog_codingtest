# Shamir's Secret Sharing Algorithm Implementation

This project implements a simplified version of Shamir's Secret Sharing algorithm using polynomial interpolation. The goal is to reconstruct the constant term of a polynomial from given points (roots) represented in various numeral bases.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).
- **NPM** (Node Package Manager) comes bundled with Node.js.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>

2.Navigate to the project directory:
cd Catalog_codingtest


3.Install necessary dependencies (if any):
You may need to run npm install to install any required packages.

4.Create JSON test case files:
Create two files named testcase1.json and testcase2.json in the project directory with the following sample content:

5.Run the application:
To execute the code and find the secret constant terms from the JSON files, use the following command:
node main.js

6.Output:
The application will output the secret constant term for each test case, like so:
The secret constant term (c) for testcase1.json is: 3
The secret constant term (c) for testcase2.json is: 79836264046592
