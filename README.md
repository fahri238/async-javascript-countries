# 🌍 Asynchronous JavaScript: REST Countries API

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![API](https://img.shields.io/badge/API-RESTful-success?style=for-the-badge&logo=json)

A web application built to deeply understand the mechanics of Asynchronous JavaScript. This project interacts with public web APIs to fetch, process, and render data about countries and their neighbors dynamically.

> **Note:** This project is part of my progression through ["The Complete JavaScript Course"](https://www.udemy.com/course/the-complete-javascript-course/). It marks my transition from synchronous logic to handling network requests, managing states, and gracefully catching errors in modern web architecture.

## ✨ Features

* **Fetch Country Data:** Retrieves comprehensive data (flags, population, region, languages, currencies) from the REST Countries API.
* **Neighboring Countries:** Automatically chaining asynchronous requests to fetch and render bordering countries based on the initial country's data.
* **Reverse Geocoding:** Converts raw GPS coordinates (latitude and longitude) into a formatted physical address and country name using the Geocode API.
* **Robust Error Handling:** Displays user-friendly error messages when network requests fail or when users deny location permissions.

## 🧠 What I Learned

This project was a deep dive into the JavaScript Event Loop and modern asynchronous patterns:

1. **AJAX & Fetch API:** Transitioning from the old `XMLHttpRequest` to the modern `fetch()` function for making HTTP requests.
2. **Promises:** Understanding the lifecycle of Promises (Pending, Settled, Fulfilled, Rejected) and how to consume them using `.then()` and `.catch()`.
3. **Async / Await:** Writing clean, non-blocking, and synchronous-looking code using ES2017 `async/await` syntax.
4. **Error Handling:** Properly catching and throwing errors manually, understanding how Promise rejections propagate down the chain, and utilizing `try...catch` blocks.
5. **The Event Loop:** Gaining a theoretical and practical understanding of the Call Stack, Web APIs, Callback Queue, and Microtasks Queue.
6. **Running Promises in Parallel:** Utilizing `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()` for performance optimization.

## 🚀 How to Run Locally

This is a client-side vanilla JavaScript application.

1. Clone this repository:
   ```bash
   git clone [https://github.com/fahri238/async-javascript-countries.git](https://github.com/fahri238/async-javascript-countries.git)