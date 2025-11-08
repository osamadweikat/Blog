# 🖤✨ Blog Backend ✨🖤

Welcome to the **Blog Application Backend**! 🚀  
This is a **robust, modern, and scalable API** built with **Node.js & Express** to manage **Users, Posts, Comments, and Categories**.  
It supports **image uploads to Cloudinary**, **JWT authentication**, and **cloud database hosting on MongoDB Atlas** ☁️ via **CLIster**, fully deployable on **Render** 🌐.

---

## 🎯 Technologies & Tools Used

- 💻 **Node.js & Express** — Fast and lightweight server
- ☁️ **MongoDB Atlas** — Cloud database for all data
- 🌐 **Render** — Host and run the server online
- 📸 **Cloudinary** — Cloud storage for images
- 🔧 **CLIster** — Upload database to the cloud
- 🔄 **Nodemon** — Automatic server restart in development
- 🔒 **bcryptjs** — Secure password hashing
- 🔑 **JWT (jsonwebtoken)** — Authentication & authorization
- 🛠️ **Multer + Streamifier** — Memory buffer uploads to Cloudinary
- 📝 **Joi** — Input validation
- 🌱 **dotenv** — Environment variable management
- ⚡ **express-async-handler** — Async error handling

---

## 📂 Backend Folder Structure

```
backend/
│
├── app.js                     # ⚡ Main server file
├── package.json               # 📦 Project metadata & dependencies
├── .env                       # 🔑 Environment variables
│
├── models/                    # 🗂 MongoDB Schemas
│   ├── User.js
│   ├── Post.js
│   ├── Comment.js
│   └── Category.js
│
├── controllers/               # 🎛 Route controllers
│   ├── userController.js
│   ├── postController.js
│   ├── commentController.js
│   └── categoryController.js
│
├── routes/                    # 🌐 Express routes
│   ├── userRoutes.js
│   ├── postRoutes.js
│   ├── commentRoutes.js
│   └── categoryRoutes.js
│
├── middlewares/               # 🛡 Middleware
│   ├── authMiddleware.js      # 🔑 verifyToken & verifyAdmin
│   ├── errorMiddleware.js     # ⚠️ errorHandler & notFound
│   └── validateObjectId.js    # 🔍 ObjectId validation
│
├── utils/                     # 🔧 Utilities
│   └── cloudinary.js          # 📸 Upload & delete images
│
└── config/                    # ⚙️ Configuration
    └── db.js                  # 🌱 MongoDB connection
```

> This structure ensures **clean separation of concerns** and **maintainable, scalable code**.

---

## 🔗 API Endpoints

### **Users** 👤

| Method | Route                          | Description             |
| ------ | ------------------------------ | ----------------------- |
| POST   | `/api/users/register`          | 📝 Register new user    |
| POST   | `/api/users/login`             | 🔑 Login & get JWT      |
| GET    | `/api/users`                   | 👥 Get all users        |
| GET    | `/api/users/:id`               | 👤 Get single user      |
| PUT    | `/api/users/:id`               | ✏️ Update user          |
| DELETE | `/api/users/:id`               | 🗑 Delete user           |
| POST   | `/api/users/:id/profile-photo` | 📸 Upload profile photo |

### **Posts** 📝

| Method | Route                        | Description            |
| ------ | ---------------------------- | ---------------------- |
| POST   | `/api/posts`                 | ✏️ Create post         |
| GET    | `/api/posts`                 | 📖 Get all posts       |
| GET    | `/api/posts/:id`             | 🔍 Get single post     |
| PUT    | `/api/posts/:id`             | ✏️ Update post & image |
| DELETE | `/api/posts/:id`             | 🗑 Delete post          |
| PATCH  | `/api/posts/:id/toggle-like` | ❤️ Toggle like/unlike  |

### **Comments** 💬

| Method | Route               | Description         |
| ------ | ------------------- | ------------------- |
| POST   | `/api/comments`     | ✏️ Create comment   |
| GET    | `/api/comments`     | 📖 Get all comments |
| PUT    | `/api/comments/:id` | ✏️ Update comment   |
| DELETE | `/api/comments/:id` | 🗑 Delete comment    |

### **Categories** 🏷️

| Method | Route                 | Description           |
| ------ | --------------------- | --------------------- |
| POST   | `/api/categories`     | ✏️ Create category    |
| GET    | `/api/categories`     | 📖 Get all categories |
| DELETE | `/api/categories/:id` | 🗑 Delete category     |

---

## ⚙️ Middleware 🛡

- 🔑 **verifyToken** — Protect routes with JWT authentication
- 👑 **verifyTokenAndAdmin** — Admin-only access
- ⚠️ **errorHandler** — Handles errors globally
- ❌ **notFound** — Handles 404 routes
- 🔍 **validateObjectId** — Ensures valid MongoDB ObjectIds

---

## 🌟 Features ✨

- Full **CRUD** for Users, Posts, Comments & Categories
- **Virtual fields** for related data population (User → Posts, Post → Comments)
- **Direct Cloudinary image upload** using memory buffer
- **JWT-based authentication & authorization**
- Hosted backend on **Render** 🌐
- **MongoDB Atlas** for cloud DB with **CLIster** upload

---

## 🖤 Environment Variables 🔑

```env
PORT=5000
MONGO_URI=<Your MongoDB Atlas URI>
JWT_SECRET=<YourJWTSecret>
CLOUDINARY_CLOUD_NAME=<CloudinaryName>
CLOUDINARY_API_KEY=<CloudinaryKey>
CLOUDINARY_API_SECRET=<CloudinarySecret>
```

> Ensure `.env` is configured before running the server.

---

## 🚀 Running the Backend

1. **Install dependencies** 📦

```bash
npm install
```

2. **Run server (development)** 🔄

```bash
npm run dev
```

3. **Run server (production)** ⚡

```bash
npm start
```

> The server will connect to **MongoDB Atlas** and be accessible online if deployed on **Render**.

---

## 🎨 Tips & Notes

- Use **Postman/Insomnia** to test endpoints
- All endpoints are prefixed with `/api/`
- Images upload directly to Cloudinary; **no local storage needed**
- Keep your **JWT secret secure**
- **CLIster** allows fast cloud DB uploads

---

Made with ❤️ by **Osama Dweikat** 🖤💻✨
