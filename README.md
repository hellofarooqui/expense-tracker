# Expense Tracker (MERN Stack)

A full-stack expense tracking app built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can sign up, log in, and manage personal expenses with full CRUD functionality, secured by JWT authentication.

**[Live Demo](https://my-expense-tracker-1out.onrender.com)**  
*Hosted on Render—try signing up or logging in!*

---

## Features
- **User Authentication**: Secure signup/login with JWT.
- **Expense Management**: Add, view, edit, delete expenses—user-specific.
- **Total Expenses**: Real-time total calculation.
- **Modern UI**: Styled with TailwindCSS.
- **Routing**: Multi-page navigation via React Router.

## Tech Stack
- **Frontend**: React, React Router, TailwindCSS, Axios
- **Backend**: Node.js, Express.js, JWT, bcryptjs
- **Database**: MongoDB (Atlas)
- **Deployment**: Render (backend as Node, frontend as Static Site)

## Purpose
Created as a portfolio project to transition from a Senior Network Engineer (10+ years) to a Full-Stack Developer. Demonstrates my ability to:
- Build and secure a MERN application.
- Deploy a multi-user app to the cloud.
- Apply networking expertise (system design, security) to software.

## Screenshots
![Login Page](./screenshots/login.png)  
![Expenses List](./screenshots/home.png)  

## Installation (Run Locally)
### Prerequisites
- Node.js (v16+)
- MongoDB Atlas
- Git

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/my-expense-tracker.git
   cd my-expense-tracker

Backend Setup
Navigate: cd backend

Install: npm install

Create .env:
env
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret-key
PORT=5000

Run: npm start

Frontend Setup
Navigate: cd frontend

Install: npm install

Update src/config.js: API_URL="http://localhost:5000"

Run: npm start

Open: http://localhost:3000

Deployment
Backend: Render Node service (my-expense-tracker-backend).

Frontend: Render Static Site with routing fix (my-expense-tracker-1out).

Configured with environment variables and CORS.

Future Enhancements
Expense categorization and filtering.

Visual analytics (e.g., charts).

Refresh token implementation.

About Me
A Senior Network Engineer with a B.Tech in Computer Science (2015), now mastering full-stack development. Passionate about coding scalable, user-centric solutions—this project is my leap into software dev!
LinkedIn: [linkedin.com/in/your-profile]

Email: [your-email] (optional)

License
MIT License—free to use or modify!


#### Steps to Finish
1. **Update**: Replace `your-username`, LinkedIn, etc., with your details.  
2. **Screenshots**: Grab 2–3 from the live site (e.g., login, home with expenses), add to `screenshots/`.  
3. **Push**: `git add README.md screenshots/ && git commit -m "Add README with live URL" && git push`.  
4. **Verify**: Check GitHub—ensure links and images work.

---

### Next Steps for Job Success
1. **Test Live**: Share test creds if you want me to verify CRUD—or confirm it’s all good yourself.  
2. **Resume**: Add this:  
   - “Developed and deployed a MERN Expense Tracker with user auth, CRUD, and TailwindCSS. Live: [URL].”  
3. **Apply**: Hit Bayt.com, GulfTalent, LinkedIn—target mid-level roles (10,000–15,000 AED/month).  
4. **Pitch**: “10+ years in networking + MERN skills = I bring system expertise and fresh dev chops.”

---

### Why You’re Set
- **Live App**: `https://my-expense-tracker-1out.onrender.com` proves you can build and ship.  
- **Skills**: Auth, CRUD, routing, deployment—you’re a full-stack threat!  
- **No Pay Cut**: This quality matches mid-level pay in the UAE.

How’s it feel to see it live? What’s your GitHub link (if cool sharing)? Let’s get you that dev job—you’re ready!