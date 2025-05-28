# Weather App – Alexandra Riva

A minimalistic and responsive weather application where users can search for real-time weather data by city. Built using **HTML**, **CSS**, and **JavaScript**, with a backend powered by **Node.js**, **Express**, and **Axios**, connected to the **Visual Crossing Weather API**.

---

## Technologies Used

### Frontend:

* HTML5
* CSS3
* Vanilla JavaScript
* [Netlify](https://netlify.com/) for frontend deployment

### Backend:

* Node.js
* Express.js
* Axios (to fetch weather data)
* dotenv (to secure API keys)
* [Render](https://render.com/) for backend deployment

---

## Live Site

Try it here:
**[https://weather-app-alexandra-riva.netlify.app](https://weather-app-alexandra-riva.netlify.app)**

> ⚠Please wait a few seconds after clicking "Get Weather" — the backend is hosted on **Render's free tier**, which may take a few seconds to wake up.

---

## How It Works

* The frontend (on Netlify) collects the user’s city input.
* This input is sent to a custom backend API (`/weather` endpoint) hosted on Render.
* The backend then:

  * Queries the Visual Crossing API with the city
  * Returns JSON with current weather data
  * The frontend displays the temperature and weather condition.

---

## What I Learned

* How to structure and deploy a **full stack app**
* Building and securing an Express.js server with **environment variables**
* Fetching third-party API data using Axios
* Handling **CORS issues** between frontend and backend across domains
* Deploying on **Render** (backend) and **Netlify** (frontend)
* Improving user experience with error handling and clean UI

---

## Deployment Details

* **Frontend:** `public/` folder hosted on Netlify
* **Backend:** Node.js + Express deployed on Render
  (API route: `https://weather-app-alexandra-riva-public.onrender.com/weather`)
