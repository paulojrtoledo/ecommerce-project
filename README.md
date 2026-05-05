🛒 E-Commerce Project

Full-stack e-commerce platform built with React (TypeScript) and Java (Spring Boot) — featuring a dynamic product catalog powered by a real backend API and PostgreSQL database.

👉 Live Demo

🚧 Status

Active development. Core product flow is functional with full frontend ↔ backend integration. Authentication and checkout in progress.

🏗️ Architecture
Frontend (React + TypeScript)
        ↓
Backend (Spring Boot - Java)
        ↓
PostgreSQL (Docker)
Frontend consumes REST API (/products)
Backend handles business logic and persistence
Database runs in Docker container
💻 Technologies
Frontend
React + TypeScript
Material-UI
React Router
Axios
Context API (cart, favorites, theme)
Backend (Current)
Java 17+ / Spring Boot
Spring Web
Spring Data JPA (Hibernate)
PostgreSQL
Maven
Bean Validation
Docker (database)
Backend (Legacy)
Node.js + Express + TypeScript
Firebase Firestore

⚠️ The Node.js backend is kept temporarily as legacy. The current backend is the Spring Boot implementation in /backend-java.

✅ Implemented Features
Frontend Pages
Route	Page	Description
/	HomePage	Landing page with sections and highlights
/produtos	ProductsPage	Dynamic product catalog from API
/meu-carrinho	CartPage	Shopping cart with calculations
/favoritos	FavoritesPage	Favorites list
/login	LoginPage	UI ready (backend integration pending)
Product Catalog (Dynamic)
Products are fetched from backend API
Categories:
Hardware
Gadgets & Peripherals
Smart Devices
Data is no longer hardcoded
Backend REST API (/products)
Method	Route	Function
GET	/products	List all products
GET	/products/:id	Get product by ID
POST	/products	Create product
PUT	/products/:id	Update product
DELETE	/products/:id	Delete product
Product Model
{
  "id": 1,
  "name": "RTX 4060",
  "category": "Hardware",
  "price": 2999,
  "stock": 10,
  "description": "High performance GPU",
  "imageUrl": "/placadevideo-nt.webp"
}
Database
PostgreSQL running via Docker
Data persistence using JPA/Hibernate
Seed script initializes product catalog (idempotent)
Shopping Cart
Add / remove items
Quantity adjustment
Shipping calculation
Persisted in localStorage
Favorites
Add / remove items
Persisted in localStorage
Theme
Light / Dark mode
Persisted in localStorage
📋 Pending
 Product creation via frontend (POST integration)
 Authentication (JWT)
 Checkout flow
 Admin panel
 API validation improvements
 Frontend state optimization (avoid duplicated API calls)
🚀 Running Locally
Prerequisites
Node.js
Java (JDK 17+)
Docker
Backend (Spring Boot)
cd backend-java
docker compose up -d

Run backend (IntelliJ or terminal):

.\mvnw.cmd spring-boot:run

API available at:

http://localhost:8080/products
Frontend
cd frontend
npm install
npm run dev

Access:

http://localhost:3000
🌐 Deploy

Frontend deployed on Vercel
👉 https://ecommerce-project-abt7.vercel.app/

📄 License

MIT License

👨‍💻 Author

Paulo Emilio de Toledo Jr
LinkedIn: www.linkedin.com/in/pauloemilio-tech 

GitHub

🧠 O que esse README comunica agora
✔ projeto fullstack real
✔ integração frontend ↔ backend
✔ uso de banco relacional
✔ arquitetura moderna
✔ evolução de Node → Java (muito forte)
