const admin = require("firebase-admin");

// 1. Copy these EXACTLY from the NEW JSON file you just downloaded
const projectId = "hapi3-ltr";
const clientEmail = "firebase-adminsdk-fbsvc@hapi3-ltr.iam.gserviceaccount.com";
const privateKey =
  "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC+3YDZvzF6HRkM\nIhyOUSFc95OnJKbdsE7ml7r9OIyeoJXusoQZSX3k9+5h4Ps2cquFU57WJn7LGJk7\nNLj1XZjTcxtFjrxx4WVvopomeEl/5ryFqxbch96tuPGxTePDuHbzx/vyFnzX/kjm\n72WhFajT7B1MupLQL5kZQLRmlX5RNu48AdhAszEzf+GjND1aQOqy3vE0qAAPoOqJ\nlpNPpn0UbW1mMOdcmQjD1H7ehMaS5TFaNsguriTOHwhnRHM2kUzJesP7wE5/52u8\nT5spTd2/fT1RZNfcO1YeJ49KNwvdvnMM1IKh4l4ZKl0MYN1cUwloNaYfNjtDptGR\nycQCaVqNAgMBAAECggEAB2KLKoGtEKhBEJjeSXxmodH7fs9afH/moaHzzHnsaPPW\nMUjrdw4CpsIYEWXy2mG39L3uSqNtKv8N6L5KvMWtFNtijf+ul2ps8hOUytHDKEV9\nfF+JECnaqhaalW1p12gTBC4z96M6m+HdIMBZCpFLub1sScx7Qz5gOluoT0LQAyTf\njivzLcchmhqytITyB4T7il40P4aJ+9UqI6lfGpwSavNZajUR1XayzyRAo/VA8n8x\nKyKWl3/XoV6Ubp3edFlMghGjWXJGbAtFbNs6csSbJb3vWjwxH4s+xGK9J2yoPNzX\n1xO2abQIUaaK+XI3t/Amnb3AyxdBxVTIhFJJk2lzIQKBgQDuKTMEgMgyqPC1ed+A\nCDo7LXchZXrR7miiiSIyAhTjrBVn/UNYe0QmC9ePi7H23nD9qDrZVDqiqoPVnDUD\nMeDsIFF/rE8KOk4NANKwTC0/iackp2x/aE0fRIw1JQkhPcsOf/w2kX02ZbnTgX/l\nQW+6xv1NGSOrB1gcPgeFZs4ObQKBgQDNKWV4FWWKy9kEHD3xmBauYA1eT6o2suKF\njV0B01FwUOuVFxq7X5L/J3AFlqBXvlVkwJJVxPq569ttOiHhUd6nv1TjYjulnK3+\nVNmw1unBvK4vDx+1IddQ9ZI2Kb3QOQSCd2/VZfyC+OLiCCVtGQIX5agNbFYREnsY\nDUkoZw5ooQKBgQCtgURStoOjLKLYgyZJfzT1IeVVZjn5MQf3yZIo/o07ZIXf0Ym7\nr2nxkdUEFdCcOmf01BezdwKUuUb8WyXf4vmq7MyTB/Q5TkrIfF4B5C1eyakEMhkA\nJPtymRzQJuAk4IDLWoBjPNEMzUV5CjIj0e1VFF07SuJKWjpdsO8Hx+K8bQKBgQDJ\nA4pbwfsfpuMW1+UJVY7Dg3EVutB3j4XKfNtn8niUp3RrO5wBgn8waJ+lmhO4ZNCe\nSuAWEU3n5GO1/YM8lU6m5RxzPchbV8xSqSgx0CBwpkGz8gmLG4Ev3axITVWhMnxs\nqEF2wNpMKTeDZ5/j6ODYMTgbDs61I3pf8oR/hZnkgQKBgQCtCq40OwPSMbVx3ITL\nDTHg0f7RTvAyoxxVBhAgBYno0OaPDbperTHO3C5remRov9IJrhHLaAr6BMp3sdtV\nJNwVW6Nz5NqhVR0xN4H2+DSSRDZOnFzA1vMQP4xFKHepG1xBOh1kf6rhXNvkZ5UN\nTlStdstcAlnKqFL7ncuPUnTn7A==\n-----END PRIVATE KEY-----\n";

console.log("Testing Connection for:", projectId);

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      // This handles the newlines for you
      privateKey: privateKey.replace(/\\n/g, "\n"),
    }),
  });

  const db = admin.firestore();

  async function testDB() {
    console.log("Attempting to write to Firestore...");
    // We try to write to the 'businesses' collection you already have
    const docRef = await db.collection("businesses").add({
      test: "Connection Successful",
      time: new Date().toISOString(),
    });
    console.log("SUCCESS! Document written with ID:", docRef.id);
  }

  testDB();
} catch (error) {
  console.error("SCRIPT ERROR:", error);
}
