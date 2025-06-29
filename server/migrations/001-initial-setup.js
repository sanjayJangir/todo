/**
 * Initial database setup migration
 * Creates collections and indexes for the todo app
 */

module.exports = {
  async up(db) {
    console.log("Running initial setup migration...");

    // Create users collection with indexes
    const usersCollection = db.collection("users");
    await usersCollection.createIndex({ email: 1 }, { unique: true });
    await usersCollection.createIndex({ username: 1 }, { unique: true });
    await usersCollection.createIndex({ createdAt: 1 });

    // Create todos collection with indexes
    const todosCollection = db.collection("todos");
    await todosCollection.createIndex({ userId: 1 });
    await todosCollection.createIndex({ completed: 1 });
    await todosCollection.createIndex({ createdAt: 1 });
    await todosCollection.createIndex({ updatedAt: 1 });

    // Create compound index for user's todos
    await todosCollection.createIndex({ userId: 1, completed: 1 });

    console.log("✅ Initial setup migration completed");
  },

  async down(db) {
    console.log("Rolling back initial setup migration...");

    // Drop indexes
    const usersCollection = db.collection("users");
    await usersCollection.dropIndex("email_1");
    await usersCollection.dropIndex("username_1");
    await usersCollection.dropIndex("createdAt_1");

    const todosCollection = db.collection("todos");
    await todosCollection.dropIndex("userId_1");
    await todosCollection.dropIndex("completed_1");
    await todosCollection.dropIndex("createdAt_1");
    await todosCollection.dropIndex("updatedAt_1");
    await todosCollection.dropIndex("userId_1_completed_1");

    console.log("✅ Initial setup migration rolled back");
  },
};
