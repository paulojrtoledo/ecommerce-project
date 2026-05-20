# 🌿 Nature Tech

Modern full-stack e-commerce platform built with React + TypeScript and Java + Spring Boot, featuring a dynamic product catalog powered by a real REST API and PostgreSQL database.

Nature Tech is currently under active development, evolving from a frontend-focused prototype into a complete scalable full-stack application with real backend integration, relational persistence and modern software architecture.

---

# 🚧 Development Status

Active development in progress.

The project already includes:

- Real backend integration
- Dynamic product catalog
- PostgreSQL persistence
- Dockerized database infrastructure
- REST API architecture
- Frontend ↔ backend communication
- JWT authentication
- Role-based authorization
- Admin product management

The application is continuously evolving with new features, architectural improvements and backend expansion.

---

# 🏗️ Architecture

```text
Frontend (React + TypeScript)
        ↓
REST API (Spring Boot)
        ↓
PostgreSQL (Docker)
```

## Frontend Responsibilities

- Product rendering
- Shopping cart logic
- Favorites system
- Theme management
- API consumption
- Authentication flow
- Protected routes
- User interaction

## Backend Responsibilities

- REST API exposure
- JWT authentication
- Role-based authorization
- Business logic
- Data validation
- Persistence layer
- Database communication

---

# 💻 Technologies

## Frontend

- React
- TypeScript
- Material-UI
- React Router DOM
- Axios
- Context API

## Backend

- Java 17+
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Web
- Spring Data JPA
- Hibernate
- Bean Validation
- Maven

## Database & Infrastructure

- PostgreSQL
- Docker
- Docker Compose

---

# ✨ Current Features

## Dynamic Product Catalog

- Products loaded directly from backend API
- Real database persistence
- Product categories
- Backend-driven rendering
- Image integration through API

## Product Categories

- Hardware
- Gadgets & Peripherals
- Smart Devices
- Audio
- Smart Home
- Security

## Authentication & Authorization

- JWT authentication
- Login/Register flow
- Persistent authentication
- Protected routes
- Admin-only routes
- Role-based access control

## Admin Panel

- Product creation
- Product editing
- Product deletion
- Category integration
- Backend CRUD integration

## Shopping Cart

- Add/remove products
- Quantity adjustment
- Shipping calculation
- Persistent cart using localStorage

## Favorites System

- Favorite/unfavorite products
- Persistent favorites using localStorage

## Theme System

- Dark mode / Light mode
- Persistent theme preferences

---

# 🔌 REST API

## Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register user |
| POST | `/auth/login` | Authenticate user |
| GET | `/auth/me` | Get authenticated user |

## Products Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | List all products |
| GET | `/products/{id}` | Get product by ID |
| POST | `/products` | Create product (ADMIN) |
| PUT | `/products/{id}` | Update product (ADMIN) |
| DELETE | `/products/{id}` | Delete product (ADMIN) |

## Categories Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | List categories |
| POST | `/categories` | Create category |

---

# 🗃️ Database Structure

## Example Product Model

```json
{
  "id": 1,
  "name": "RTX 4060",
  "category": "Hardware",
  "price": 2999,
  "stock": 10,
  "description": "High performance GPU",
  "imageUrl": "/placadevideo-nt.webp"
}
```

## Example Authentication Response

```json
{
  "token": "jwt-token",
  "user": {
    "id": 1,
    "name": "Admin",
    "email": "admin@test.com",
    "role": "ADMIN"
  }
}
```

---

# ⚙️ Backend Architecture

```text
Controller
   ↓
Service
   ↓
Repository
   ↓
PostgreSQL
```

## Layers

### Controller

Handles HTTP requests and API responses.

### Service

Contains business rules and application flow.

### Repository

Communicates with PostgreSQL using JPA/Hibernate.

---

# 🔐 Security Architecture

```text
Client Request
      ↓
JWT Filter
      ↓
Spring Security
      ↓
Protected Endpoint
```

Security implementation includes:

- Stateless authentication
- JWT validation
- Route protection
- Role-based authorization
- Password encryption with BCrypt
- Authentication filters
- Protected admin routes

---

# 🧠 Technical Evolution

Nature Tech originally started as a frontend-oriented e-commerce prototype and later evolved into a complete full-stack application with a modern Java backend architecture.

The project migration included:

- Transition from mock data to real API integration
- PostgreSQL relational database integration
- Dockerized infrastructure
- Backend redesign with Spring Boot
- Layered architecture implementation
- JWT authentication system
- Role-based authorization
- Admin management system
- Dynamic product rendering
- Removal of hardcoded frontend product data

---

# 🚀 Running Locally

## Requirements

- Node.js
- Java JDK 17+
- Docker

---

## Backend

```bash
cd backend-java

docker compose up -d

./mvnw spring-boot:run
```

Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

API available at:

```text
http://localhost:8080
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend available at:

```text
http://localhost:3000
```

---

# 📋 Roadmap

## In Progress

- Checkout system
- Improved API validation
- Frontend state optimization
- Better admin experience

## Planned

- Order management
- User accounts
- Payment integration
- Automated testing
- Deployment pipeline improvements
- CI/CD
- Cloud deployment
- Product search & filters

---

# 🌐 Deployment

Frontend deployed on Vercel:

https://nature-tech.vercel.app/

---

# 👨‍💻 Author

Paulo Emilio de Toledo Jr

- GitHub: https://github.com/paulojrtoledo
- LinkedIn: https://www.linkedin.com/in/pauloemilio-tech/

---

# 📄 License

MIT License

