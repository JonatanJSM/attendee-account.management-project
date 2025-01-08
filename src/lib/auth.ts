import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index"; // your drizzle instance
import { admin, openAPI } from "better-auth/plugins";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "sqlite",
    }),
    plugins: [ 
        admin(),
        openAPI(),
    ],
    emailAndPassword: { 
        enabled: true, 
    },
});
