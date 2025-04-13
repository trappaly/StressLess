import { describe, it, expect } from "vitest";
import { config as loadDotenv } from "dotenv";
import { join } from "path";

// get file paths for: base, backend, frontend .env files
const base_env = join(__dirname, "../.env");
const frontend_env = join(__dirname, "../backend/.env");
const backend_env = join(__dirname, "../frontend/.env")

// load the env keys from the defined paths
loadDotenv({ path: base_env })
loadDotenv({ path: frontend_env })
loadDotenv({ path: backend_env })

// define variables needed
const base_env_vars = ["DATABASE_URL", "DIRECT_URL"]
const frontend_env_vars = ["NEXT_APP_BACKEND_BASE_URL", "NEXT_PUBLIC_FIREBASE_API_KEY", "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN", "NEXT_PUBLIC_FIREBASE_PROJECT_ID", "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET", "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID", "NEXT_PUBLIC_FIREBASE_APP_ID", "NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID"]
const backend_env_vars = ["PGHOST", "PGDATABASE", "PGUSER", "PGPASSWORD", "DATABASE_URL", "DIRECT_URL"]

// combined list of required vars
const requiredEnvVars = [base_env_vars, frontend_env_vars, backend_env_vars]

// actually testing presence of expected env vars
describe('Environment Variables', () => {
    for (const envVarList of requiredEnvVars) {
        for (const key of envVarList) {
            it(`${key} should be defined and not empty`, () => {
                expect(process.env[key]).toBeDefined();
                expect(process.env[key]).not.toBe('');
            })
        }
    }
})

// to run all vitests, run this:
// npx vitest --vatch