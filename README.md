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
- Fetch API / Axios  
- CSS / Tailwind (optional)

### **Backend**
- Node.js  
- Express.js  
- Zod (schema validation)

### **Database**
- MongoDB  
- Mongoose ORM  

---

## 📂 Project Structure

mern-digital-e-card-creator-react-express-mongodb/
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── index.js
│ └── package.json
│
├── server/ # Express backend
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── form.js # Zod schema
│ ├── server.js
│ └── package.json
│
└── README.md
