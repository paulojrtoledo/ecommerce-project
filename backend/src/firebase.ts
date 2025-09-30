import admin from "firebase-admin";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// Pega o caminho da chave do .env
const serviceAccountPath = path.resolve(__dirname, "../firebase-service/firebase-service-key.json");

// Lê e transforma em objeto
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
