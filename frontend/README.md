
# 🧠 Interview Prep AI

A full MERN (MongoDB, Express, React, Node.js) application that helps users **prepare for technical interviews** with the power of **AI-generated questions and explanations**.

---

## 🚀 Features

- 🤖 **AI-Powered Question Generation** — Automatically creates interview questions based on your chosen role, skills, and experience.
- 📚 **Learn More Drawer** — Get detailed AI explanations for each question.
- 💾 **Save & Manage Sessions** — Create, view, and delete interview practice sessions.
- 🔐 **Authentication System** — Secure login and sign-up with user profiles.
- 🖼️ **Profile Photo Upload** — Upload and preview your profile image instantly.
- 🧩 **Modern UI** — Built using React, TailwindCSS, and Framer Motion.
- ☁️ **Reusable Components** — Clean and modular code for easy updates.

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React, Vite, TailwindCSS, Framer Motion |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| AI Integration | Custom API (OpenAI or similar) |
| Auth | JWT Authentication |
| Others | Axios, Moment.js, React Hot Toast |

---

## 📁 Project Structure

```
frontend/
│
├── src/
│   ├── components/        # Reusable UI components (Modal, Drawer, etc.)
│   ├── context/           # Global state (UserContext)
│   ├── pages/             # Main pages (LandingPage, Dashboard, InterviewPrep, etc.)
│   ├── utils/             # Helper functions and API configuration
│   ├── App.jsx            # Root React component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
│
├── public/                # Static assets (images, icons)
│
└── package.json           # Dependencies and scripts
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/interview-prep-ai.git
cd interview-prep-ai/frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the project
```bash
npm run dev
```

### 4️⃣ Open in your browser
```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `frontend` folder with these values:

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Interview Prep AI
```

---

## 🧩 Important Files

| File | Description |
|------|--------------|
| `src/context/userContext.jsx` | Manages user authentication and global state |
| `src/pages/LandingPage.jsx` | Main landing page |
| `src/pages/Home/Dashboard.jsx` | User dashboard showing all interview sessions |
| `src/pages/InterviewPrep/InterviewPrep.jsx` | Core page for AI-generated questions |
| `src/utils/axiosInstance.js` | Axios setup for API requests |
| `src/utils/apiPaths.js` | All backend API endpoints |
| `src/utils/helper.js` | Utility functions (email validation, etc.) |
| `src/utils/uploadImage.js` | Handles image uploads |

---

## 🎨 UI Preview

```
Landing Page → Dashboard → InterviewPrep → Learn More Drawer
```

Each page has a consistent clean UI with animations and responsive design.

---

## 🧠 How It Works (Simple Explanation)

1. The user signs up or logs in.
2. They create a new **interview session** by entering their role, experience, and topics.
3. The app sends this info to the backend AI API.
4. The AI returns **10 questions and answers**.
5. The user can:
   - Pin important questions
   - Ask for explanations (Learn More)
   - Add more questions later

---

## 📸 Example

```text
Role: Frontend Developer
Experience: 2 Years
Topics: React, JavaScript, CSS

→ The AI generates 10 related questions with answers.
→ User can click "Learn More" to get deeper explanations.
```

---

## 🧱 Reusable Components

- `Modal` → For Login, SignUp, and Delete confirmation
- `Drawer` → For Learn More explanations
- `ProfileInfoCard` → Shows user info and Logout
- `QuestionCard` → Displays each question and answer
- `CreateSessionForm` → For new interview sessions

---

## 🧪 Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run the app locally |
| `npm run build` | Build production files |
| `npm run preview` | Preview the build |
| `npm run lint` | Run ESLint checks |

---

## 👨‍💻 Author

**Recep Demir**  
Full-Stack Developer (React | Node.js)  
📧 Email: your.email@example.com  
🌐 GitHub: [your-username](https://github.com/your-username)

---

## ❤️ License

This project is licensed under the **MIT License**.  
Feel free to use and modify it for your own learning or projects.

---

## ✨ Summary

Interview Prep AI helps developers practice real-world interview questions with AI.  
Clean design, reusable components, and powerful automation make it an ideal personal learning tool.
