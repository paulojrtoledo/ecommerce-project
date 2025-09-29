import admin from 'firebase-admin';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); // garante que process.env está carregado

const serviceAccount = JSON.parse(
  fs.readFileSync(process.env.FIREBASE_SERVICE_ACCOUNT as string, 'utf-8')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
