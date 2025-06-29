# 🖥️ Server - MERN Todo App Backend

Node.js/Express server with MongoDB database, JWT authentication, and migration support.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Yarn package manager

### Installation

```bash
cd server
yarn install
```

### Environment Setup

```bash
cp .env.example .env
# Edit .env with your configuration
```

### Start Development Server

```bash
yarn dev
```

## 🗄️ Database Management

### Migrations

This project uses `migrate-mongo` for database migrations.

#### Available Commands:

```bash
# Create a new migration
yarn migrate:create <migration-name>

# Run all pending migrations
yarn migrate:up

# Rollback last migration
yarn migrate:down

# Check migration status
yarn migrate:status

# Custom migration script
node scripts/migrate.js <command>
```

#### Examples:

```bash
# Create a migration to add user roles
yarn migrate:create add-user-roles

# Run migrations
yarn migrate:up

# Check status
yarn migrate:status
```

### Seeding

Populate the database with sample data:

```bash
yarn seed
```

This will create:

- 3 sample users (admin, user1, user2)
- 5 sample todos
- Proper password hashing

#### Sample Login Credentials:

- **Admin**: admin@example.com / admin123
- **User1**: user1@example.com / user123
- **User2**: user2@example.com / user123

## 📁 Project Structure

```
server/
├── config/           # Configuration files
├── controllers/      # Route controllers
├── middleware/       # Custom middleware
├── migrations/       # Database migrations
├── models/          # MongoDB schemas
├── routes/          # API routes
├── scripts/         # Utility scripts
├── seeds/           # Database seeding
├── app.js           # Express app
├── migrate-mongo-config.js  # Migration config
└── package.json     # Dependencies
```

## 🔧 Available Scripts

| Command               | Description                           |
| --------------------- | ------------------------------------- |
| `yarn dev`            | Start development server with nodemon |
| `yarn start`          | Start production server               |
| `yarn migrate:create` | Create new migration                  |
| `yarn migrate:up`     | Run migrations                        |
| `yarn migrate:down`   | Rollback migration                    |
| `yarn migrate:status` | Check migration status                |
| `yarn seed`           | Seed database with sample data        |

## 🗃️ Database Collections

### Users Collection

- `_id`: ObjectId
- `username`: String (unique)
- `email`: String (unique)
- `password`: String (hashed)
- `role`: String (admin/user)
- `createdAt`: Date
- `updatedAt`: Date

### Todos Collection

- `_id`: ObjectId
- `userId`: ObjectId (ref: users)
- `title`: String
- `description`: String
- `completed`: Boolean
- `priority`: String (high/medium/low)
- `createdAt`: Date
- `updatedAt`: Date

## 🔐 Authentication

- JWT-based authentication
- Password hashing with bcrypt
- Protected routes middleware
- Role-based access control

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Todos

- `GET /api/todos` - Get user's todos
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

## 🛠️ Development

### Adding New Migrations

1. Create migration:

   ```bash
   yarn migrate:create add-new-feature
   ```

2. Edit the generated file in `migrations/`

3. Run migration:
   ```bash
   yarn migrate:up
   ```

### Database Reset

To completely reset the database:

```bash
node scripts/migrate.js reset
```

### Custom Migration Script

Use the custom migration script for advanced operations:

```bash
node scripts/migrate.js help
```

## 🔍 Troubleshooting

### Migration Issues

- Ensure MongoDB is running
- Check `migrate-mongo-config.js` configuration
- Verify environment variables

### Connection Issues

- Check `MONGO_URI` in `.env`
- Ensure MongoDB service is running
- Verify network connectivity

## 📚 Additional Resources

- [migrate-mongo Documentation](https://github.com/seppevs/migrate-mongo)
- [MongoDB Node.js Driver](https://docs.mongodb.com/drivers/node/)
- [Express.js Documentation](https://expressjs.com/)
- [JWT.io](https://jwt.io/)
