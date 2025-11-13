# 🖥️ Blog Frontend

A modern **React & Redux** frontend for a blog application with **user authentication, posts, comments, categories, and profile management**. Fully responsive and interactive! 🚀

---

## 🌟 Features

- 🧑‍💻 User Authentication: Register, Login, Forgot Password, Reset Password
- 🖼️ Profile Management: Upload profile photo, edit details, delete account
- ✍️ Posts: Create, edit, delete, like/unlike posts
- 💬 Comments: Add, edit, delete comments on posts
- 📂 Categories: View posts by category
- 🔍 Pagination & Search: Browse posts with pagination and search/filter functionality
- 🔔 Notifications: Toast notifications for actions
- 📱 Responsive Design: Works perfectly on desktop & mobile
- ⚡ Admin Dashboard (Optional): Manage posts, comments, categories, and users

---

## 🧰 Technologies & Tools Used

- ⚛️ **React 19** – UI library
- 🧭 **React Router DOM 7** – Client-side routing
- 🧠 **Redux Toolkit** – State management
- 🔗 **Axios** – API requests
- 🗓️ **Day.js** – Date formatting
- 🔔 **React Toastify** – Toast notifications
- 💬 **SweetAlert** – Confirmation dialogs
- ⏳ **React Loader Spinner** – Global loading indicators
- 🧪 **Testing Library** – Unit and integration testing
- 🎨 **Custom CSS / TailwindCSS** – Responsive design

---

## 🛠️ Project Structure

```
src/
│─ components/
│  ├─ Header.jsx
│  ├─ Footer.jsx
│  ├─ PostList.jsx
│  ├─ PostItem.jsx
│  ├─ CommentList.jsx
│  ├─ AddComment.jsx
│  └─ ...
│
│─ pages/
│  ├─ Home.jsx
│  ├─ PostDetails.jsx
│  ├─ Profile.jsx
│  ├─ Register.jsx
│  ├─ Login.jsx
│  ├─ ForgotPassword.jsx
│  ├─ ResetPassword.jsx
│  └─ ...
│
│─ redux/
│  ├─ slices/
│  │  ├─ authSlice.js
│  │  ├─ postsSlice.js
│  │  ├─ commentsSlice.js
│  │  └─ ...
│  └─ store.js
│
│─ App.jsx
│─ index.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Backend API running (any server with endpoints for users, posts, comments, categories)

### Installation

```bash
git clone https://github.com/osamadweikat/blog-frontend.git
cd blog-frontend
npm install
npm start
```

**Environment Variables (.env)**

```
REACT_APP_API_URL=http://localhost:3000/api
```

---

## 🌐 Pages & Components

### Pages

- Home → Display list of posts with pagination
- Post Details → View a single post with comments and likes
- Profile → User profile with posts, edit profile, and delete account
- Register / Login / Forgot Password / Reset Password → Authentication forms

### Components

- Header / Footer → Navigation and footer section
- PostList / PostItem → Reusable components to display posts
- CommentList / AddComment → Display and add comments
- UpdatePostModal / UpdateCommentModal → Edit posts/comments in a modal
- Pagination → Navigate between pages of posts
- Admin Tables → Manage posts, comments, categories, users (optional admin panel)

---

## 🎨 Styling

- Fully responsive using TailwindCSS and custom CSS
- Elegant modals, buttons, and forms
- Smooth transitions and hover effects
- Notifications with Toastify
- Confirmations with SweetAlert

---

## 💡 Tips

- Connect this frontend with a backend API using Axios
- Store user session with Redux Toolkit + localStorage
- Use environment variable for API base URL to switch between dev & prod

---

Made with ❤️ by **Osama Dweikat** 🖤💻✨
