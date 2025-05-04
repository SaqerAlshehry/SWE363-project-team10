# ♻️ Sharegoods

**Sharegoods** is a web application designed to help KFUPM students and staff **give away** or **trade** items they no longer need. The goal is to reduce waste and promote a sharing culture across campus by making it easier to find or share essentials without buying new ones.

---

## 🌟 Key Features

- 📸 Post items for sharing or trading  
- 🔍 Search and browse items by category or keyword  
- 🛠 Admin views for managing users and listings  
- 👤 User profiles with past trades, badges, and points *(Soon...)*  
- 💬 Leave reviews and comments on items *(Soon...)*  
- 🏆 Points and badges system to reward active users *(Soon...)*

---

## 📦 Technologies & Dependencies Used

- **MERN Stack** – MongoDB, Express.js, React, Node.js  
- **React** – for building the UI  
- **Vite** – lightning-fast build tool for React projects  
- **React Router DOM** – handles page navigation and routing  
- **React Icons** – for using popular icon sets  
- **CSS** – for custom styling and layout adjustments
- **Postman** - for testing endpoints

---

## 🛠️ Setup & Installation

### Prerequisites
- VS Code
- Node.js v18+ (or latest LTS)
- npm (comes with Node.js)
- MongoDB installed locally or set up via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🔐 Environment Variables

The backend uses environment variables to connect to MongoDB.

### `.env.example`

```env
MONGO_URI=your-mongodb-connection-string

### ▶️ Clone and Run the Project

```bash
# Clone the repository
git clone https://github.com/SaqerAlshehry/SWE363-project-team10.git

# Navigate into the frontend project folder
cd sharegoods-frontend

# Install frontend dependencies
npm install

# Run the frontend
npm run dev

# Open a new terminal window
cd sharegoods-backend

# Install backend dependencies
npm install

# Run the backend server
node server.js




