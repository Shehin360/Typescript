# Infotech Quiz Portal (IQP)

## Overview
Infotech Quiz Portal (IQP) is a TypeScript-based web application designed to test users' knowledge of programming languages. The application features multiple pages, including Home, Login, Quiz, and Suggestion pages, each implemented with TypeScript and linked to HTML for browser compatibility.

## Features
- **Home Page**: Introduction to the portal and its core members.
- **Login Page**: User authentication with form validation.
- **Quiz Page**: Interactive quiz with scoring logic.
- **Suggestion Page**: Collects user feedback and suggestions.

## Technologies Used
- **TypeScript**: Core language for implementing logic.
- **HTML/CSS**: Frontend structure and styling.
- **Bootstrap**: Responsive design.
- **JavaScript**: Compiled output for browser compatibility.

## Project Structure
```
InfoTechQuizz/
├── Handson_IQP_files/
│   ├── HomePage.html
│   ├── LoginPage.html
│   ├── QuizPage.html
│   ├── SuggestionPage.html
│   ├── homePage.ts
│   ├── loginPage.ts
│   ├── quizPage.ts
│   ├── suggestionPage.ts
│   ├── homePage_standalone.ts
│   ├── loginPage_standalone.ts
│   ├── quizPage_standalone.ts
│   ├── suggestionPage_standalone.ts
│   ├── homePage_standalone.js
│   ├── loginPage_standalone.js
│   ├── quizPage_standalone.js
│   ├── suggestionPage_standalone.js
│   ├── submitModule.ts
│   ├── submitModule.js
├── tsconfig.json
├── README.md
```

## How to Run
1. Clone the repository.
2. Navigate to the `InfoTechQuizz/Handson_IQP_files` directory.
3. Open the HTML files in a browser to view the application.

## Development Notes
- **Standalone TypeScript Files**: Standalone versions of TypeScript files are compiled to JavaScript for browser compatibility.
- **TypeScript Compilation**: Run `tsc <filename>.ts --target es5` to compile TypeScript files.
- **Error Handling**: Null safety checks and type assertions are used to prevent runtime errors.

## License
This project is licensed under the MIT License.

## Contributors
- **Core Members**: Bruce Wayne, Barry Allen, Diana Prince
- **Manager**: Clark Kent

## Feedback
We welcome feedback and suggestions! Please use the Suggestion Page in the application to share your thoughts.
