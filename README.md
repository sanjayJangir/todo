# 📝 MERN To-Do App with Authentication

A secure and minimal **To-Do List app** built using the **MERN Stack** (MongoDB, Express.js, React, Node.js) with **JWT-based user authentication**. Users can register, log in, and manage their personal tasks.

---

## 🔧 Tech Stack

- **Frontend**: React, React Router DOM, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens), Bcrypt
- **Miscellaneous**: dotenv, cors, nodemon

---

## ✅ Features

- 🔐 User Authentication (Signup & Login)
- 🔒 JWT-based Protected Routes
- 📝 Add / Edit / Delete To-Do Tasks
- 📄 View Personal Task List
- 🧹 Clean UI with simple UX
- 🔄 RESTful API Integration

---

## 📁 Folder Structure

```

mern-todo-app/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Auth & ToDo pages
│ ├── services/ # Axios services
│ └── App.js
│
├── server/ # Node.js backend
│ ├── controllers/ # Business logic
│ ├── models/ # MongoDB models
│ ├── routes/ # API endpoints
│ ├── middleware/ # JWT Auth middleware
│ ├── .env # Environment variables
│ └── server.js

```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sanjayJangir/todo
cd todo
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

The React app should now be running at `http://localhost:3000` and backend API at `http://localhost:5000`.

---

## 🧪 Future Improvements

- [ ] Task filtering (by date, priority)
- [ ] Drag and drop support
- [ ] Google/Facebook OAuth
- [ ] Dark mode UI
- [ ] PWA support

---

## 📸 Screenshots

<!-- Add screenshots here when available -->

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributions

Feel free to fork and raise PRs! For major changes, open an issue first to discuss what you'd like to change.

---

## 📫 Contact

For any queries, feel free to reach out at:
**[sk857065@gmail.com](mailto:sk857065@gmail.com)**
GitHub: [@sanjayJangir](https://github.com/sanjayJangir)

```

---

Let me know if you'd like me to generate the actual codebase (`server/`, `client/`, etc.) or help you deploy it to Vercel/Render.
```
