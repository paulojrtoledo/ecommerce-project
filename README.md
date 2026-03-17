# 🛒 E-Commerce Project

Full-stack e-commerce platform built with React, TypeScript and Node.js — featuring a complete product catalog, shopping cart, favorites list and dark mode. Live on Vercel.

👉 **[Live Demo](https://ecommerce-project-abt7.vercel.app/)**

---

## 🚧 Status

> Active development. Core features are functional. Authentication integration in progress.

---

## 🏗️ Architecture

```
Frontend (React + TypeScript) → Backend (Express + TypeScript) → Firebase Firestore
         Vercel Deploy                    REST API /products
```

---

## 💻 Technologies

### Frontend
- React 17 + TypeScript
- Material-UI 5
- React Router 6
- Axios
- Swiper (carousel)
- Context API (cart, favorites, theme)

### Backend
- Node.js + Express 5.1 + TypeScript
- Firebase Firestore
- Firebase Admin SDK
- dotenv / CORS

---

## ✅ Implemented Features

### Frontend Pages

| Route | Page | Description |
|---|---|---|
| `/` | HomePage | Full landing page with hero, reviews, highlights, pricing and FAQ |
| `/produtos` | ProductsPage | Product catalog with 18 items across 3 categories |
| `/meu-carrinho` | CartPage | Shopping cart with quantity control and shipping calculation |
| `/favoritos` | FavoritesPage | Favorites list |
| `/login` | LoginPage | Login UI — backend integration pending |

### Shopping Cart
- Add / remove items, quantity adjustment
- Subtotal, shipping (free above R$1,000, otherwise R$50) and total calculation
- Brazilian price formatting
- Persisted in localStorage

### Favorites
- Add / remove favorites
- Persisted in localStorage

### Theme
- Light / Dark mode toggle
- Persisted in localStorage

### Home Page Components
- `AppBar` — navigation with cart, favorites and theme toggle
- `Hero` — carousel with CTA
- `Products` — product preview section
- `Reviews` — 6 customer reviews
- `Highlights` — 6 feature cards
- `NatureTechCloud` — 3 pricing plans
- `FAQ` — accordion
- `Footer` — newsletter and links

### Product Catalog (18 products)

| Category | Products |
|---|---|
| Hardware (6) | GPU, CPU, SSD, Motherboard, Monitor, Case |
| Gadgets & Peripherals (6) | Headset, Keyboard, Mouse, Audio Interface, Drum Pad, Docking Station |
| Smart Devices (6) | IoT Hub, Smartwatch, Camera, Earbuds, Alarm, Sensor |

### Backend REST API (`/products`)

| Method | Route | Function |
|---|---|---|
| GET | `/products` | List all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

- Data model: `{ id, name, category, price, stock }`
- Seed script (`seedFirestore.ts`) populates 9 products across 3 categories

---

## 📋 Pending

- [ ] Frontend integration with backend API (products currently hardcoded)
- [ ] Functional authentication (JWT login/register)
- [ ] Checkout flow
- [ ] Admin panel
- [ ] Automated tests

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project configured

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Access: `http://localhost:5173`

### Backend

```bash
cd backend
npm install
npm run dev
```

API available at: `http://localhost:5000`

---

## 🌐 Deploy

Frontend deployed on **Vercel**: [https://ecommerce-project-abt7.vercel.app/](https://ecommerce-project-abt7.vercel.app/)

---

## 📄 License

MIT License

---

**Author:** Paulo Emilio de Toledo Jr
[LinkedIn](https://www.linkedin.com/in/pauloemilio-tech) | [GitHub](https://github.com/paulojrtoledo)
