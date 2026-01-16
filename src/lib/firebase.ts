// lib/firebaseAdmin.ts
import admin from 'firebase-admin';

console.log("-----------------------------------------");
console.log("DEBUG: Initializing Firebase Admin");
console.log("Project ID from ENV:", process.env.FIREBASE_PROJECT_ID);
console.log("Client Email from ENV:", process.env.FIREBASE_CLIENT_EMAIL);

console.log("Private Key Exists?", !!process.env.FIREBASE_PRIVATE_KEY);
console.log("-----------------------------------------");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
     
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
    
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET, 
  });
}

const db = admin.firestore();
const storage = admin.storage();

export { db, storage };