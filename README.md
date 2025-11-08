Vibe Commerce — MERN Stack E-Commerce App

Vibe Commerce is a simple and modern full-stack e-commerce web app built with the MERN stack (MongoDB, Express, React, Node.js).
It supports product listing, shopping cart management, and checkout functionality with a clean, responsive UI.


Features

 Product Management — Products seeded using MongoDB.

 Shopping Cart — Add, update quantity, and remove items dynamically.

 Checkout — Simple checkout flow with order summary.

 Responsive UI — Built with Tailwind CSS and DaisyUI for a modern look.

 API Integration — Frontend communicates with the Express backend using RESTful APIs.

 Toast Notifications — Real-time feedback for user actions (add/remove/checkout).


 Tech Stack

Frontend:

 React.js
 Tailwind CSS
 DaisyUI
 React Toastify

Backend:

 Node.js
 Express.js
 MongoDB with Mongoose

 Setup Instructions
 
1️ Clone Repository
git clone https://github.com/yourusername/vibe-commerce.git
cd vibe-commerce

2️ Setup Backend
cd backend
npm install mongoose dotenv express cors morgan


3️ Seed Database
node seed/seedProducts.js

4️ Run Backend Server
nodemon server.js  or node server.js

The backend runs at http://localhost:4004

5️ Setup Frontend
cd  frontend
npm install vite@latest
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm i -D daisyui@v4
npm i react-toastify
npm run dev

The frontend runs at http://localhost:5173

 API End Points

| Method | Endpoint               | Description               |
| ------ | ---------------------- | ------------------------- |
| GET    | `/api/products`        | Get all products          |
| GET    | `/api/cart/`           | Get cart details          |
| POST   | `/api/cart/`           | Add product to cart       |
| PATCH  | `/api/cart/:id`        | Update cart item quantity |
| DELETE | `/api/cart/:id`        | Remove item from cart     |
| POST   | `/api/checkout`        | Checkout and get receipt  |


Screenshots

<img width="1920" height="1080" alt="Screenshot (1)" src="https://github.com/user-attachments/assets/1636af79-b34c-4657-8a80-ad06e79ac5ca" />
<img width="1920" height="1080" alt="Screenshot (2)" src="https://github.com/user-attachments/assets/f44cb1a6-2084-49c9-89f8-cf71df13c132" />
<img width="1920" height="1080" alt="Screenshot (3)" src="https://github.com/user-attachments/assets/4470debd-bce2-4529-9652-dbf5a2feefda" />
<img width="1920" height="1080" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/c372853a-75f0-4757-9e4f-e932abcec3a0" />
<img width="1920" height="1080" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/c65a4cc5-4274-4924-94c4-795c3ddd66ae" />
<img width="1920" height="1080" alt="Screenshot (9)" src="https://github.com/user-attachments/assets/0ac08749-e446-4634-aef9-26066a885fce" />
<img width="1920" height="1080" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/bc1aa06d-c6b5-42f6-886b-779cd3b12266" />
<img width="1920" height="1080" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/2c11f780-2ce0-49f1-a41f-de1e17049a98" />
