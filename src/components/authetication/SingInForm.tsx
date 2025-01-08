"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-3 text-center text-primary">Sign In</h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your email below to login to your account
      </p>
      <div className="grid gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <a
              href="/forget-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember-me"
            className="checkbox checkbox-primary"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="remember-me" className="text-sm">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "btn-disabled loading" : ""}`}
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            try {
              // Simulate sign-in logic
              console.log("Sign in with", { email, password, rememberMe });
              router.push("/dashboard");
            } catch (err) {
              console.error("Error signing in:", err);
            } finally {
              setLoading(false);
            }
          }}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </div>
      <div className="flex justify-center w-full border-t py-4 mt-6">
        <p className="text-center text-xs text-neutral-500">
          Secured by <span className="text-primary font-semibold">better-auth.</span>
        </p>
      </div>
    </div>
  );
}
