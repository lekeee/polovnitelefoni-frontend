"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const isLogin = mode === "login";

  return (
    <>
      <Navbar />
      <div className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
        <section className="w-full max-w-7xl px-5 py-24 mx-auto z-10 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <LoginForm onToggle={() => setMode("register")} />
              </motion.div>
            ) : (
              <motion.div
                key="register-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <RegisterForm onToggle={() => setMode("login")} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* SHAPE DOLE LEVO - Login */}
        <AnimatePresence>
          {isLogin && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: -50, y: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: -50, y: 50 }}
              transition={{ duration: 0.4 }}
              className="w-56 h-56 bg-[#f9f0f4] absolute bottom-0 left-0 rounded-tr-full flex items-center justify-center z-0"
            >
              <Image
                src="/icons/phone.svg"
                width={64}
                height={64}
                alt="Phone"
                className="-translate-x-8 translate-y-5 opacity-30"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* SHAPE GORE DESNO - Registracija */}
        <AnimatePresence>
          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 50, y: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 50, y: -50 }}
              transition={{ duration: 0.4 }}
              className="w-56 h-56 bg-[#ebf4fd] absolute top-0 right-0 rounded-bl-full flex items-center justify-center z-0"
            >
              <Image
                src="/icons/phone-blue.svg"
                width={64}
                height={64}
                alt="Phone"
                className="translate-x-8 -translate-y-5 opacity-30 rotate-180"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
