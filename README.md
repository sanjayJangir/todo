# 📝 MERN To-Do App with Authentication

A modern, secure, and feature-rich **To-Do List application** built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) featuring **JWT-based user authentication**. This application allows users to register, log in, and manage their personal tasks with a clean, responsive interface.

## 🌟 Key Features

### 🔐 Authentication & Security

- **User Registration & Login** with email/password
- **JWT-based Authentication** for secure session management
- **Password Hashing** using bcrypt for enhanced security
- **Protected Routes** ensuring only authenticated users can access their tasks

### 📝 Task Management

- **Create, Read, Update, Delete (CRUD)** operations for tasks
- **Personal Task Lists** - each user sees only their own tasks
- **Real-time Updates** with immediate UI feedback
- **Task Status Management** (completed/pending)

### 🎨 User Experience

- **Responsive Design** that works on desktop and mobile
- **Clean & Modern UI** with intuitive navigation
- **Loading States** and error handling for better UX
- **Form Validation** with user-friendly error messages

### 🔧 Technical Features

- **RESTful API** with proper HTTP status codes
- **CORS Configuration** for secure cross-origin requests
- **Environment Variables** for secure configuration management
- **Modular Code Structure** for maintainability

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern UI library with hooks
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API communication
- **CSS3** - Styling with modern CSS features

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security

- **JWT (JSON Web Tokens)** - Stateless authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Development Tools

- **Nodemon** - Auto-restart server during development
- **dotenv** - Environment variable management

## 📁 Project Structure

```
todo/
├── client/                 # React frontend application
│   ├── public/            # Static files
│   │   ├── index.html     # Main HTML file
│   │   └── favicon.ico    # App icon
│   ├── src/               # Source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components (Auth, Todo)
│   │   ├── services/      # API service functions
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   ├── package.json       # Frontend dependencies
│   └── README.md          # Frontend documentation
│
├── server/                # Node.js backend application
│   ├── controllers/       # Business logic handlers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API route definitions
│   ├── middleware/       # Custom middleware (auth, validation)
│   ├── config/           # Configuration files
│   ├── .env              # Environment variables
│   ├── app.js            # Express app setup
│   └── package.json      # Backend dependencies
│
├── .gitignore            # Git ignore rules
├── LICENSE               # MIT License
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)

### 1. Clone the Repository

```bash
git clone https://github.com/sanjayJangir/todo
cd todo
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

#### Environment Configuration

Create a `.env` file in the `server/` directory with the following variables:

**Option 1: Copy from example file**

```bash
cp .env.example .env
# Then edit .env with your actual values
```

**Option 2: Create manually**

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://localhost:27017/todo-app
# For MongoDB Atlas: mongodb+srv://<username>:<password>@<cluster>.mongodb.net/todo-app?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Optional: Logging
LOG_LEVEL=debug

# Optional: Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

> **Note**: A `.env.example` file is provided as a template. Copy it to `.env` and update the values with your actual configuration.

#### Start the Backend Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The backend API will be running at `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal and navigate to the client directory:

```bash
cd client
npm install
```

#### Start the React Development Server

```bash
npm start
```

The React application will open automatically at `http://localhost:3000`

### 4. Database Setup

#### Option A: Local MongoDB

1. Install MongoDB locally
2. Start MongoDB service
3. The app will automatically create the database

#### Option B: MongoDB Atlas (Cloud)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace the `MONGO_URI` in your `.env` file

## 📚 API Documentation

### Authentication Endpoints

#### Register User

```
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Login User

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Todo Endpoints

#### Get All Todos (Protected)

```
GET /api/todos
Authorization: Bearer <jwt_token>
```

#### Create Todo (Protected)

```
POST /api/todos
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "completed": false
}
```

#### Update Todo (Protected)

```
PUT /api/todos/:id
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "Updated task title",
  "completed": true
}
```

#### Delete Todo (Protected)

```
DELETE /api/todos/:id
Authorization: Bearer <jwt_token>
```

## 🔧 Environment Variables Explained

| Variable      | Description                | Default               | Required |
| ------------- | -------------------------- | --------------------- | -------- |
| `PORT`        | Server port number         | 5000                  | Yes      |
| `NODE_ENV`    | Environment mode           | development           | No       |
| `MONGO_URI`   | MongoDB connection string  | -                     | Yes      |
| `JWT_SECRET`  | Secret key for JWT signing | -                     | Yes      |
| `JWT_EXPIRE`  | JWT token expiration time  | 7d                    | No       |
| `CORS_ORIGIN` | Allowed origin for CORS    | http://localhost:3000 | No       |
| `LOG_LEVEL`   | Logging level              | debug                 | No       |

## 🧪 Testing

### Backend Testing

```bash
cd server
npm test
```

### Frontend Testing

```bash
cd client
npm test
```

## 🚀 Deployment

### Backend Deployment (Heroku/Render/Vercel)

1. Set environment variables in your hosting platform
2. Ensure `NODE_ENV=production`
3. Deploy using your platform's deployment method

### Frontend Deployment (Vercel/Netlify)

1. Build the React app: `npm run build`
2. Deploy the `build` folder to your hosting platform
3. Update `CORS_ORIGIN` in backend to match your frontend URL

## 🔮 Future Enhancements

### Planned Features

- [ ] **Task Categories & Tags** - Organize tasks by type
- [ ] **Due Dates & Reminders** - Set deadlines and notifications
- [ ] **Task Priority Levels** - High, Medium, Low priority
- [ ] **Search & Filter** - Find tasks quickly
- [ ] **Bulk Operations** - Select multiple tasks for actions
- [ ] **Data Export** - Export tasks to CSV/PDF
- [ ] **Dark Mode** - Toggle between light and dark themes
- [ ] **Mobile App** - React Native version
- [ ] **Real-time Collaboration** - Share tasks with team members
- [ ] **File Attachments** - Attach files to tasks
- [ ] **Task Templates** - Pre-defined task structures
- [ ] **Analytics Dashboard** - Task completion statistics

### Technical Improvements

- [ ] **Unit & Integration Tests** - Comprehensive test coverage
- [ ] **API Rate Limiting** - Prevent abuse
- [ ] **Input Validation** - Enhanced form validation
- [ ] **Error Logging** - Better error tracking
- [ ] **Performance Optimization** - Code splitting and caching
- [ ] **PWA Support** - Progressive Web App features
- [ ] **Offline Support** - Work without internet connection

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🐛 Bug Reports

If you find a bug, please create an issue with:

- **Bug description** - What happened?
- **Steps to reproduce** - How can we reproduce it?
- **Expected behavior** - What should happen?
- **Screenshots** - If applicable
- **Environment** - OS, browser, Node.js version

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sanjay Jangir**

- Email: [sk857065@gmail.com](mailto:sk857065@gmail.com)
- GitHub: [@sanjayJangir](https://github.com/sanjayJangir)
- LinkedIn: [Sanjay Jangir](https://linkedin.com/in/sanjay-jangir)

## 🙏 Acknowledgments

- **MongoDB** for the excellent database
- **Express.js** team for the robust framework
- **React** team for the amazing UI library
- **Node.js** community for the runtime environment
- All contributors and users of this project

---

⭐ **Star this repository if you found it helpful!**
