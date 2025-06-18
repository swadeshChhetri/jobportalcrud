# 💼 MERN Stack Job Portal – Internship Assignment

This is a **Job Portal CRUD Application** developed using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with **Tailwind CSS**. The project was built as part of the screening process for the **MERN Web Development Internship** at **Ecera System LLC**.

---

## 🚀 Features

- ✅ Add new job listings  
- 📝 Edit existing job posts  
- 🗑️ Delete jobs with confirmation  
- 👀 View detailed job info  
- 📱 Responsive design using Tailwind CSS  
- 🔄 Loader and toast notifications for better UX

---

## 🛠️ Tech Stack

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | React.js, Tailwind CSS |
| Backend     | Node.js, Express.js  |
| Database    | MongoDB + Mongoose   |
| Tooling     | Vite, Postman, Toastify |

---

## 📁 Folder Structure

```
job-portal/
├── backend/              # Node + Express backend
│   ├── config/           # DB config and env
│   ├── controllers/      # Route handlers
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API endpoints
│   └── server.js         # Entry point
│
├── frontend/             # React frontend
│   ├── components/       # Reusable UI components
│   ├── pages/            # Job list, add, edit, detail
│   ├── services/         # Axios API calls
│   └── App.js            # Main app file
```

---

## 📦 Getting Started

### 1. Clone the repository

```bash for backend
git clone https://github.com/swadeshChhetri/jobportalbackend.git
cd jobportalbackend

```bash for frontend
git clone https://github.com/swadeshChhetri/jobportalcrud.git
cd jobportalcrud
```

### 2. Start the backend

```bash
cd jobportalbackend
npm install
node server.js
```

### 3. Start the frontend

```bash
cd jobportalcrud
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧪 API Endpoints

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| GET    | `/api/jobs`      | Fetch all jobs      |
| GET    | `/api/jobs/:id`  | Get job by ID       |
| POST   | `/api/jobs`      | Create a new job    |
| PUT    | `/api/jobs/:id`  | Update a job        |
| DELETE | `/api/jobs/:id`  | Delete a job        |

---

## 📹 Demo Video

> https://youtu.be/Bygdi4mLIAg

---

## 📜 License

This project is for educational and internship assignment purposes only.

---

## 🙋‍♂️ Developed By

**Swadesh Chhetri**  
MERN Stack Developer  
[LinkedIn](www.linkedin.com/in/swadeshchhetri) | [GitHub](https://github.com/swadeshChhetri)
