"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";

export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 shadow-xl rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-primary">Sign Up</h1>
      <p className="text-sm text-gray-500 mb-6 text-center">
        Enter your information to create an account
      </p>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="first-name">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Max"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="last-name">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Robinson"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
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
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="password_confirmation">
            Confirm Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            className="input input-bordered w-full"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="image">
            Profile Image (optional)
          </label>
          <div className="flex items-center gap-4">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-16 h-16 rounded-full border border-gray-200 shadow-sm"
              />
            )}
            <input
              id="image"
              type="file"
              className="file-input file-input-bordered w-full"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <button
                type="button"
                className="btn btn-error btn-sm"
                onClick={() => setImagePreview(null)}
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <button
          type="button"
          className={`btn btn-primary w-full ${loading ? "btn-disabled loading" : ""}`}
          disabled={loading}
          onClick={async () => {
            if (password !== passwordConfirmation) {
              toast.error("Passwords do not match");
              return;
            }
            await signUp.email({
              email,
              password,
              name: `${firstName} ${lastName}`,
              image: imagePreview || "https://example.com/default-image.png",
              callbackURL: "/dashboard",
              fetchOptions: {
                onResponse: () => {
                  setLoading(false);
                },
                onRequest: () => {
                  setLoading(true);
                },
                onError: (ctx) => {
                  toast.error(ctx.error.message);
                },
                onSuccess: async () => {
                  router.push("/");
                },
              },
            });
          }}
        >
          {loading ? "Loading..." : "Create an account"}
        </button>
      </div>
    </div>
  );
}
