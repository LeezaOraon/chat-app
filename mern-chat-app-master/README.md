💬 MERN Chat App

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for instant messaging.
This app allows users to sign up, log in, create groups, and chat in real time with notifications and profile management.

🚀 Features

🔐 User authentication & authorization (JWT-based)

💬 One-to-one and group chats

⚡ Real-time messaging with Socket.IO

🔔 Instant notifications for new messages

🖼️ Profile & group picture support

📱 Responsive UI with TailwindCSS + DaisyUI

🛠️ Tech Stack

Frontend: React, Zustand, TailwindCSS, DaisyUI

Backend: Node.js, Express, MongoDB

Real-time: Socket.IO

Authentication: JWT

⚡ Getting Started
1. Clone the repository
git clone https://github.com/your-username/mern-chat-app.git
cd mern-chat-app

2. Install dependencies
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install

3. Set up environment variables

Create a .env file in the backend folder and configure:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4. Run the app
# Run backend
cd backend
npm start

# Run frontend (in another terminal)
cd frontend
npm start


Visit 👉 http://localhost:3000

📂 Project Structure
mern-chat-app/
├── backend/        # Express + MongoDB API
│   ├── models/     
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/       # React + Tailwind client
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md
└── package.json
