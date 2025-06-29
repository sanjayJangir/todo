/**
 * Database seeding script
 * Populates the database with initial data for development/testing
 */

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Sample data
const sampleUsers = [
  {
    username: "admin",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    username: "user1",
    email: "user1@example.com",
    password: "user123",
    role: "user",
  },
  {
    username: "user2",
    email: "user2@example.com",
    password: "user123",
    role: "user",
  },
];

const sampleTodos = [
  {
    title: "Complete project setup",
    description: "Set up the MERN todo app with TypeScript and Tailwind",
    completed: true,
    priority: "high",
  },
  {
    title: "Implement authentication",
    description: "Add JWT-based user authentication",
    completed: false,
    priority: "high",
  },
  {
    title: "Create API endpoints",
    description: "Build RESTful API for todo operations",
    completed: false,
    priority: "medium",
  },
  {
    title: "Design UI components",
    description: "Create responsive React components with Tailwind",
    completed: false,
    priority: "medium",
  },
  {
    title: "Write documentation",
    description: "Document the API and setup instructions",
    completed: false,
    priority: "low",
  },
];

async function seedDatabase() {
  try {
    console.log("🌱 Starting database seeding...");

    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/todo-app"
    );
    console.log("✅ Connected to MongoDB");

    // Get collections
    const db = mongoose.connection.db;
    const usersCollection = db.collection("users");
    const todosCollection = db.collection("todos");

    // Clear existing data
    await usersCollection.deleteMany({});
    await todosCollection.deleteMany({});
    console.log("🧹 Cleared existing data");

    // Seed users
    const hashedUsers = await Promise.all(
      sampleUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );

    const insertedUsers = await usersCollection.insertMany(hashedUsers);
    console.log(`✅ Seeded ${insertedUsers.length} users`);

    // Seed todos (assign to first user)
    const userId = insertedUsers[0]._id;
    const todosWithUser = sampleTodos.map((todo) => ({
      ...todo,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const insertedTodos = await todosCollection.insertMany(todosWithUser);
    console.log(`✅ Seeded ${insertedTodos.length} todos`);

    console.log("\n🎉 Database seeding completed successfully!");
    console.log("\n📋 Sample login credentials:");
    console.log("Admin: admin@example.com / admin123");
    console.log("User1: user1@example.com / user123");
    console.log("User2: user2@example.com / user123");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Run the seed function
seedDatabase();
