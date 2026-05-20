🌿 Nature Tech

Modern full-stack e-commerce platform built with React + TypeScript and Java + Spring Boot, featuring a dynamic product catalog powered by a real REST API and PostgreSQL database.

Nature Tech is currently evolving from a frontend-focused prototype into a scalable full-stack application with authentication, role-based authorization and modern backend architecture.

🚧 Development Status

Active development in progress.

Current implemented features include:

Real backend integration
Dynamic product catalog
PostgreSQL persistence
Dockerized database infrastructure
REST API architecture
JWT authentication
Role-based authorization
Admin product management
Frontend ↔ backend communication

The project continues evolving with new backend features, architectural improvements and scalability-focused enhancements.

🏗️ Architecture
Frontend (React + TypeScript)
        ↓
REST API (Spring Boot)
        ↓
PostgreSQL (Docker)
Frontend Responsibilities
Product rendering
Shopping cart logic
Favorites system
Theme management
API consumption
Authentication state
Protected routes
Admin interface
Backend Responsibilities
REST API exposure
JWT authentication
Authorization rules
Business logic
Data validation
Persistence layer
Database communication

💻 Technologies
Frontend
React
TypeScript
Material-UI
React Router
Axios
Context API
Backend
Java 17+
Spring Boot
Spring Security
JWT Authentication
Spring Web
Spring Data JPA
Hibernate
Bean Validation
Maven
Database & Infrastructure
PostgreSQL
Docker
Docker Compose

✨ Current Features
Authentication & Authorization
JWT-based authentication
Login and registration system
Protected frontend routes
Role-based access control (RBAC)
Admin-only product management routes
Persistent authentication using localStorage
Dynamic Product Catalog
Products loaded directly from backend API
Real database persistence
Product categories
Backend-driven rendering
Image integration through API
Admin Product Management

Authenticated admins can:

Create products
Edit products
Delete products
Manage categories
Access protected admin routes
Admin Route
/admin/products
Product Categories
Hardware
Gadgets & Peripherals
Smart Devices
Shopping Cart
Add/remove products
Quantity adjustment
Shipping calculation
Persistent cart using localStorage
Favorites System
Favorite/unfavorite products
Persistent favorites using localStorage
Theme System
Dark mode / Light mode
Persistent theme preferences

🔐 Security Architecture
Backend Route Protection
Public Routes
GET /products/**
GET /categories/**
POST /auth/register
POST /auth/login
Protected Admin Routes
POST /products/**
PUT /products/**
DELETE /products/**

Protected using:

.hasRole("ADMIN")
🔌 REST API
Authentication
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Authenticate user
GET	/auth/me	Get authenticated user
Products
Method	Endpoint	Description
GET	/products	List all products
GET	/products/{id}	Get product by ID
POST	/products	Create product
PUT	/products/{id}	Update product
DELETE	/products/{id}	Soft delete product
Categories
Method	Endpoint	Description
GET	/categories	List active categories
POST	/categories	Create category

🗃️ Database Structure

Example product model:

{
  "id": 1,
  "name": "RTX 4060",
  "category": "Hardware",
  "price": 2999,
  "stock": 10,
  "description": "High performance GPU",
  "imageUrl": "/placadevideo-nt.webp"
}
⚙️ Backend Architecture
Controller
   ↓
Service
   ↓
Repository
   ↓
PostgreSQL
Layers
Controller

Handles HTTP requests and API responses.

Service

Contains business rules and application flow.

Repository

Communicates with PostgreSQL using JPA/Hibernate.

🧠 Technical Evolution

Nature Tech originally started as a frontend-oriented e-commerce prototype and later evolved into a complete full-stack application with a modern Java backend architecture.

Major evolution milestones include:

Transition from mock data to real API integration
PostgreSQL relational database integration
Dockerized infrastructure
Backend redesign with Spring Boot
Layered architecture implementation
JWT authentication system
Role-based authorization
Dynamic product rendering
Admin product management
Removal of hardcoded frontend product data

🚀 Running Locally
Requirements
Node.js
Java JDK 17+
Docker
Backend
cd backend-java

docker compose up -d

./mvnw spring-boot:run

API available at:

http://localhost:8080
Frontend
cd frontend

npm install

npm run dev

Frontend available at:

http://localhost:3000

📋 Roadmap
In Progress
Checkout system
Improved API validation
Frontend state optimization
Better admin dashboard UX
Planned
Order management
User accounts
Payment integration
Automated testing
CI/CD pipeline
Deployment automation
Cloud infrastructure
Product search and filters

🌐 Deployment

Frontend deployed on Vercel:

Nature Tech Deployment

👨‍💻 Author

Paulo Emilio de Toledo Jr

LinkedIn
GitHub

📄 License

This project is under active development and intended for educational and portfolio purposes.
