🌿 Nature Tech

Modern full-stack e-commerce platform built with React + TypeScript and Java + Spring Boot, featuring a dynamic product catalog powered by a real REST API and PostgreSQL database.

Nature Tech is currently under active development, evolving from a frontend-focused prototype into a complete scalable full-stack application with real backend integration, relational persistence and modern software architecture.

👉 Live Demo
Nature Tech Demo

🚧 Development Status

Active development in progress.

The project already includes:

Real backend integration
Dynamic product catalog
PostgreSQL persistence
Dockerized database infrastructure
REST API architecture
Frontend ↔ backend communication

The application is continuously evolving with new features, architectural improvements and backend expansion.

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
User interaction
Backend Responsibilities
REST API exposure
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
Dynamic Product Catalog
Products loaded directly from backend API
Real database persistence
Product categories
Backend-driven rendering
Image integration through API
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
🔌 REST API
Products Endpoint
Method	Endpoint	Description
GET	/products	List all products
GET	/products/{id}	Get product by ID
POST	/products	Create product
PUT	/products/{id}	Update product
DELETE	/products/{id}	Delete product
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

The project migration included:

Transition from mock data to real API integration
PostgreSQL relational database integration
Dockerized infrastructure
Backend redesign with Spring Boot
Layered architecture implementation
Dynamic product rendering
Removal of hardcoded frontend product data
🚀 Running Locally
Requirements
Node.js
Java JDK 17+
Docker
Backend
cd backend-java

docker compose up -d

.\mvnw.cmd spring-boot:run

API available at:

http://localhost:8080/products
Frontend
cd frontend

npm install

npm run dev

Frontend available at:

http://localhost:3000
📋 Roadmap
In Progress
JWT authentication
Frontend product creation flow
Checkout system
Admin panel
Improved API validation
Frontend state optimization
Planned
Order management
User accounts
Payment integration
Automated testing
Deployment pipeline improvements
🌐 Deployment

Frontend deployed on Vercel:

Nature Tech Live Demo

👨‍💻 Author

Paulo Emilio de Toledo Jr

LinkedIn
GitHub
📄 License

MIT License
