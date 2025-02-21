# 🚀 ExpressJS + TypeScript + Prisma Backend

This is a REST API backend built with **ExpressJS**, **TypeScript**, and **Prisma** for managing products.

---

## 📌 1. System Requirements

Before running the project, ensure you have the following installed:

- **Node.js** (>= 18.18.0) - [Download here](https://nodejs.org/)
- **PostgreSQL** (or another database, configurable in `.env`)
- **Git** for cloning the repository

---

## 📌 2. Installation & Running the Project

### **1️⃣ Clone the Repository**

```sh
git clone <repository-url>
cd <repository-folder>
```

### **2️⃣ Install Dependencies**

Run the following command to install the required packages:

```sh
npm install
```

---

### **3️⃣ Configure Environment Variables (`.env`)**

Create a `.env` file in the root directory and add the following variables:

```ini
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
PORT=5000
```

Replace `user`, `password`, and `mydatabase` with your actual database credentials.

---

### **4️⃣ Run Database Migration (Prisma)**

If this is your first time running the project, create database tables with:

```sh
npx prisma migrate dev --name init
```

To inspect your database, run:

```sh
npx prisma studio
```

---

### **5️⃣ Start the Server**

For development mode:

```sh
npm run start:dev
```

For production mode:

```sh
npm run build
npm run start
```

---

## 📌 3. API Endpoints

| Method   | Endpoint            | Description              | Request Body (JSON)                                                                   |
| -------- | ------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| `POST`   | `/api/products`     | Create a new product     | { "name": "Product A", "description": "Sample product", "price": 99.99, "stock": 10 } |
| `GET`    | `/api/products`     | Retrieve all products    |                                                                                       |
| `GET`    | `/api/products/:id` | Retrieve a product by ID |                                                                                       |
| `PUT`    | `/api/products/:id` | Update a product         | { "name": "Updated Product", "price": 79.99, "stock": 5 }                             |
| `DELETE` | `/api/products/:id` | Delete a product         |                                                                                       |

---

## 📌 4. Project Structure

```
 📂 problem5
 ┣ 📂 prisma          # Prisma schema & migrations (outside src)
 ┃ ┣ 📜 schema.prisma # Prisma schema file
 ┃ ┣ 📂 migrations    # Migration history
 ┣ 📂 src-project     # Main application code (inside src/)
 ┃ ┣ 📂 config         # Environment configurations
 ┃ ┣ 📂 controllers    # Handles incoming requests
 ┃ ┣ 📂 models         # Defines TypeScript models
 ┃ ┣ 📂 routes         # API route definitions
 ┃ ┣ 📂 services       # Business logic (CRUD operations)
 ┃ ┣ 📂 types          # Defines TypeScript types
 ┃ ┣ 📜 app.ts        # Express application setup
 ┃ ┣ 📜 index.ts       # Main entry point
 ┣ 📜 .env            # Environment variables
 ┣ 📜 package.json    # Project dependencies
 ┣ 📜 tsconfig.json   # TypeScript config
 ┗ 📜 README.md      # Project documentation

```

---

## 📌 5. Useful Commands

| Command                              | Description                        |
| ------------------------------------ | ---------------------------------- |
| `npm install`                        | Install dependencies               |
| `npm run start:dev`                  | Run the server in development mode |
| `npm run build`                      | Compile TypeScript to JavaScript   |
| `npm run start`                      | Run the server in production mode  |
| `npx prisma migrate dev --name init` | Run database migration             |
| `npx prisma studio`                  | Open the database management UI    |

---
