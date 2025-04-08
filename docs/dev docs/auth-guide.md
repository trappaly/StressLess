# Auth Guide

We use **Firebase Authentication** (email & password only) to handle user sign-in and identity verification in our app.

Please ask Khanh to add you to the Firebase project.

---

## How It Works (Frontend)

### We use the [Firebase Web SDK](https://firebase.google.com/docs/auth/web/start) to:

- **Sign Up** a user with email/password
- **Sign In** and receive an ID token (JWT)
- **Persist session** in the browser (handled by Firebase)

```ts
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
await signInWithEmailAndPassword(auth, email, password);
```

Firebase handles:
- Session storage (local/session storage depending on your config)
- Token refresh automatically behind the scenes

---

## Sending Auth to the Backend

Once the user signs in, Firebase automatically includes a valid **ID token (JWT)** in the user's session.

To talk to the backend securely:
1. **Get the ID token** from Firebase:
   ```ts
   const idToken = await auth.currentUser?.getIdToken();
   ```
2. **Include it in your API requests**:
   ```ts
   fetch('/api/protected-route', {
     headers: {
       Authorization: `Bearer ${idToken}`,
     },
   });
   ```

---

## What the Backend Should Do

In the backend, we **verify the token** with Firebase Admin SDK:

```ts
const admin = require('firebase-admin');
const idToken = req.headers.authorization?.split('Bearer ')[1];
const decodedToken = await admin.auth().verifyIdToken(idToken);
const uid = decodedToken.uid;
```

This ensures:
- Token is valid
- Not expired or tampered
- You can trust the `uid` and email coming from the token

---

## What's Stored

- **Frontend**: Firebase SDK handles tokens, session, and refresh internally in the browser.
- **Backend**: No passwords stored. We can store the Firebase UID, email, or other metadata in our own DB as needed.

---

## Notes

- Never store the user's raw password
- Always verify ID tokens server-side
- Protect sensitive API routes using the token