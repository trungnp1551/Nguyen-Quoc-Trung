import http from "http";
import prisma from "./config/db";
import app from "./app";

// Create HTTP server
const server = http.createServer(app);

// Start the server
const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);

  // Ensure database connection
  try {
    await prisma.$connect();
    console.log("✅ Connected to database");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
});

export { server };
