const express = require("express");
const bookRoutes = require("./src/presentation/routes/bookRoutes");
const corsMiddleware = require("./src/presentation/middlewares/cors");
const errorHandler = require("./src/presentation/middlewares/errorHandler");

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/books", bookRoutes);
app.use(errorHandler);

const PORT = 3000;
const HOST = "0.0.0.0";

// 🔑 ใส่ IP VM ตรงนี้ (ชัดเจนตอน demo)
const VM_IP = "192.168.56.101";

app.listen(PORT, HOST, () => {
  console.log("\n🚀 Backend API is running!");
  console.log("────────────────────────────");
  console.log(`🔗 API Base : http://${VM_IP}:${PORT}`);
  console.log(`📚 Books API: http://${VM_IP}:${PORT}/api/books`);
  console.log("────────────────────────────\n");
});

