"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { account } from "@/lib/appwrite";
import { AppwriteException } from "appwrite";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const session = await account.createEmailPasswordSession(email, password);
      document.cookie = `accessToken=${session.$id}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      router.push("/admin");
    } catch (err) {
      if (err instanceof AppwriteException) {
        if (err.type === "user_invalid_credentials") {
          setError("Invalid email or password.");
        } else {
          setError(err.message);
        }
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center p-4 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl px-6 sm:px-10 py-8 sm:py-10"
      >
        {/* Top handle */}
        <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-white/40" />

        <h1 className="text-center text-2xl sm:text-3xl font-semibold tracking-wide text-white mb-8">
          LOGIN
        </h1>

        {/* Email field */}
        <label className="block mb-4">
          <span className="sr-only">Email</span>
          <div className="flex items-center gap-3 rounded-lg border border-white/25 bg-white/10 px-4 py-3 focus-within:ring-2 focus-within:ring-white/50 transition">
            <User className="h-5 w-5 text-white/80 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              autoComplete="email"
              className="w-full bg-transparent text-white placeholder-white/70 outline-none text-sm sm:text-base"
            />
          </div>
        </label>

        {/* Password field */}
        <label className="block mb-2">
          <span className="sr-only">Password</span>
          <div className="flex items-center gap-3 rounded-lg border border-white/25 bg-white/10 px-4 py-3 focus-within:ring-2 focus-within:ring-white/50 transition">
            <Lock className="h-5 w-5 text-white/80 shrink-0" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              autoComplete="current-password"
              className="w-full bg-transparent text-white placeholder-white/70 outline-none text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-white/70 hover:text-white transition shrink-0"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </label>

        {/* Error message */}
        {error && (
          <p className="text-sm text-red-300 mt-2 mb-2" role="alert">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-5 rounded-lg bg-slate-900/90 hover:bg-slate-900 disabled:opacity-60 text-white font-medium py-3 transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}