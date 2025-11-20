# 📇 MERN e-Card Generator

A full-stack **MERN** application that allows users to generate a personalized **digital e-card** by entering their Name, Description, Interests, and LinkedIn/Instagram profile URLs.  
The app validates user input, saves the data to MongoDB, and displays an interactive e-card UI.

---

## 🚀 Features

- 📝 **User Input Form** – Name, Description, Interests, Social Links  
- ⚡ **Real-time Rendering** of the e-Card  
- 🔍 **Form Validation** (frontend + backend using Zod)  
- 🗄️ **MongoDB Storage** for all generated cards  
- 🔗 **Dynamic Social Media Links**  
- 🎨 **Responsive UI** built using React  
- 🔐 **REST API (Express + Node.js)** for CRUD operations  

---

## 🛠️ Tech Stack

### **Frontend**
- React  
- React Hooks  
- Fetch API 
- CSS 

### **Backend**
- Node.js  
- Express.js  
- Zod (schema validation)

### **Database**
- MongoDB  

---

## 📂 Project Structure
```bash
MERN-Digital-e-Card-Creator-React-Express-MongoDB/
│
├── backend/                     # Express + Node.js backend
│   ├── db.js                    # MongoDB connection
│   ├── form.js                  # Zod validation schema
│   ├── index.js                 # Main server file (Express app)
│   ├── package.json
│   └── package-lock.json
│
├── frontend/                    # React + Vite frontend
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/              # Images, icons, etc.
│   │   ├── components/          # React components
│   │   │   ├── Card.jsx
│   │   │   ├── Card.module.css
│   │   │   ├── Form.jsx
│   │   │   ├── Form.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── .gitignore
│
└── README.md                    # Project documentation
```
