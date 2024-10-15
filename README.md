<h1 align="center">Welcome to Recipe Managment Web Application 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

Recipe Management Web Application
This project is a Recipe Management Web Application designed to allow users to explore, search, and filter recipes based on various parameters like recipe type (veg, non-veg, or both), difficulty levels (easy, medium, hard), and preparation time (30, 60, or 90 minutes).

Key Features:
Recipe Search & Filters:

Users can search for recipes using a keyword or apply multiple filters such as recipe type, difficulty, and preparation time. The search is dynamic, allowing users to view results instantly as they adjust their filters.
Dynamic Filtering:

The filtering options are multi-selectable checkboxes, letting users find recipes that match their exact preferences. These filters are integrated into both the frontend and backend to fetch results efficiently.
Frontend and Backend Separation:

The project is designed with a separated frontend and backend architecture. The frontend is developed using React.js, offering a responsive and intuitive UI for users to interact with.
The backend is built using Spring Boot, handling data management, filtering logic, and API services. It serves recipes from a database based on the user's search and filters.
Backend Filtering with Dynamic Query:

The backend uses Spring Data JPA with custom queries to filter recipes based on user inputs. It handles the dynamic nature of queries (like searching by recipe type, difficulty, or time) while ensuring efficient database interaction.
Recipe Details:

Each recipe contains key information such as title, type (veg/non-veg), preparation time, difficulty level, ingredients, cooking instructions, and the author of the recipe. The results are displayed in a structured format with a table for easy viewing.
Axios for API Requests:

The frontend communicates with the backend through Axios for making HTTP requests. This allows smooth fetching of filtered recipes based on user inputs. Data handling is done effectively to ensure optimal performance during searches.
Handling Arrays and Query Parameters:

The project handles complex filtering by passing arrays for filtering parameters, ensuring that the frontend sends correct query strings that the backend can process without issues. The use of qs in Axios ensures query parameters are formatted correctly to avoid invalid URL issues.
Technical Stack:
Frontend:

React.js
Bootstrap (for styling and responsive design)
Axios (for API requests)
qs (for query string construction)
Backend:

Spring Boot (RESTful API development)
Spring Data JPA (for database interaction)
MySQL (database management)
Tools & Environment:

Postman (for API testing)
Git (for version control)
Maven (for dependency management)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Somaraju Indukuri**

* Github: [@Somaraju080102](https://github.com/Somaraju080102)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
