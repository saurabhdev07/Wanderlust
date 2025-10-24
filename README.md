# Wanderlust

Wanderlust is a web application that allows users to explore, create, and manage travel listings. Users can add destinations, upload images, and interact with other travelers. The project is built using **Node.js, Express, MongoDB, EJS, and Cloudinary**.

---

## Live Demo

Check out the live app on Render: [Wanderlust Live](https://wanderlust-04s1.onrender.com/listings)

---

## Features

- User authentication with **Passport.js**
- CRUD operations for travel listings
- Upload images to **Cloudinary**
- Interactive maps using **Mapbox**
- Flash messages for notifications 
- EJS templating for dynamic views

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js, passport-local-mongoose
- **File Uploads:** Multer, Cloudinary
- **Frontend:** EJS, HTML, CSS, JS
- **Map:** Mapbox SDK

---

## Installation (Optional — Run Locally)

1. Clone the repository: 

2. Go to the project folder:
cd Wanderlust

3.Install dependencies:
npm install

4.Create a .env file with your environment variables:
1.CLOUD_NAME=your_cloud_name
2.CLOUD_API_KEY=your_api_key
3.CLOUD_API_SECRET=your_api_secret
4.DB_URL=your_mongo_uri
5.MAP_TOKEN=your_mapbox_token
6.SECRET=your_session_secret

5.Start the server:
npm start

6.Open in browser: http://localhost:8080

7. Project Structure
Wanderlust/
 ├── app.js
 ├── package.json
 ├── routes/
 ├── models/
 ├── views/
 ├── public/
 └── README.md

Usage: (like airbnb clone )
Sign up or log in as a user.
Create, edit, or delete travel listings.
Upload images for your destinations.
View listings on the map and explore locations.

Demo home page
<img width="958" height="447" alt="image" src="https://github.com/user-attachments/assets/059aac7a-cd7e-458b-9380-71fb6abbab1a" />

Add the listings page
<img width="956" height="440" alt="image" src="https://github.com/user-attachments/assets/490cd0e9-20a4-4d48-a684-8c3c1b11daa7" />

Signup page
<img width="957" height="441" alt="image" src="https://github.com/user-attachments/assets/fcaa806b-8442-4756-82bb-a8f48573fa4b" />

Login page
<img width="958" height="440" alt="image" src="https://github.com/user-attachments/assets/02578c18-b002-4299-8d82-b6248fa73875" />

Details of Listings
<img width="960" height="442" alt="image" src="https://github.com/user-attachments/assets/66af0326-4dbc-446c-9870-3e719e85ef36" />
<img width="960" height="444" alt="image" src="https://github.com/user-attachments/assets/c97ff412-2795-4e0d-bcfd-241d2095d69b" />





