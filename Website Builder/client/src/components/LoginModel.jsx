import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import axios from "axios";
import { serverUrl } from "../config";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function LoginModal({ open, onClose }) {
  if (!open) return null;

  const dispatch = useDispatch(); // ✅ FIX 1

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const { data } = await axios.post(
        `${serverUrl}/api/auth/google`,
        {
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
        },
        { withCredentials: true }
      );

      dispatch(setUserData(data)); // ✅ now works
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#0b0b0b] p-8 shadow-2xl z-10">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition"
        >
          ✕
        </button>

        <div className="flex justify-center mb-4">
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">
            AI-powered website builder
          </span>
        </div>

        <h1 className="text-center text-2xl font-semibold mb-1">
          Welcome to <span className="text-purple-400">GenWeb.ai</span>
        </h1>

        <p className="text-center text-zinc-400 text-sm mb-6">
          Sign in to continue
        </p>

        <button
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition shadow-lg"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="google"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default LoginModal;